import React from 'react'
import './Projects.css'
import imaa from "../images/imaa.jpg"
import maren6 from "../images/maren6.png"
import Projo from "./Projo"
import Footer from "./Footer"
import john from "../images/john.jpg"

const Project = () => {
  return (
    <div className='maraa' >
      <h1>Check out my recent Projects</h1>
      <div className='proo' >
        <Projo number={1} tittle="My Portfolio website"
        src={imaa}
        meso="Click to view the website"
        link="#" mane="My Portfolio" />
         <Projo number={2} tittle="Marenga Warriors website"
        src={maren6}
        meso="Click to view the website"
        link="https://willowy-torrone-f4ace1.netlify.app/" 
        name="Marenga Warriors"/>
         <Projo number={3} tittle="JohnDoe Portfolio "
        src={ john }
        meso="Click to view the website"
        link="https://65a5aa7aa2c4043e9d234669--shimmering-alpaca-a7a2f0.netlify.app/" 
        name="John Doe"/>
      </div>
      <Footer />
    </div>
  )
}

export default Project