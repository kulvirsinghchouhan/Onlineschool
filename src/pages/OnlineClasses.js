import React from 'react'
import Navbar from '../components/Navbar'; // Assuming Navbar component is in the same directory or adjust path accordingly
import {  Link } from "react-router-dom";
import Schoolclasses from '../components/Schoolclasses';
import Popularteachers from '../components/Popularteachers';
import Footer from '../components/Footer';

const OnlineClassNamees = () => {
  return (
    <>
      <Navbar />

      <div className="container-xxl py-5 page-header position-relative mb-5">
        <div className="container py-5">
          <h1 className="display-2 text-white animated slideInDown mb-4">Online class  </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Online class</li>
            </ol>
          </nav>
        </div>
      </div>


    <Schoolclasses/>
    <Popularteachers/>
    <Footer/>
      </>
  )
}

export default OnlineClassNamees
