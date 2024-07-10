import React from 'react'
import { useEffect } from 'react';
import './HowToPlay.css'
import { GiJourney } from "react-icons/gi";
import { RiHandCoinLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";

const HowToPlay = () => {
 
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
       if ( entry.isIntersecting) { entry.target.classList.add('show-How') }
      });
    });
  
    const hiddenElements= document.querySelectorAll('.hidden-How');
    hiddenElements.forEach((el)=> observer.observe(el))
  },[])

  return (
    <section className='How'>
      <div className="HowToPlaySec">
        <h1 className='hidden-What'>How To <span className='play'>Play & Earn</span> On <span className='duck'>CapitalDuck!</span></h1>
        <div className="Cardcontainer cardCon">
        <div className="card hidden-How">
          <h1>STEP ONE</h1>
          <h2><span><GiJourney /></span> Choose Your Path </h2>
          <div className="details">
          <h3>For Stakers:</h3>
          <p>- Invest to Begin: Start farming by staking as low as <span style={{font-size:"18px"}}>$</span>1. This small investment gives you a higher earning speed. The higher the Stake, the higher and faster the earning is!</p> <br />
          <h3>For Non-Stakers:</h3>
          <p> - No Investment Needed: Start farming without an initial stake, but at a reduced earning speed...</p>
          </div>

        </div>
        <div className="card hidden-How">
          <h1>STEP TWO</h1>
          <h2> <span><RiHandCoinLine /></span> Farm Coins</h2>
          <div className="details">
          <h3>Tap to Earn:</h3>
          <p> Tap the screen to farm coins. The faster you tap, the more coins you earn.</p> <br />
          <h3>Boost Your Tap Speed:</h3>
          <p> Purchase or earn boosts to increase your tap speed, allowing you to earn coins even faster.</p>
          </div>

        </div>
        <div className="card hidden-How">
          <h1>STEP THREE</h1>
          <h2><span><FaPeopleGroup /></span> Invite Friends</h2>
          <div className="details">
          <h3> Earn Bonuses: </h3>
          <p>Invite friends to join the game. For each friend that joins and starts farming, you will earn bonuses</p> 
          </div>

        </div>
        <div className="card hidden-How">
          <h1>STEP FOUR</h1>
          <h2><span><BsCashCoin /></span> Collect and Convert Coins </h2>
          <div className="details">
          <h3> Coin Conversion:</h3>
          <p> Convert your earned coins into real money</p> <br />
          <h3> Surprise Payouts:</h3>
          <p>Payouts are announced 5 days before the payday. Stay tuned for announcements to know when the next payout will be.
          </p>
          </div>

        </div>
        </div>  
        </div>
      
    </section>
  )
}

export default HowToPlay
