import React from 'react'
import arrow from '../../assets/icon/arrow2.svg'
import './saver.scss'

const Index = () => {
  return (
    <div className='saver'>
      <div className='saver_left'>
        <div className='saver_left_container'>
          <h2>Meet the saver of the month!</h2>
          <p>Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.</p>
          <a href='https://www.youtube.com/watch?v=qa_x5ie3eP8&feature=youtu.be'><div className='sub'>
              <img src={arrow} alt='arrow'></img>
              <span>Meet Tito</span>
          </div></a>
        </div>
      </div>
      <div className='saver_right'>
      </div>
    </div>
  )
}

export default Index
