import React from 'react'
import techpoint from '../../assets/img/techpoint.png'
import guardian from '../../assets/img/guardian.png'
import crunch from '../../assets/img/crunch.png'
import './featured.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Index = () => {
  return (
    <div className='featured'>
      <h4 className='featured_left'>As featured in</h4>
      <div className='featured_right'>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
        <a href='https://techpoint.africa/2018/05/31/piggybank-secures-1-1-million-funding'><div>
        <img src={techpoint} alt='techpoint'></img>
        </div></a></AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInRight'>
        <a href='https://guardian.ng/news/nigeria/piggybank-asserts-expansion-plans-becomes-piggyvest/'><div>
        <img src={guardian} alt='the guardian'></img>
        </div></a></AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__fadeInRight'>
        <a href='https://techcrunch.com/2018/05/31/nigerias-piggybank-ng-raises-1-1m-announces-group-investment-product/'><div>
        <img src={crunch} alt='crunch'></img>
        </div></a>
        </AnimationOnScroll>
      </div>
    </div>
  )
}

export default Index
