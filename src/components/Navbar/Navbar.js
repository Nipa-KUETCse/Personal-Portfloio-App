import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="hero">
      <nav>
        <h2 className="logo">
          Portfo<span>lio</span>
        </h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <a href="#" className="btn">
          Subscribe
        </a>
      </nav>

      <div className="content">
        <h4>hello, My name is</h4>
        <h1>
          Anasua <span>Acharjya</span>
        </h1>
        <h3>I'am a Web Developer</h3>
        <div className="newslatter">
          <form>
            <input type="email" id="nail" placeholder="Enter Your Email" />
            <input type="submit" name="submit" value="Lets Start" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
