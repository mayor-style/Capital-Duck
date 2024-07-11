import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Hero from './Hero_Section/Hero'
import What from './WHAT_Section/What'
import Why from './WHY_Section/Why'
import HowToPlay from './HOW_TO_PLAY/HowToPlay'
import LastSection from './LastSection/LastSection'
import PreLoader from './components/PreLoader'



function App() {

  const [preload, setPreload] = useState(true);
    useEffect(()=>{
      const timeout= setTimeout(()=>{
        setPreload(false)
      }, 10000)
      
    },[])

  return (
      <>
      {preload ? 
       <PreLoader /> :
        <div className="App">   
      <NavBar/>
      <Hero/>
      <What/>
      <Why />
      <HowToPlay/>
      <LastSection/>
      <Footer/>
      </div>
      
    }
      
      
    

      

      </>
  )
}

export default App
