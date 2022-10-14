import React from "react";
import "./service.css"

const Service = () => {
    return(
        <div className="service">
      <div className="title">
        <h2>Our Services</h2>
      </div>

      <div className="box">
        <div className="cards">
          <i className="fas fa-bars"></i>
          <h5>Web Development</h5>
          <div className="pra">
            <p>
              Every website should be built two primary goals: Firstly, it needs
              to work accross all devices. Secondly, it needs to be fast as
              possible.
            </p>
            <p style={{textAlign:"center"}}>
              <a className="button" href="#">Read More</a>
            </p>
          </div>
        </div>
        <div className="cards">
          <i className="fas fa-user"></i>
          <h5>Web Development</h5>
          <div className="pra">
            <p>
              Every website should be built two primary goals: Firstly, it needs
              to work accross all devices. Secondly, it needs to be fast as
              possible.
            </p>
            <p style={{textAlign:"center"}}>
              <a className="button" href="#">Read More</a>
            </p>
          </div>
        </div>
        <div className="cards">
          <i className="fas fa-bell"></i>
          <h5>Web Development</h5>
          <div className="pra">
            <p>
              Every website should be built two primary goals: Firstly, it needs
              to work accross all devices. Secondly, it needs to be fast as
              possible.
            </p>
            <p style={{ textAlign : "center"}}>
              <a className="button" href="#">Read More</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Service;