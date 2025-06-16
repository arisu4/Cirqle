import React from 'react';
import './Banner.css';
import home1 from '../assets/images/ho1.jpeg'
import home2 from '../assets/images/home2.png';
import home3 from '../assets/images/home3.png';
import home4 from '../assets/images/home4.jpeg'; // Make sure this is correct
import rectangle from '../assets/images/rectangle.png'

const HomeSection = () => {
    return (
      <div className="home-container">
        {/* Left side images */}
        <div className="side-banner left-side">
        <img className="image-box image-bottom-extended1 home4-image" src={home4} alt="Snag deals banner" />
        <div className="image-box">
        <img className="image-bottom-extended" src={home1} alt="Camera guy" />
        </div>
        </div>

        {/* Center video */}
        <div className="center-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Sample video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
  
        {/* Right side images */}
        <div className="side-banner right-side">
          <div className="image-box">
            <img src={home2} alt="Home 2" />
          </div>
          <div className="image-box">
            <img src={home3} alt="Home 3" />
          </div>
        </div>
  
        {/* CTA banner */}
        <div className="cta-banner">
  <img src={rectangle} alt="Decorative Icon" className="banner-image" />
  <div className="banner-text">
    SIGN UP. CASH IN. IT’S YOUR ERA. START NOW 
    <span className="emoji">🤑</span>
  </div>
  </div>


      </div>
    );
  };
  

export default HomeSection;
