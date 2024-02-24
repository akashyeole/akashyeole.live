import React from 'react'
import CIcon from '@coreui/icons-react'
import { cibLeetcode, cibGithub, cibTwitter, cibLinkedinIn } from '@coreui/icons'
import "./socials.css"

const Socials = () => {
    return (
        <div className="contact__socials">
            <a href="https://linkedin.com/in/akashyeole" className="contact__social-link">
              <CIcon icon={cibLinkedinIn} className="contact__social-icon" />
            </a>
            <a href="https://github.com/akashyeole" className="contact__social-link">
              <CIcon icon={cibGithub} className="contact__social-icon" />
            </a>
            <a href="https://leetcode.com/akashyeole" className="contact__social-link">
              <CIcon icon={cibLeetcode} className="contact__social-icon" />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <CIcon icon={cibTwitter} className="contact__social-icon text-danger" />
            </a>
        </div>
    );
}

export default Socials