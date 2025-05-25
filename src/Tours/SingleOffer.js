import React from 'react'
import { Link } from 'react-router-dom'
import './css/SingleOffer.css'

const SingleOffer = ({ offer }) => {
  // get sentence from an array of cities
  const citiesSentence =
    offer.cities.slice(0, offer.cities.length - 1).join(', ') + ', and ' + offer.cities.slice(-1)
  return (
    <section className='single-offer'>
      <img src={offer.image} alt='offer image' />
      <div className='container'>
        <div className='content'>
          <div className='header'>
            <span className='duration'>{offer.duration} days</span>
            <span className='price'>Price</span>
          </div>
          <div className='country-and-price'>
            <h3>{offer.country}</h3>
            <span className='price'>${offer.price}</span>
          </div>
          <div className='cities'>{citiesSentence}</div>
          <hr />
          <div className='description'>
            <p>{offer.description}</p>
            <div className='link-container'>
              <Link to={`/tours/${offer.id}`} className='button'>
                SHOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleOffer
