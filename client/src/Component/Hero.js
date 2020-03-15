import React from 'react'
import './css/Hero.css'

const Hero = ({ title, subtitle, bgImage }) => {
  return (
    <section
      className='mini-hero'
      style={{
        background: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      }}>
      <div className='text-container'>
        <h1 className='title'>{title}</h1>
        <h3 className='subtitle'>{subtitle}</h3>
      </div>
    </section>
  )
}

export default Hero
