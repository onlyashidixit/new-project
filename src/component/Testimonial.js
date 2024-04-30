import React from 'react'
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import "../css/Testimonial.css"
function Testimonial() {
  return (
    <>
    <div className="main-container">
      <div className="test-he">
        <h3>Testimonial</h3>
      </div>

      <div className="media-scroller card-inline">
        <div className="media-element">
          <img src={img1} alt="" className='img-test'/>
          <h4 className="title">Richard</h4>
          <p className='test-te'>"The prompt and effective communication throughout the process made the entire experience seamless."</p>
        </div>
        <div className="media-element">
          <img src={img2} alt="" className='img-test' />
          <h4 className="title">Claire marine</h4>
          <p className='test-te'>" Their commitment to excellence and customer satisfaction is unparalleled, making them a standout choice in the industry. Thank you for a truly outstanding experience!"</p>
        </div>
        <div className="media-element">
          <img src={img3} alt="" className='img-test' />
          <h4 className="title">Edward Deff</h4>
          <p className='test-te'>"From the moment I engaged with their team, it was clear that customer satisfaction is their top priority. The professionalism, attention to detail, and dedication to meeting my specific needs were truly impressive."</p>
        </div>
      </div>
            
        </div>
     
    </>
  )
}

export default Testimonial