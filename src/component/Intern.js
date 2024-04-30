import React from "react";
import dev from "../images/Dev.png";
import ui from "../images/UI.png";
import linux from "../images/Linux.png";
import "../css/intern.css";
import { Link } from "react-router-dom";
function Intern() {
  return (
    <>
      <div id="int">
     
        <div className="container-int">
          <div className="card-he">
            <h3>Internships</h3>
          </div>
          <div className="card-content">
          <Link to="/UI-UX">
            <div className="card-int1">
              <div className="card-img">
                <img src={ui} alt="" />
              </div>
              <div className="card-te">
                <h7>Cyber Secuirity</h7>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed dveniam
                </p>
                <button className="card-btn">Apply</button>
              </div>
            </div>
            </Link>
            <div className="card-int2">
              <div className="card-img">
                <img src={linux} alt="" />
              </div>
              <div className="card-te">
                <h7>Linux Administration</h7>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed dveniam
                </p>
                <button className="card-btn">Apply</button>
              </div>
            </div>
            <div className="card-int3">
              <div className="card-img">
                <img src={dev} alt="" />
              </div>
              <div className="card-te">
                <h7>Web Development</h7>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed dveniam
                </p>
                <button className="card-btn">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intern;
