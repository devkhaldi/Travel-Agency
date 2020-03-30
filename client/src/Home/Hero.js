import React from 'react'
import video from '../video/Video5.m4v'
import '../Home/css/Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero'>
      <video autoPlay='autoplay' muted loop='loop'>
        <source src={video} type='video/mp4' />
      </video>
      <div className='layer'></div>
      <div className='hero-content'>
        <div className='welcome-text'>
          <h1 className='title'>Enjoy Your Dream Vocation</h1>
          <h3 className='subtitle'>
            Travel to the any corner of the world, without going around in circles.
          </h3>
        </div>
        <Link to='/tours'>Explore Tours</Link>
      </div>
    </section>
  )
}

export default Hero
