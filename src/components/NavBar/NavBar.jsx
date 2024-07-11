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
   const closeMenu = document.querySelector(".showBurger")   
    const middleNav = document.querySelector('#middleNav')
    const openMenu = document.querySelector(".hamburger")
    
     openMenu.addEventListener("click", ()=>{
        middleNav.removeAttribute("id")
        middleNav.classList.add("showNav")

    });

    closeMenu.addEventListener("click", ()=>{
        middleNav.classList.remove("showNav")
        middleNav.removeAttribute("class")
        middleNav.setAttribute("id", "middleNav")
    })
},[])
  return (
    <nav>
        <div className="NavBar">
            <div className="left">
                <img src={Icon} alt="logo" />
            </div>

            <div id="middleNav">
         
            <div className="right">
                <p>FAQ</p>
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
