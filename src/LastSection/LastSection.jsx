import React from 'react'
import './LastSection.css'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import webIcon from './icon.png'

const LastSection = () => {
  return (
    <section>
         <div className="lastSec hidden-What">
        <div className="logo">
        <img src={webIcon} style={{height:"150px"}} alt="logo" />
        </div>
      <h1><span>Join</span> The Community</h1>
      <p>Become A Part Of CapitalDuck Community, Choose The Path That Best Suits You To Start Earning Real Rewards And Also Have A Say In Our Continuous Protocol Development. </p>
      <div className="socialLogos">
      <a href="https://twitter.com"> <FaTwitter className='icon'/></a>
        <a href="https://instagram.com"> <FaInstagram className='icon'/></a>
        <a href="https://t.me/CapitalDuckApp"> <FaTelegramPlane className='icon'/></a>
      </div>
        </div>
    </section>
  )
}

export default LastSection
