import React from "react"
import "./css/Offer.css"

const Offer = ({ offer }) => {
  var sentence =
    offer.cities.slice(0, offer.cities.length - 1).join(", ") + ", and " + offer.cities.slice(-1)
  return (
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
  )
}

export default Offer
