import React from 'react'
import bgimg from '../images/Home-bg.png'
import "../css/home.css"
function Home() {
  return (
    <>
  
        
  <img src = {bgimg} alt = "Freedom Blog" className='home-bg'/>
  <div className="home-te">
    <div className="heading">
  <h5> Join our internship programs </h5>
  <h1>Accelerate your skills with us </h1>
  </div>
  <div className="abt-btn">
    <button className='h-btn'>Apply</button>
  </div>

  <div >
  <button className="news-btn"> Subscribe our newsletter</button>
  </div>
  </div>
 

    
    </>
  )
}

export default Home