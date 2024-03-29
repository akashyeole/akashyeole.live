import React from 'react'
import { FaChevronUp } from "react-icons/fa"


const ScrollToTopButton = () => {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <FaChevronUp onClick={scrollTop} className='scroll-up-button'/>
  )
}

export default ScrollToTopButton