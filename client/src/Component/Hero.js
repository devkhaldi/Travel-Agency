import React from 'react'
import './css/Hero.css'
import navShape from '../img/nav-shape.svg'

const Hero = ({ children, bgImage }) => {
  return (
    <section
      className='mini-hero'
      style={{
        background: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}>
      <div className='text-container'>{children}</div>
    </section>
  )
}

export default Hero
