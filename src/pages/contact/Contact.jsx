import React, { useEffect, useState } from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquare,
} from "react-icons/fa"
import { FiSend, FiCheckCircle, FiAlertCircle, FiXCircle} from 'react-icons/fi'
import Socials from '../../components/Socials'
import "./contact.css"

const URL = 'https://newportfolio-backend-utp1.onrender.com/sendMessage';

const Contact = () => {
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] =  useState(false);
  const [mailError, setMailError] =  useState(false);
  const [repsonseNote, setResponseNote] = useState({});
  const [overlayStatus, setOverlayStatus] = useState('')

  useEffect(() => {
    document.title = 'Akash Yeole - Contact Me'
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();
    setOverlayStatus('show');
    setMessageError(false);
    setNameError(false);
    setMailError(false);
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData.entries());
    let name = formObj['name'].trim();
    let email = formObj['email'].trim();
    let subject = formObj['subject'].trim();
    let message = formObj['message'].trim();
    if(!name) {
      setNameError(true);
    }
    if(!message) {
      setMessageError(true);
    }
    if(!email) {
      setMailError(true);
    }
    
    if(!name || !message || !email) {
      setOverlayStatus('');
      return;
    }
    
    const sentResponse = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      }) 
    });
    
    const responseData = await sentResponse.json();
    if(responseData.message){
      setResponseNote({message: responseData.message, color: responseData.color});
      if(sentResponse.status === 200) {
        e.target.reset();
      }
    }else{
      setResponseNote({message: 'An unknown error occurred!', color: 'red'});
    }
    setOverlayStatus('');
  }

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

        <form className="contact__form" onSubmit={handleForm}>
          <div className={`contact__form-overlay ${overlayStatus}`}>
            <div className='overlay-loader'>
            </div>
          </div>
          <div className="form__input-group">
            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Your Name' 
                className={`form__control ${nameError ? 'error' : ''}`} 
                name='name'
              />
            </div>

            <div className="form__input-div">
              <input 
                type="email" 
                placeholder='Your Email' 
                className={`form__control ${mailError ? 'error' : ''}`} 
                name='email'
              />
            </div>
            <div className="form__input-div">
              <input 
                type="text" 
                placeholder='Your Subject' 
                className="form__control"
                name='subject' 
              />
            </div>
          </div>
          <div className="form__input-div">
              <textarea
                name='message'
                placeholder='Your Message' 
                className={`form__control textarea ${messageError ? 'error' : ''}`} >  
              </textarea>
          </div>
          <div className='form__submit-div'>
            <button className="submit__button button">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
            {
              repsonseNote.message &&  
              <div className={`submit__response-div ${repsonseNote.color}`}>
                <span className="submit__response-icon">
                  {repsonseNote.color === 'red' && <FiXCircle />}
                  {repsonseNote.color === 'orange' && <FiAlertCircle />}
                  {repsonseNote.color === 'green' && <FiCheckCircle />}
                </span>
                {repsonseNote.message}
              </div>
            }
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact