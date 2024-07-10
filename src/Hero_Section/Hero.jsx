import React, { useEffect } from 'react'
import './Hero.css'

const Hero = () => {

 useEffect(()=>{
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
     if ( entry.isIntersecting) { entry.target.classList.add('show') }
    });
  });

  const hiddenElements= document.querySelectorAll('.hidden');
  hiddenElements.forEach((el)=> observer.observe(el))

 },[])
  return (
    <section>
        <div className="HeroSec ">
      <h1 className='hidden'>Tap, Farm, Earn - Grow Your Wealth with Every Tap!</h1>
        <button className='hidden'>Launch on Telegram</button>
        </div>
    </section>
  )
}

export default Hero
