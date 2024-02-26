import React, { useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquare,
} from "react-icons/fa"
import { FiSend } from 'react-icons/fi'
import Socials from '../../components/Socials'
import "./contact.css"

const Contact = () => {

  useEffect(() => {
    document.title = 'Akash Yeole - Contact Me'
  }, []);

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, creatice ideas or opportunities to be part of your vision.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc"><a href="mailto:akashyeole02@gmail.com">akashyeole02@gmail.com</a></h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquare className='info__icon' />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc"><a href="tel:+917757992429">+91 77579 92429</a></h4>
              </div>
            </div>
          </div>
          
          <Socials />
          
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Your Name' 
                className="form__control" 
              />
            </div>

            <div className="form__input-div">
              <input 
                type="email" 
                placeholder='Your Email' 
                className="form__control" 
              />
            </div>
            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Your Subject' 
                className="form__control" 
              />
            </div>
          </div>
          <div className="form__input-div">
              <textarea
                placeholder='Your Message' 
                className="form__control textarea">  
              </textarea>
            </div>

            <button className="button">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact