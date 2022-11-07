import React from 'react'
import './securitycard.scss'

const SecurityCard = ({ href, image, title, description, arrow, sub}) => {
  return (
    <a href={href}><div className='card'>
        <div className='card_img'><img src={image} alt={title}></img></div>
        <h5>{title}</h5>
        <p>{description}</p>
        <div className='sub'>
            <img src={arrow} alt='arrow'></img>
            <span>{sub}</span>
        </div>
    </div></a>
  )
}

export default SecurityCard
