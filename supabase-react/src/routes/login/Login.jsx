import { useState } from 'react';
import Nav2 from "../../Navigation/Nav2";
import './Login.css';
import { supabase } from "../../supabaseClient";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error: queryError } = await supabase
                .from('users')
                .select('*')
                .eq('email', email)
                .eq('password', password)
                .single();

            if (queryError || !data) {
                setError("Invalid email or password.");
            } else {
                console.log("Login successful", data);
                navigate('/');
            }
        } catch (err) {
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Nav2 />
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
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
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                {error && (
                    <p style={{
                        color: "red",
                        fontSize: 14,
                        marginTop: "10px" // Add some spacing above the error message
                    }}>{error}</p>
                )}
                <p>Don't have an account? <a href="/signup">Click here to signup</a></p>
            </div>
        </>
    );
}

export default Login;
