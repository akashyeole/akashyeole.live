import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Themes from './components/Themes'
import ScrollToTopButton from './components/ScrollToTopButton'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import { useState, useEffect } from 'react'

function App() {
  const [key, setKey] = useState(0); 
  const changeKey = () => {
    setKey(key ^ 1);
  }

  useEffect(()=>{
    const scrollButton = document.querySelector('.scroll-up-button');
    const setScrollTopToVisible = () => {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollButton.style.right = '1.9rem'
      } else {
        scrollButton.style.right = '-4rem'
      }
    }
  
    window.onscroll = setScrollTopToVisible
    
    return window.onscroll
  }, [])

  
  return (
    <BrowserRouter>
      <Navbar />
      <Themes changeKey = {changeKey}/>
      <Routes>
        <Route path='/' element={<Home key = {key}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
