import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
          <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="menu-items">
              <li><Link to="/">Home </Link></li>
              {/* <li>Student Details</li> */}
              <li><Link to="/contact" >Contact</Link></li>
              <li>Login</li>
            </ul>
            <h1 className="logo">Certificate Generator</h1>
          </div>
        </nav>
    </div>
  )
}

export default Navbar