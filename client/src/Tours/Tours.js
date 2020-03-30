import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Hero from '../Component/Hero'
import Search from './Search'
import Offers from './Offers'
import bg from '../img/tours/tours.jpg'
import './css/Tours.css'
import vector from '../img/allToursVector.svg'

const Tours = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <React.Fragment>
      <Navbar />
      <Hero bgImage={bg}>
        <h1 className='title'>150 tours found</h1>
        <h3 className='subtitle'>All Tours For You</h3>
      </Hero>
      <div
        style={{
          background: `url(${vector})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '40%',
          backgroundPositionX: 'right',
          backgroundPositionY: '-1em'
        }}
        className='tours-content'>
        <Search />
        <Offers />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Tours
