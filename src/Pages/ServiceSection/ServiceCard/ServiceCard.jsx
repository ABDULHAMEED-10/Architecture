/* eslint-disable no-unused-vars */
import React from 'react'
import './ServiceCard.css'
export const ServiceCard = (prop) => {
  return (
      <>
        <div className='service_card'>
        <img src={prop.icon} alt='icon' />
              <div className='service_card_text'>
              <h3>{prop.title}</h3>
        <p>{prop.desc}</p>
                  </div>
    </div>
      </>
  )
}
