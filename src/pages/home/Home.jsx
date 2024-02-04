import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
    </section>
  )
}

export default Home