import React from 'react'
import google from '../../assets/img/google-icon.svg'
import './download.scss'

const Downloads = () => {
  return (
    <div className='downloads'>
        <a href='https://dashboard.piggyvest.com/login' target='_blank'><i class="fa-brands fa-apple"></i>&nbsp; Get on iPhone</a>
        <a href='https://dashboard.piggyvest.com/login' target='_blank'><img src={google} alt='play store'></img>&nbsp; Get on Android</a>
    </div>
)
}

export default Downloads
