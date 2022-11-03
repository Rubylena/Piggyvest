import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import './nav.scss'

const Nav = () => {
  const [isActive, setIsActive] = useState();

  const activeHandle = ()=>{
    setIsActive(currentClass => !currentClass);
  }

  return (
    <nav>
        <img src={logo}></img>
        {/* className={isActive ? 'is-active' : ''} */}
        <div onClick={activeHandle} className={`hamburger ${isActive ? 'is-active' : ''}`}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
    </nav>
  )
}

export default Nav