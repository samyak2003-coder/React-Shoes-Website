import React from 'react';
import Nav2 from "./Navigation/Nav2";
import './Login.css';

function Signup() {
    return (
        <>
            <Nav2 />
            <div className="signup-container">
                <h2>Signup</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Signup</button>
                </form>
            </div>
        </>
    );
}

export default Signup;
