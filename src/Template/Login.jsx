import React from 'react';
import './Sign.css';
import { Link } from 'react-router-dom';

const login = () => {
    return (
        <div className="login">
            <form className="sign-in">
                <h1>Log In</h1>
                <hr />
                <div className="center">
                    <div className="first">
                        <label htmlFor="Username">Username:</label>
                            <input type="text" className="border" placeholder="Enter username or email" />
                    </div>
                    <div className="next">
                        <label htmlFor="Username">Password:</label>&nbsp;
                            <input type="password" className="border" placeholder="Enter password" />
                    </div>
                    <button type="submit">Log in</button>
                    <p>or <Link to="/forgot">Forgot Password</Link></p>
                    <p>Don't Have an Account? <Link to="/register">Create a new account</Link></p>
                </div>
            </form>
        </div>

    )
}
export default login;