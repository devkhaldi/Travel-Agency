import React from 'react'
import './css/Offer.css'
import ScrollAnimation from 'react-animate-on-scroll'

const Offer = ({ offer }) => {
  var sentence =
    offer.cities.slice(0, offer.cities.length - 1).join(', ') + ', and ' + offer.cities.slice(-1)
  return (
    <ScrollAnimation animateOnce={true} animateIn='slideInUp'>
      <div className='card'>
        <img src={offer.image} alt='offer photo' />
        <div className='card-caption'>
          <div className='caption-top'>
            <span className='country'>{offer.country}</span>
            <span className='price'>{offer.price} $</span>
          </div>
          <div className='caption-bottom'>
            <span className='cities'>{sentence}</span>
            <span className='duration'>{offer.duration} days</span>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default Offer
