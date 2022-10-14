import React from "react";
import "./about.css";
import images from "../Navbar/image/Untitled.jpeg"

const About = () => {
    
    <div className="about">
      <div className="main">
        <img src={images} alt="" />
        <div className="about-text">
          <h2>About Me</h2>
          <h5>Developer <span>& Designer</span></h5>
          <p>
            I am a front-end web developer. I can provide clean code and pixel
            perfect design. I also make the website more & more interactive with
            web animations. I can provide clean code and pixel perfect design. I
            also amke the website more & more interactive with web animations. A
            responsive design makes your website accessible to all users,
            regardless of their device.
          </p>
          <button>Let's Talk</button>
        </div>
      </div>
    </div>
   
}

export default About;