import React from 'react'

import Navbar from '../components/Navbar';
import Homeslider from '../components/Homeslider';
import Facilities from '../components/Facilities';

import Footer from '../components/Footer';
import Aboutstart from '../components/Aboutstart';
import Becometeacher from '../components/Becometeacher';
import Schoolclasses from '../components/Schoolclasses';
import Cultureactivity from '../components/Cultureactivity';
import Popularteachers from '../components/Popularteachers';
import Clientssay from '../components/Clientssay';
const Home = () => {
  return (
    <>
      <Navbar/>
    <Homeslider/>
    <Facilities/>
    <Aboutstart/>
    <Becometeacher/>
    <Schoolclasses/>
    <Cultureactivity/>
    <Popularteachers/>
    <Clientssay/>
    <Footer/>
    </>
  )
}

export default Home
