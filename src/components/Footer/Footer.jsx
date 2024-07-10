import React from 'react'
import './Footer.css'
import webIcon from './icon.png'

const Footer = () => {
  const date=new Date()
  const year=date.getFullYear();

  return (
    <footer>
      <div className="footerSec">
        <div className="upperCon">
        <div className="upper">
        <div className="logo">
        <img src={webIcon} alt="" /> <span className='duck'>CAPITALDUCK</span>
        </div>
        <div className="right">
          <h3>FAQ</h3>
          <button>Launch App</button>
        </div>
        </div>        
        </div>
        <div className="lower">
          <a href="#">Terms And Condition</a> 
          <p> &copy; {year} </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
