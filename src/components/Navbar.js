import React from 'react'
import {  Link, NavLink} from "react-router-dom";
export default function Navbar() {
  return (
    <>
        
        
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            
            <Link to="/" className="navbar-brand" >
                <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-3"></i>Kalishi Foundation</h1>
                </Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto">

                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/About" className="nav-item nav-link">About Us</NavLink>
                <NavLink to="/OnlineClasses" className="nav-item nav-link">Online Classes</NavLink>
                <NavLink to="/ContactUs" className="nav-item nav-link">Contact Us</NavLink>
                
                </div>
                
                <NavLink to="" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i className="fa fa-arrow-right ms-3"></i></NavLink>
             
            </div>
        </nav>
       
    </>
  )
}
