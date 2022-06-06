/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Navigation.css';
const Navigation = () => {
  return (
    <div>
     <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="https://alamgirkabir.netlify.app/">About</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="logo">Welcome</h1>
        </div>
    </nav>
  </div>
  )
}

export default Navigation