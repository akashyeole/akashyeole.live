import React from 'react'
import { awards } from '../data'
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa'

const Awards = () => {
  return (
    <>
    {awards.map(({title, link}, index) => {
        return(
            <div className="award__item" key={index}>

                <div className="award__icon"><FaAward/></div>
                <span className="award__title">
                    {title}
                    {' '}
                    {link !== '' && <a className="award__link" href={link} target='_blank'><FaExternalLinkAlt/></a>} 
                </span>
            </div>
        );
    })}
    </>
  )
}

export default Awards