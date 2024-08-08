import React from 'react';
import "../styles/Hero.css";

import Slider from './Slider';

function Hero() {
  return (
    <div className='Hero'>
        <div className="hero-flex">
            <p className="heading">— Dream Single Family House in Silver Lake</p>
            <div className='HeroTwo'>
                <div>
                    <p className='title'>1936 Redcliff St, LA</p>
                    <div className="stats">
                        <p>6 Beds</p>
                        <div className="stat-line"></div>
                        <p>2 Bath</p>
                        <div className="stat-line"></div>
                        <p>3,760 Sq.Ft.</p>
                    </div>
                </div>
                <div>
                    <p className="desc">Discover the charm of this single-family home nestled in Silver Lake. With its inviting atmosphere and vibrant location, it's the perfect place to call home.</p>
                    <a href="#" className="hero-link">Explore Now</a>
                </div>
            </div>
        </div>
        <Slider />
    </div>
  )
}

export default Hero