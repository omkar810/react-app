import React, { useState } from 'react';
import './homestyle.css';
import  {Link} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
    const [showMenu,setShowMenu] = useState(false);
    return (
            <div className="navbar" id="nav">
            <h2 className="h2">
                <span>F</span>ood
                <span>B</span>log
            </h2>
            <div className={showMenu ? "menu-link m-nav" : "menu-link"}>
                <ul>
                    <li><Link to="/" onClick={() =>setShowMenu(!showMenu)}>Home</Link></li>
                    <li><Link to="/portfolio" onClick={() =>setShowMenu(!showMenu)}>Recipes</Link></li>
                    <li><Link to="/about" onClick={() =>setShowMenu(!showMenu)}>About</Link></li>
                    <li><Link to="/contact" onClick={() =>setShowMenu(!showMenu)}>Contact</Link></li>
                </ul>
            </div>
            <div className={showMenu ? "signup s-nav" : "signup"}>
                <ul className="signup-desktop">
                    <li><Link to="/login" onClick={() =>setShowMenu(!showMenu)}>Log in &nbsp;|</Link></li>
                    <li className="green" id="green"><Link to="/register" onClick={() =>setShowMenu(!showMenu)}>&nbsp;Register</Link></li>
                </ul>
            </div>
            <div className="burger">
                    <a href="#" onClick={() =>setShowMenu(!showMenu)}>
                        <GiHamburgerMenu className="size" />
                    </a>
            </div>
        </div>
    )
}
