import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/navbar'
import Home from './pages/home/home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/portfolio'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='portfolio' element={<Portfolio/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
