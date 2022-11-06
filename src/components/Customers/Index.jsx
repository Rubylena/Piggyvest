import React from 'react'
import joseph from '../../assets/img/joseph.jpeg'
import tobenna from '../../assets/img/tobena.jpeg'
import micheal from '../../assets/img/micheal.jpeg'
import oluwada from '../../assets/img/oluwada.jpg'
import './customers.scss'

const Index = () => {
    const data = [
        {
            img: joseph,
            date: 'Saturday, 24th of September 2022 by 19:58 PM',
            name: 'Joseph A',
            testimony: 'Piggvest has helped me with buying my new iPhone and it is the most reliable app.'
        },
        {
            img: tobenna,
            date: 'Thursday, 6th of October 2022 by 11:42 AM',
            name: 'Tobenna A',
            testimony: "'Piggvest has helped me with buying my new iPhone and it is the most reliable app.'"
        },
        {
            img: micheal,
            date: 'Wednesday, 5th of October 2022 by 03:08 AM',
            name: 'Micheal F',
            testimony: "I just joined tho and I believe piggyVest won't disappoint me 😊❤️"
        },
        {
            img: oluwada,
            date: 'Tuesday, 4th of October 2022 by 18:01 PM',
            name: 'Oluwadamilola A',
            testimony: 'PiggyVest was introduced to me some years back and I have been able to save multiple millions over the years. I look forward to more from Piggyvest.'
        },
        {
            img: joseph,
            date: 'Saturday, 24th of September 2022 by 19:58 PM',
            name: 'Joseph A',
            testimony: 'Piggvest has helped me with buying my new iPhone and it is the most reliable app.'
        },
        {
            img: tobenna,
            date: 'Thursday, 6th of October 2022 by 11:42 AM',
            name: 'Tobenna A',
            testimony: "'Piggvest has helped me with buying my new iPhone and it is the most reliable app.'"
        },
        {
            img: micheal,
            date: 'Wednesday, 5th of October 2022 by 03:08 AM',
            name: 'Micheal F',
            testimony: "I just joined tho and I believe piggyVest won't disappoint me 😊❤️"
        },
        {
            img: oluwada,
            date: 'Tuesday, 4th of October 2022 by 18:01 PM',
            name: 'Oluwadamilola A',
            testimony: 'PiggyVest was introduced to me some years back and I have been able to save multiple millions over the years. I look forward to more from Piggyvest.'
        }
    ]
  return (
    <div className='customers'>
      <div className='customers_left'>
        {data.map((customer, index) => (
            <div className='testimony_box'>
                <small>{customer.date}</small>
                <div className='testimony_box_info'>
                    <div className='testimony_box_img'><img src={customer.img}></img></div>
                    <div>
                        <h6>{customer.name}</h6>
                        <p>{customer.testimony}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
      <div className='customers_right'>
        <h4>4 Million + customers</h4>
        <p>Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable.</p>
      </div>
    </div>
  )
}

export default Index
