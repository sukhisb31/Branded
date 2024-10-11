import React from 'react';
import "./brand.css";

const brand = () => {
    return (
        <div className='container'>
           <nav>
            <div className='logo'>
                <img src="/images/brand_logo.png" alt="logo" />
                
            </div>
            <ul>
                <li href="" >Menu</li>
                <li href="" >Location</li>
                <li href="" >About</li>
                <li href="" >Contact</li>
            </ul>
            <button>Login</button>
           </nav>
           {/* -----------------------nav section end-------------------------- */}
           {/*---------------------- Section Center Start ----------------------*/}
           <article className="section-center">
            <div className="center-text">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                YOUR FEET DESERVE THE BEST AND HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="btn">
                    <button> Shop Now</button>
                    <button className='category'> Category</button>
                </div>
                <div className="available">
                    <p>Also Available</p>
                    <div className="icons">
                        <img src="/images/amazon.png" alt="amazon" />
                        <img src="/images/flipkart.png" alt="flipkart" className='flipkart'/>
                    </div>
                </div>
            </div>
            <div className="hero-img">
            <img src="/images/hero-image.png" alt="hero-image" />
           </div>
           </article>

           
        </div>
    )
}

export default brand
