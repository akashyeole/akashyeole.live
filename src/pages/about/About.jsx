import React, { useEffect } from 'react'
import Info from '../../components/Info'
import Stats from '../../components/Stats'
import Skills from '../../components/Skills'
import Awards from '../../components/Awards'
import { resume } from '../../data'
import ResumeItem from '../../components/ResumeItem'
import { FaDownload } from 'react-icons/fa'
import RESUME from '../../assets/Resume.pdf'
import './about.css'

const About = () => {

  useEffect(() => {
    document.title = 'Akash Yeole - About'
  }, []);

  return (
    <main className="section container">
      <section id="about" className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Information</h3>

            <ul className="info__list grid">
              <Info />
            </ul>

            <a href={RESUME} download='' className="button">Download Resume
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section id="skills" className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section id="resume" className="resume">
        <h3 className="section__subtitle subtitle__center">My Experience & Education</h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === 'experience') {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section id="awards" className="awards">
            <h3 className="section__subtitle subtitle__center">My Achievements</h3>

            <div className="awards__container grid">
                <Awards />
            </div>
      </section>
    </main>
  )
}

export default About