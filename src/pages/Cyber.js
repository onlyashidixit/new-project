import React from "react";
import NavBar from "../component/NavBar";
import Internpage from "../component/Internpage";
import Skills from "../component/Skills";
import cyber from "../images/cyber.png";
import "../css/Chome.css";

function Cyber() {
  return (
    <>
      <NavBar />
      <Internpage />
      <div className="about-internship">
        <div className="abt-te">
          <p className="cyber-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            facere, esse quos magnam porro veniam, quis iusto eius debitis enim
            pariatur, officia ratione sunt rem inventore quaerat consequatur.
            Reiciendis, cum.
          </p>
          <div className="abt-btn">
            <button className="a-btn">Apply</button>
          </div>
        </div>
        <div className="abt-img">
          <img src={cyber} alt="" className="img-cyber" />
        </div>
      </div>
      <Skills/>
      
    </>
  );
}

export default Cyber;
