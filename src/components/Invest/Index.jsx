import React from 'react'
import phone from '../../assets/img/invest-phone.png'
import circle from '../../assets/img/darkCircle.svg'
import dots from '../../assets/img/darkDots.svg'
import './invest.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Index = () => {
  return (
    <div className='investify'>
        <div className='investify_left'>
            <div className='investify_left_container'>
              <AnimationOnScroll animateIn='animate__fadeIn animate__slower animate__repeat-1'>
                <img src={phone} alt='phone app'></img>
              </AnimationOnScroll>
                <img src={circle} alt='circle'></img>
                <AnimationOnScroll animateIn='animate__backInUp'>
                <img src={dots} alt='dots'></img>
                </AnimationOnScroll>
            </div>
        </div>
        <div className='investify_right'>
            <p>Up to 25% Returns</p>
            <AnimationOnScroll animateIn='animate__fadeInUp'>
            <h2>Access investment opportunities</h2>
            </AnimationOnScroll>
            <p>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
            <a href='https://www.piggyvest.com/investify'>Learn more about Investments &gt;</a>
        </div>
    </div>
  )
}

export default Index
