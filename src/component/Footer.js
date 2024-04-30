import React from "react";
import myimg from "../images/logo.png";
import '../css/footer.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
function Footer() {
  return (
    <>
      <footer>
       <>
          <div className="footer-content">
            <div className="footer-logo">
              <ul>
                <li >
                  
                  <img className="footer-img"src={myimg} alt="Company Logo" />
                </li>
                
                <li className="footer-li">Help</li>
              </ul>
            </div>
            <div className="footer-logo">
              <ul>
                <li>
                  <h2 className="footer-h2">Product</h2>
                </li>
                
                <li className="footer-li">Services</li>
              </ul>
            </div>
            <div class="footer-logo">
              <ul>
                <li><h2 className="footer-h2">Company</h2></li>
                <li className="footer-li">About </li>
                <li className="footer-li">Privacy policy</li>
                 <li className="footer-li">Terms of condition </li>
                 <li className="footer-li">Contact us</li>
                  
              </ul>
            </div>
            <div className="icons">
  <BiLogoFacebook className='icon1'/>
  <AiFillLinkedin className='icon2'/>
  <AiFillInstagram className='icon3'/>
  <AiFillGithub className='icon4'/>
</div>
          </div>
          </>
      </footer>
    </>
  );
}

export default Footer;