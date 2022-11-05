import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/Hero/Hero'
import Investment from '../components/investment/Investment'
import Save from '../components/save/Save'
import './home.scss'

const Home = () => {
  return (
    <div className='home_container'>
      <div className='home_header_bg'>
        <Header />
        <Hero />
      </div>
      <div className='main_container'>
        <Investment />
        <Save />
      </div>
    </div>
  )
}

export default Home
