import React from "react";
import NavBar from "../component/NavBar";
import "../css/contactusnav.css";

const ContactUs = () => {
  return (
    <>
    <div className="contact-us">
      <div className="contact-us1">
        <span>Cont</span>
        <span className="act-us">act us</span>
      </div>
      <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
      <div className="frame-parent">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="your-name">Your name</div>
        </div>
        <div className="rectangle-group">
          <div className="frame-item" />
          <div className="email-address">Email address</div>
        </div>
        <div className="rectangle-container">
          <div className="frame-item" />
          <div className="email-address">Mobile number</div>
        </div>
        <div className="frame-div">
          <div className="rectangle-div" />
          <div className="write-your-message">Write your message</div>
        </div>
        <div className="frame-child1" />
        <div className="sign-up">Sign up</div>
        <div className="frame-child2" />
        <div className="send">Send</div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
