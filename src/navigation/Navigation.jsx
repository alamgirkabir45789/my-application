/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import profile from '../assets/images/AlamgirSmallSizePP.jpg';
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
                <li><Link  to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">Sign Up</Link></li>
                <li><Link to="/about">Login</Link></li>
                <li><Link to="/about">
                  <img className='rounded-circle img-fluid img-thumbnail float-right mx-auto ' src={profile} height={40} width={40}></img>
                  </Link></li>
                {/* <li><Link>Category</Link></li>
                <li><Link>Sign Up</Link></li>
                <li><Link>Login</Link></li>
                <li><Link>Contact</Link></li> */}
            </ul>
            <h1 className="logo">Welcome</h1>
        </div>
    </nav>
    <hr></hr>
    <Outlet />
    <div className="footer">
        <footer>
          <p>&copy; 2022 alamgirkabir.com</p>
        </footer>
      </div>
  </div>
  )
}

export default Navigation