import React, { useEffect } from 'react'
import './NavBar.css'
import Icon from './img/icon.png'
import close from './img/navClose.png'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
const NavBar = () => {
useEffect(()=>{
    const HideNav = document.querySelector(".showBurger")   
    const mobileNav = document.querySelector('.mobileNav')
    const showNav = document.querySelector(".hamburger")
    
    showNav.addEventListener("click", ()=>{
        mobileNav.style.display = "flex"

    });
    
    HideNav.addEventListener("click", ()=>{
        mobileNav.style.display = "none"
    } );

},[])





  return (
    <nav>
        <div className="NavBar">
            <div className="left">
                <img src={Icon} alt="" />
            </div>

            <div className="mobileNav">
            <div className="middle">
                <button>Launch Capital Duck</button>
            </div>

            <div className="right">
                <h2>FAQ</h2>
                <div className="socials">
                <a href="https://twitter.com"> <FaTwitter className='icon'/></a>
                <a href="https://instagram.com"> <FaInstagram className='icon'/></a>
                <a href="https://telegram.org"> <FaTelegramPlane className='icon'/></a>
                </div>
            </div>

             <div className="showBurger">
             <img src={close} alt="" />
            </div>

            </div>
            <div className="hamburger">
           <span> <BiMenuAltLeft /> </span>
            </div>
            </div>
        
    </nav>
  )
}

export default NavBar;
