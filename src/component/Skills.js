import React from 'react'
import webd from "../images/webd1.png";
import kali from "../images/kali.png";
import python from "../images/python.png";
import net from "../images/net.png";
import '../css/Chome.css'
function Skills() {
 return (
    <div className="skill">
        <div className="skill-title">
          <h5>Cyber Secuirity: Skills Required</h5>
        </div>
        <div className="skill-image">
          <div className="skill-img1">
            <img src={webd} alt="" className='img-test2' />
            <p className='skill-te'>Web Development Basics (html, css , java script)</p>
          </div>
          <div className="skill-img1">
            <img src={kali} alt="" className='img-test2' />
            <p className='skill-te'> Kali Linux</p>
          </div>
          <div className="skill-img1">
            <img src={net} alt="" className='img-test2' />
            <p className='skill-te'>Network Baisc (Network Protocols, IP address)</p>
          </div>
          <div className="skill-img1">
            <img src={python} alt=""  className='img-test2'/>
            <p className='skill-te'>Python</p>
          </div>
        </div>
      </div>
  )
}

export default Skills