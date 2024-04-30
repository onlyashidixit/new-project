import React from 'react'
import abtimg from '../images/abtimg.gif'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import '../css/about.css'
function Aboutus() {
  return (
    <>
     <div id="aboutus">
        <div className="abt-te">
        TechPulse-Technology is a platform that provides online access to technology specialists who can offer immediate solutions to complex problems. Our platform includes live chats, calls, and seminars to stay up-to-date on new technological advances.
        </div>
        <div className="abt-img">
            <img src={abtimg} alt="" />
        </div>
     </div>
     <div className="icons">
  <BiLogoFacebook className='icon1'/>
  <AiFillLinkedin className='icon2'/>
  <AiFillInstagram className='icon3'/>
  <AiFillGithub className='icon4'/>
</div>
     <div className="banner">
      <div className="b-te">
      <h5>join us now</h5>
      <div className="home-btn">
    <button className='a-btn'>Apply</button>
  </div>
  </div>
     </div>
    </>
  )
}

export default Aboutus