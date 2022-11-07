import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import security from '../../assets/img/security.png'
// import AnimationOnScroll from 'react-animation-on-scroll'
import './investment.scss'

const Investment = () => {

  return (
    <div className='invest'>
        <div className='invest_image'>
            <img src={security} alt='security'></img>
        </div>
        <div>
          <AnimationOnScroll animateIn="animate__animated animate__bounce" animateOut='tada'>
            <h4>Your security is our priority</h4>
            <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.</p>
          </AnimationOnScroll>
            <a href='https://www.piggyvest.com/security'>Learn more &gt;</a>
        </div>
    </div>
  )
}

export default Investment
