import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import Footer from './Footer'
import { FaFacebook,FaInstagram } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { IoCall } from "react-icons/io5"


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k30h6xg', 'template_bq8mqc2', form.current, 'ZqlOYdQo8kbuunTW1')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <div className='halop' >
        <h1>Get in touch</h1>
        <p>I'd love if you reached out to me. Even if
          it's just to say "Hi". Drop me a line and I'll respond 
          to you As soon as possible 
        </p>
      </div>
      <div className='ubaa' >
        <div>
          <h3>Feel free to make a call</h3>
          <div><h5><button className='one' ><IoCall /></button> 0110269270</h5></div>
          <div><h5><button className='two' ><MdEmail /></button> owuorchurchil5@gmail.com</h5></div>
          <div><h5>Facebook: <a href="https://facebook.com/herculesgift" target="blank"><button className='three' ><FaFacebook /></button></a> </h5></div>
          <div><h5>Instagram: <a href="https://instagram.com/pescrack10" target="blank"><button className='four' ><FaInstagram /></button></a> </h5></div>
          <div><h5>Twitter: <a href="https://twitter.com/churchil_owuor" target="blank"><button className='five' ><AiOutlineTwitter /></button></a> </h5></div>
        </div>
        <div className="forrm" >
        <form ref={form} onSubmit={sendEmail}>
          <div className='rarara toa' >
            <input placeholder='Enter your Name' type="text" name="user_name" />
          </div>
          <div className='rarara toa' >
            <input placeholder='Enter your Email'  type="email" name="user_email" />
          </div>
          <div className='rarara' >
            <textarea className='toa' placeholder='Enter your message'  name="message" />
            <input className='tarara' type="submit" value="Send" />
          </div>
      </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact