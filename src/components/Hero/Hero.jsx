import React from 'react'
import google from '../../assets/img/google-icon.svg'
import frame from '../../assets/img/frame.png'
import girl from '../../assets/img/headerImg.png'
import rent from '../../assets/img/rent-card.png'
import invest from '../../assets/img/investify-card.png'
import circle from '../../assets/img/circle.svg'
import angle from '../../assets/img/angle.svg'
import dots from '../../assets/img/dots.svg'
import './hero.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import Bluebtn from '../button/Bluebtn'

const Hero = () => {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
  }, [])

  return (
    <section className='Hero'>
        <div className='Hero_left'>
            <h1>The Better Way to Save & Invest.</h1>
            <p>PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
            <Bluebtn text='Create free account' />
            <div className='downloads'>
                <a href='https://dashboard.piggyvest.com/login' target='_blank'><i class="fa-brands fa-apple"></i>&nbsp; Get on iPhone</a>
                <a href='https://dashboard.piggyvest.com/login' target='_blank'><img src={google} alt='play store'></img>&nbsp; Get on Android</a>
            </div>
        </div>
        <div className='Hero_right'>
          <div className={`image_group ${loading ? 'hide' : ''}`}>
            <img src={frame} alt='frame'></img>
            <img src={girl} alt='girl'></img>
            <img src={rent} alt='frame'></img>
            <img src={invest} alt='frame'></img>
            <img src={circle} alt='frame'></img>
            <img src={angle} alt='frame'></img>
            <img src={dots} alt='frame'></img>
          </div>
        </div>
    </section>
  )
}

export default Hero
