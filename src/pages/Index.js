import React from 'react'
import NavBar from "../component/NavBar"
import Home from '../component/Home'
import Aboutus from '../component/Aboutus'
import Testimonial from '../component/Testimonial'
import Intern from '../component/Intern'
import Contactus from '../component/Contactus'
import Footer from '../component/Footer'
function Index() {
  return (
    <>
    <NavBar/>
   <Home/>
   <Aboutus/>
   <Intern/>
   <Testimonial/>
   <Contactus/>
   <Footer/>

    </>
  )
}

export default Index