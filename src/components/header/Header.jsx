import React, { useState } from 'react'
import logo from '../../assets/img/logo.svg'
import './header.scss'

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const activeHandle = ()=>{
    setIsActive(addClass => !addClass);
    setOpenMenu(show => !show);
  }

  const changeNavbarColor = () =>{
     if(window.scrollY){
       setColorChange(true);
     }
     else{
       setColorChange(false);
     }
  }

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <header className={colorChange ? 'scrolled' : ''}>
      <nav>
        <div className='nav_arrange'>
          <div className='logo_nav'>
            <img src={logo} alt='logo'></img>
            <ul>
              <li><a href='/index.html'>Save</a></li>
              <li><a href='https://www.piggyvest.com/invest' target='_blank'>Invest</a></li>
              <li><a href='https://www.piggyvest.com/stories' target='_blank'>Stories</a></li>
              <li><a href='https://www.piggyvest.com/faq' target='_blank'>FAQs</a></li>
              <li><a href='https://blog.piggyvest.com/' target='_blank'>Blog</a></li>
            </ul>
          </div>
          <div className='desktop_menu'>
          <ul>
            <li><a href='https://dashboard.piggyvest.com/login' target='_blank'>Sign in</a></li>
            <li><a href='https://dashboard.piggyvest.com/register' target='_blank'>Create free account</a></li>
          </ul>
          </div>
          <div onClick={activeHandle} className={`hamburger ${isActive ? 'is-active' : ''}`}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>
        {openMenu ? 
        <div className='mobile_menu'>
          <ul>
            <li><a href='/index.html'>Save</a></li>
            <li><a href='https://www.piggyvest.com/invest' target='_blank'>Invest</a></li>
            <li><a href='https://www.piggyvest.com/stories' target='_blank'>Stories</a></li>
            <li><a href='https://www.piggyvest.com/faq' target='_blank'>FAQs</a></li>
            <li><a href='https://blog.piggyvest.com/' target='_blank'>Blog</a></li>
            <li><a href='https://dashboard.piggyvest.com/login' target='_blank'>Sign in</a></li>
            <li><a href='https://dashboard.piggyvest.com/register' target='_blank'>Create free account</a></li>
          </ul>
        </div> 
        : 
        ''}
      </nav>
    </header>
  )
}

export default Header