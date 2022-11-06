import React from 'react'
import techpoint from '../../assets/img/techpoint.png'
import guardian from '../../assets/img/guardian.png'
import crunch from '../../assets/img/crunch.png'
import './featured.scss'

const Index = () => {
  return (
    <div className='featured'>
      <div><h4>As featured in</h4></div>
      <div className='featured_right'>
        <div>
        <img src={techpoint} alt='techpoint'></img>
        </div>
        <div>
        <img src={guardian} alt='the guardian'></img>
        </div>
        <div>
        <img src={crunch} alt='crunch'></img>
        </div>
      </div>
    </div>
  )
}

export default Index
