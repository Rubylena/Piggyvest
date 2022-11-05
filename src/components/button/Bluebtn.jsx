import React from 'react'
import './Bluebtn.scss'

const Bluebtn = (props) => {
  return (
    <div className='create'>
      <a href='https://dashboard.piggyvest.com/register' target='_blank' >{props.text}</a>
    </div>
  )
}

export default Bluebtn
