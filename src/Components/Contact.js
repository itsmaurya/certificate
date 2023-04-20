import React from 'react'
import "./Contact.css"
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <section id="contact">
          <div className="contact-container container">
            <div className="contact-img">
            <h2>Certificate Generator</h2>
              {/* <img src="https://w0.peakpx.com/wallpaper/950/118/HD-wallpaper-code-coding-javascript-life-tech-technology-thumbnail.jpg" alt="" /> */}
            </div>

            <div className="form-container">
              <h2>Contact Us</h2>
              <input type="text" placeholder="Your Name"  style={{width:"49%"}}/>
              <input type="email" placeholder="E-Mail" style={{width:"48%" , marginLeft:"5.6px"}}/>
              <input type="number" placeholder="Phone" style={{width:"100%"}}/>
              <textarea
                cols="30"
                rows="2"
                placeholder="Type Your Message"
              ></textarea>
              <a href="https://github.com/itsmaurya" className="btn btn-primary">Submit</a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact
