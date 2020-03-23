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
      <Hero bgImage={cover} title='Gallery' subtitle='Photos of Our Destinations' />
      <GalleryCompo />
      <Footer />
    </React.Fragment>
  )
}

export default Gallery
