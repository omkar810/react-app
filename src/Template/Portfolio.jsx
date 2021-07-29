import React from 'react';
import './Portfolio.css';
const portfolio = () => {
    return (
        <div className="portfolio">
         <div className="recipe1"><iframe src="https://www.youtube.com/embed/z3wDvolTbZI"  frameborder="0" allow="accelerometer; autoplay"></iframe></div>
         <div className="recipe2"><iframe src="https://www.youtube.com/embed/oNSCiAuKs7c"  frameborder="0" allow="accelerometer; autoplay"></iframe></div>
         <div className="recipe3"> <iframe src="https://www.youtube.com/embed/BKxGodX9NGg"  frameborder="0" allow="accelerometer; autoplay"></iframe></div>
         <div className="recipe4"> <iframe src="https://www.youtube.com/embed/axxfWjoZoew"  frameborder="0" allow="accelerometer; autoplay"></iframe></div>
        </div>
    );
}
export default portfolio;

