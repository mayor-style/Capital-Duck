import React from 'react'
import { useEffect } from 'react'
import './What.css'
import capitalDuck from './duck2.png'

const What = () => {

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
       if ( entry.isIntersecting) { entry.target.classList.add('show-What') 
      });
    });
  
    const hiddenElements= document.querySelectorAll('.hidden-What');
    hiddenElements.forEach((el)=> observer.observe(el))
  
   },[])

  return (
    <section className='what'>
      <div className="WhatSection">    
        <div className="content hidden-What">
        <div className="left">
            <img src={capitalDuck} alt="" />
        </div>
        <div className="right">
        <h1><span className='what'>What</span> is <span className='duck'> CAPITALDUCK</span>?</h1>
        <p><span className='duck'>CapitalDuck</span> is the ultimate platform where your taps turn into real rewards!
        With Capital Duck, you can boost your earnings, invite friends to join the fun, and watch your wealth grow together.
        </p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default What
