import React from 'react'
import phone from '../../assets/img/invest-phone.png'
import circle from '../../assets/img/darkCircle.svg'
import dots from '../../assets/img/darkDots.svg'
import './invest.scss'

const Index = () => {
  return (
    <div className='investify'>
        <div className='investify_left'>
            <div className='investify_left_container'>
                <img src={phone} alt='phone app'></img>
                <img src={circle} alt='circle'></img>
                <img src={dots} alt='dots'></img>
            </div>
        </div>
        <div className='investify_right'>
            <p>Up to 25% Returns</p>
            <h2>Access investment opportunities</h2>
            <p>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
            <a href='https://www.piggyvest.com/investify'>Learn more about Investments &gt;</a>
        </div>
    </div>
  )
}

export default Index
