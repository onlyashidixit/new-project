import React from 'react'
import "../css/contact.css"
function Contactus() {
  return (
    <>
    <div className="contact">
        <div id='contact-he'>
            <h3>Contact us</h3>

        </div>
        <div className="inp-contact">
        <form action="action_page.php">

    <label for="fname">Name</label><br/>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/><br/>

    <label for="lname">gmail</label><br/>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/><br/>

    

    <label for="subject">Write your message</label><br/>
    <textarea id="subject" name="subject" placeholder="Write something.." rows="6" cols="48"></textarea><br/>

    <input type="submit" value="Submit" className='submit-btn'/>

  </form>
        </div>
    </div>
    </>
  )
}

export default Contactus;