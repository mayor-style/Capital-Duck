import React, {useEffect} from 'react'
import {useTypewriter, Cursor  } from "react-simple-typewriter"
import './PreLoader.css'

const PreLoader = () => {

    const [text] = useTypewriter({
      words:["Welcome To CapitalDuck!", "The Ultimate Platform Where Your Taps Turn Into Real Rewards!"],
      loop:{},
      typeSpeed:60,
      deleteSpeed:30,
      
    });

  return (

      <div className='preloaderCon'>
          <div className="preloader">
            <h1>{text} <span>
            <Cursor/>
            </span>
            </h1>
           
          </div>
      </div>

  )
}

export default PreLoader
