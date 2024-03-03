import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Themes from './components/Themes'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import { useState } from 'react'

function App() {
  const [key, setKey] = useState(0); 
  const changeKey = () => {
    setKey(key ^ 1);
  }
  
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
    </BrowserRouter>
  )
}

export default App
