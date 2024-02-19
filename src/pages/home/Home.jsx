import React, { useCallback } from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import particlesConfig from './particles.json'
import { loadRoundedRectShape } from "tsparticles-shape-rounded-rect";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadRoundedRectShape(engine)
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);
  
  return (
    <section className="home section grid">
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
            <span>I'm Akash Yeole</span> Web Developer
          </h1>

          <p className="home__description">
            I'm a Indian based web developer focused on crafting clean and user-friendy experiences, I am passionate about building excellent software that improves the lives of those around me.
          </p>

          <Link to='/about' className='button'>
            More About Me{' '} 
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home