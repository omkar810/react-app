import React from 'react'
// import './homestyle.css';
import { Link } from 'react-router-dom';
import{ FaFacebookSquare,
       FaInstagramSquare,
       FaYoutubeSquare } 
from 'react-icons/fa';
import './Contact.css';
const contact = () => {
    return (
        <>
        <div className="social-media">
            <h1>Follow Us on</h1><hr/>
            <ul className="social">
                <li><a href="https://www.facebook.com/omkar.khedekar.3705" target="_blank"><FaFacebookSquare className="facebook"/></a></li>
                <li><a href="https://www.instagram.com/omiii_k09/" target="_blank"><FaInstagramSquare className="instagram"/></a></li>
                <li><a href="https://youtube.com/channel/UCGW2amJ_OB2IG1o_ZHZfXKQ" target="_blank"><FaYoutubeSquare className="youtube"/></a></li>
            </ul>
        </div>
        <div className="contact">
            <h1>Contact Form</h1>
           <form>
              <input type="text" placeholder="Enter your Name"/><br />
              <input type="email" placeholder="Email address"/><br />
              <input type="text" placeholder="Subject"/><br />
              <textarea name="text" id="message" cols="30" rows="10" placeholder="Message"></textarea><br />
              <button type="submit">Send Message</button>
           </form>
        </div> 
        </>
    );
    }
export default contact;
