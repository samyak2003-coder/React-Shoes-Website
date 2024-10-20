import { useState } from 'react';
import Nav2 from "../../Navigation/Nav2";
import '../login/Login.css';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

function Signup() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);

    const handleSignup = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const { data: existingUser, error: emailCheckError } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        if (emailCheckError && emailCheckError.code !== 'PGRST116') {
            setError("An error occurred while checking the email.");
            setLoading(false);
            return;
        }

        if (existingUser) {
            setError("Email already exists.");
            setLoading(false);
            return;
        }

        const { data, error: insertError } = await supabase
            .from('users')
            .insert([
                {
                    name: name,
                    email: email,
                    password: password
                },
            ]);

        if (insertError) {
            setError(insertError.message);
        } else {
            console.log("User data inserted successfully", data);
            navigate('/');
        }

        setLoading(false);
    };

    return (
        <>
            <Nav2 />
            <div className="signup-container">
                <h2>Signup</h2>
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing up...' : 'Signup'}
                    </button>
                </form>
                {error && (
                    <p style={{
                        color: "red",
                        fontSize: 14,
                        marginTop: "10px"
                    }}>{error}</p>
                )}
            </div>
        </>
    );
}

export default Signup;
