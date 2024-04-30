import React from 'react'
import bimg from '../images/hp.png'
import '../css/Chome.css'
function Internpage() {
  return (
    <>
    <div className="content">
    <img src = {bimg} alt = "..." className='bimg'/>
  <div className="c-ht">
    <div className="heading-1">
  <h1>Internship Programs </h1>
  </div>
  <div className="abt-btn">
    <button className='h-btn'>Apply</button>
  </div>
  </div>

  <div className="ui">
    <h6>Career-<span>Cyber Secuirity</span></h6>
  </div>
  </div>

    </>
  )
}

export default Internpage;