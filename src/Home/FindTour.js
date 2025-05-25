import React from 'react'
import './css/FindTour.css'
import { Link } from 'react-router-dom'

const FindTour = () => {
  return (
    <section className='find-tour'>
      <div className='right'>
        <h1>Find Travel Perfection With the Professionalism of Experts</h1>
        <Link to='/tours'>Find Your Perfect Tour</Link>
      </div>
    </section>
  )
}

export default FindTour
