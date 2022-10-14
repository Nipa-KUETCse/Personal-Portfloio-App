import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Anasua Acharjya</p>
      <p>
        For more HTML, CSS and coding tutorial - please click on the link below
        to subscribe my channel.
      </p>
      <div className="social">
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-dribbble"></i>
        </a>
      </div>
      <p className="end">@CopyRight By Anasua Acharjya</p>
    </footer>
  );
};

export default Footer;
