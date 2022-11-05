import React from 'react'
import arrow from '../../assets/icon/arrow.svg'
import './securitycard.scss'

const SecurityCard = ({key, image, title, description, sub}) => {
  return (
    <div key={key} className='card'>
        <div className='card_img'><img src={image} alt={title}></img></div>
        <h5>{title}</h5>
        <p>{description}</p>
        <div className='sub'>
            <img src={arrow} alt='arrow'></img>
            <span>{sub}</span>
        </div>
    </div>
  )
}

export default SecurityCard
