import React from "react";
import "./Home.css";


import Video from "../../Images/VideoHouse.mp4";
function HeroSection() {
    
  return (
    <div className="HomeContainer">
      
      <div className="HomeBg">
        <video className="VideoBg" autoPlay loop muted src={Video} type="video/mp4" />
      </div>

      <div className="HomeContent">
        <div className="HomeH1">Book Your Property Easily</div>
        <div className="HomeP">
        <div className="Btn" id="discover_btn">
              Book Now
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default HeroSection;