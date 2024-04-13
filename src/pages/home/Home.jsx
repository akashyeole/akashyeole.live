import React, { useCallback, useEffect } from 'react'
import Socials from '../../components/Socials'
import Profile from '../../assets/profile.jpeg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import particlesConfig from './particles.json'
import { loadRoundedRectShape } from "tsparticles-shape-rounded-rect";

const Home = ({ key }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadRoundedRectShape(engine)
    await loadSlim(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
  }, []);
  
  useEffect(() => {
    const themeColor = document.documentElement.style.getPropertyValue('--first-color');
    particlesConfig["particles"]["color"] = themeColor;
    document.title = 'Akash Yeole'
  }, []);
  
  return (
    <section className="home section grid" ref = { key }>
    {/* <section className="home section grid"> */}
      <Particles
        id="tsparticles"
        options={particlesConfig}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Akash Yeole</span> Software Developer
          </h1>

          <p className="home__description">
            As a software developer, I am deeply invested in creating clean and intuitive experiences for users. I am driven by my commitment to building software that simplifies complex processes and tasks.
          </p>

          <div className="home__more-social">
            <Link to='/about' className='button'>
              More About Me{' '} 
              <span className='button__icon'>
                <FaArrowRight/>
              </span>
            </Link>
            <Socials />
          </div>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home