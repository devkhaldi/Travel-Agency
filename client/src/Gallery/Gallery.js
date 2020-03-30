import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Footer from '../Component/Footer'
import GalleryCompo from './GalleryCompo'
import cover from '../img/gallery/cover.jpeg'

const Gallery = () => {
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
      <Hero bgImage={cover}>
        <h1 className='title'>Gallery</h1>
        <h3 className='subtitle'>Photos of Our Destinations</h3>
      </Hero>
      <GalleryCompo />
      <Footer />
    </React.Fragment>
  )
}

export default Gallery
