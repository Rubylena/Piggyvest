import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import security from '../../assets/img/security.png'
// import AnimationOnScroll from 'react-animation-on-scroll'
import './investment.scss'

const Investment = () => {

  return (
    <div className='invest'>
      <AnimationOnScroll animateIn='animate__fadeIn'>
        <div className='invest_image'>
            <img src={security} alt='security'></img>
        </div>
      </AnimationOnScroll>
        <div>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOut='tada'>
            <h4>Your security is our priority</h4>
          </AnimationOnScroll>
            <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.</p>
            <a href='https://www.piggyvest.com/security'>Learn more &gt;</a>
        </div>
    </div>
  )
}

export default Investment
