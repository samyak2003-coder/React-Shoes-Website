import React from 'react';
import Nav2 from "./Navigation/Nav2";
import './Login.css';

function Login() {
    return (
        <>
            <Nav2 />
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="/signup">Click here to signup</a></p>
            </div>
        </>
    );
}

export default Login;
