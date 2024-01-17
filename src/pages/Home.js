import React from 'react'
import './Home.css'
import imaa from "../images/imaa.jpg"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"


const About = () => {
  const navigate = useNavigate();
  return (
    <div>
    <div className='home' >
      <div className='left' >
        <h4>Hello there, I am Churchil</h4>
        <h1>I am a web developer</h1>
        <h3>I am a Web developer with extensive experience
          for over two years.</h3>
        <h4>Crafting product that people Love</h4>
        <button onClick={()=> navigate('./Contact')} >Hire Me</button>
      </div>
      <div className='right' >
        <img className='rotating' src={imaa} alt="" />
        
      </div>
      
    </div>
    <Footer />
    </div>
  )
}

export default About