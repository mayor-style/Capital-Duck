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
      <h1 className='hidden'><span className='specialColor'>Welcome</span> to <span className='duck'>CapitalDuck,</span> the ultimate <span className='specialColor'>platform</span> where your taps turn into real rewards!</h1>
        <p className='hidden'>Dive into a fun and engaging experience where farming coins is not just a game, but a rewarding adventure. </p>
        <button className='hidden'>Launch on Telegram</button>
        </div>
    </section>
  )
}

export default Hero
