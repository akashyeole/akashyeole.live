import React from 'react'
import { FaArrowUp } from "react-icons/fa"


const ScrollToTopButton = () => {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <FaArrowUp onClick={scrollTop} className='scroll-up-button'/>
  )
}

export default ScrollToTopButton