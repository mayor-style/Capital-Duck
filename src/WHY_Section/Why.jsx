import React, { useState } from 'react'
import { useEffect } from 'react';
import {  Cursor } from 'react-simple-typewriter'
import './Why.css'
import { GiHumanPyramid } from "react-icons/gi";
import { GiShinyIris } from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";
import { FaPeopleArrows } from "react-icons/fa";


const Why = () => {
 
  useEffect(()=>{
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
     if ( entry.isIntersecting) { entry.target.classList.add('show-Why') }
    });
  });

  const hiddenElements= document.querySelectorAll('.hidden-Why');
  hiddenElements.forEach((el)=> observer.observe(el))
},[])
 
  return (
    <section>
      <div className="WhySection">
        <h1 >WHY <span>CHOOSE</span> TO FARM DUCK?</h1>
        <div className="WhyGrid ">
            <div className="WhyCon hidden-Why">
                <div className="WhyIcon">
                <GiHumanPyramid className='icon'/>
                </div>
                <h3>Flexible Participation</h3>
                <p className='stake'><span>Stakers:</span> Begin with a minimum of $1 stake for higher earning speed! 
                
                </p>
                <p><span>Non-Stakers:</span> Start farming without an initial investment at a reduced earning speed, making it accessible for everyone.</p>
            </div>
            <div className="WhyCon hidden-Why">
                <div className="WhyIcon">
                <GiShinyIris className='icon'/>
                </div>
                <h3>Earn As You Play</h3>
                <p>Turn your leisure time into profit! Each tap brings you closer to real rewards.</p>
            </div>
            <div className="WhyCon hidden-Why">
                <div className="WhyIcon">
                <IoIosFlash className='icon'/>
                </div>
                <h3>Boost Your Speed</h3>
                <p>Unlock boosts to increase your tap speed and maximize your coin production.</p>
            </div>
            <div className="WhyCon hidden-Why">
                <div className="WhyIcon">
                <FaPeopleArrows className='icon'/>
                </div>
                <h3>Earn with Friends</h3>
                <p>Invite friends to join and earn bonuses as they farm. Benefit from shared earnings and grow your wealth together. </p>
    
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default Why
