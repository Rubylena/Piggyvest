import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/Hero/Hero'
import Investment from '../components/investment/Investment'
import Save from '../components/save/Save'
import Invest from '../components/Invest/Index'
import Saver from '../components/Saver/Index'
import Customers from '../components/Customers/Index'
import Featured from '../components/Featured/Index'
import Footer from '../components/Footer/Index'
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
      <div className='customers'>
        <Invest />
      </div>
        <Saver />
      <div className='customers'>
        <Customers />
      </div>
      <div className='featured'>
        <Featured />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
