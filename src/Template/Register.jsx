import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const register = () => {
    return (
        <div className="register-m">
            <form className="register">
            <h1>Sign Up</h1><hr/>
            <label htmlFor="First Name">First Name:</label>
            <input type="text"  placeholder="Enter your First name"/><br/>
            <label htmlFor="Last Name">Last Name:</label>
            <input type="text" placeholder="Enter your Last name"/><br/>
            <label htmlFor="Email">Email:</label>
            <input type="email" placeholder="Enter your Email"/><br/>
            <label htmlFor="Username">Username:</label>
            <input type="text" placeholder="Enter your Username"/><br/>
            <label htmlFor="Phone">Phone:</label>
            <input type="text" placeholder="Enter your Phone number"/><br/>
            <label htmlFor="Password">Password:</label>
            <input type="password" placeholder="Create a password" /><br/>
            <label htmlFor="Confirm Password">Confirm Password:</label>
            <input type="password" placeholder="Confirm a password" /><br/>
            <div className="bttn">
                <button type="submit">Sign Up</button>
                <button type="reset">Reset</button>
            </div>
            Do you have an account?<Link to="/login">&nbsp;Log in here</Link>
            </form>
            
        </div>
    )
}
export default register;
