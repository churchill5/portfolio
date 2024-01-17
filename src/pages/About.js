import React from 'react'
import './About.css'
import imee from "../images/imee.jpg"
import Footer from './Footer'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
    <div className='whole' >
      <img src={imee} alt="" />
      <div className='loosh' >
        <h1>Hello</h1>
        <p>I am Churchil, a web developer in Kenya. I have a Bachekor Degree of science
          in Computer Science and over two years experince in web development.
        </p>
        <p>
          My desire is to build for you a website of your own wish
        </p>
        <p>
          To hire me, just click the button below and email me.I'll attend to you  ASAP!
        </p>
        <Link className='pooo' to="/Contact">Hire Me</Link>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default About