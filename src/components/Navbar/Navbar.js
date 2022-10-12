import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <div class="hero">
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
        <a href="#" class="btn">
          Subscribe
        </a>
      </nav>
    </div>
  );
};

export default Navbar;