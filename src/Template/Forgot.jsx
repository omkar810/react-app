import React from 'react';
import { Link } from 'react-router-dom';
import './Forgot.css';

const forgot = () => {
    return (
        <div className="forgot">
            <div className="center-f">
                <form>
                <h1>Forgot Password</h1><hr />
                <input type="email" placeholder="Enter your Email id" /><br />
                <button type="submit">Reset Password</button>&nbsp;or <Link to="/login">Log In</Link>
                </form>
            </div>
        </div>
    );
}
export default forgot;
