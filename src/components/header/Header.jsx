import React, { useState } from 'react'
import logo from '../../assets/img/logo.svg'
import bank from '../../assets/icon/shield.png'
import lock from '../../assets/icon/safelock.png'
import target from '../../assets/icon/target.png'
import flex from '../../assets/icon/flex.png'
import './header.scss'

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [openSave, setOpenSave] = useState(false);

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


  const data = [
    {
      img: bank,
      text: 'Piggybank',
      alt: 'Piggybank',
      href: 'https://www.piggyvest.com/piggybank'
    },
    {
      img: lock,
      text: 'Safelock',
      alt: 'Safelock',
      href: 'https://www.piggyvest.com/safelock'
    },
    {
      img: target,
      text: 'Target Savings',
      alt: 'Target Savings',
      href: 'https://www.piggyvest.com/targets'
    },
    {
      img: flex,
      text: 'Flex Naira',
      alt: 'Flex Naira',
      href: 'https://www.piggyvest.com/flex-naira'
    },
  ]
  return (
    <header className={colorChange ? 'scrolled' : ''} >
      <nav>
        <div className='nav_arrange'>
          <div className='logo_nav'>
            <img src={logo} alt='logo'></img>
            <ul>
              <li><a href='/index.html' 
              onMouseOver={()=> setOpenSave(!openSave)}
              >Save</a></li>
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
      {openSave && (
      <div className='save__hover'>
        {data.map((data, index) =>(
          <div key={index} className='save__hover_box'>
            <a href={data.href}><div className='save__hover_box_img'><img src={data.img} alt={data.alt}></img></div>
            <p>{data.text}</p></a>
          </div>
        ))}
      </div>
      ) }
    </header>
  )
}

export default Header