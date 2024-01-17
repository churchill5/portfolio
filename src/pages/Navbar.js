import React, { useState } from "react";
import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
   const [active, setActive] = useState("nav_menu");
   const [toggleIcon, setToggleIcon] = useState("nav_toggler")

   const navToggle = () => {
       active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive ('nav_menu');

       toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon("nav_toggler")
   }


  return <nav className="nav" >
 <Link to="/" className="site-tittle">Churchil</Link>
 <ul className={active} >
    <Link onClick={navToggle} to="/Projects">My Projects</Link>
    <Link onClick={navToggle} to="/About">About Me</Link>
    <Link onClick={navToggle} to="/Contact">Contact Me</Link>
 </ul>
 <div onClick={navToggle} className={toggleIcon} >
    <div className="line1" ></div>
    <div className="line2" ></div>
    <div className="line3" ></div>
</div>
</nav>



}
  



