import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <>
        <div className="por">
        <div className="welcome">
                <h1>Welcome to FoodBlog</h1>
            </div>
            <div className="slider">
                <figure>
                    <img src={require('./Recipe/puranpoli.jpg').default} alt="loading..." />
                    <img src={require('./Recipe/paneer.jpg').default} alt="loading..." />
                    <img src={require('./Recipe/samosa.jpg').default} alt="loading..." />
                    <img src={require('./Recipe/idli.jpg').default} alt="loading..." />
                    <img src={require('./Recipe/proti.jpg').default} alt="loading..." />
                </figure>        
            </div>
        </div>
            
        </>
    );
}
