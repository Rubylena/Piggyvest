import React from 'react'
import Bluebtn from '../button/Bluebtn'
import shield from '../../assets/icon/shield.png'
import lock from '../../assets/icon/safelock.png'
import target from '../../assets/icon/target.png'
import flex from '../../assets/icon/flex.png'
import arrow from '../../assets/icon/arrow.svg'
import './save.scss'
import SecurityCard from '../Securitycard/SecurityCard'

const Save = () => {
    const data = [
        {
            img: shield,
            title: 'Automated Savings',
            description: 'Build a dedicated savings faster on your terms automatically or manually.',
            subTitle: 'Piggyvest'
        },
        {
            img: lock,
            title: 'Fixed Savings',
            description: 'Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.',
            subTitle: 'Safelock'
        },
        {
            img: target,
            title: 'Goal-oriented Savings',
            description: 'Reach all your savings goals faster. Save towards multiple goals on your own or with a group.',
            subTitle: 'Target Savings'
        },
        {
            img: flex,
            title: 'Flexible Savings',
            description: 'Save, transfer, withdraw, manage and organise your money for free at any time.',
            subTitle: 'Flex Naira'
        },
    ]
  return (
    <div className='security'>
        <div className='security_left'>
            <h3>4 ways to build your savings</h3>
            <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
            <Bluebtn text='Start Saving' />
        </div>
        <div className='security_right'>
            {data.map((card, index)=>(
                <SecurityCard
                key={index}
                image={card.img} 
                title={card.title} 
                description={card.description}
                sub={card.subTitle}
                />
            ))}
        </div>
    </div>
  )
}

export default Save
