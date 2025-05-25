import React, { useState } from "react"
import singleTourCover from "../img/gallery/london.jpg"
import { Link } from "react-router-dom"
import Hero from "../Component/Hero"
import Navbar from "../Component/Navbar"
import TourInfo from "./TourInfo"
import TourProgram from "./TourProgram"
import TourGallery from "./TourGallery"
import BookTour from "./BookTour"
import CheckOut from "./CheckOut"
import Footer from "../Component/Footer"
import "./css/SingleTour.css"

const SingleTour = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero bgImage={singleTourCover}>
        <h1 className='title'>Eastern Europe Tour</h1>
        <h3 className='subtile'>
          Discover the tranquil lands of Hungary and Poland
        </h3>
        <Link to='/' className='button'>
          BOOK NOW
        </Link>
      </Hero>
      <TourInfo />
      <TourProgram />
      <TourGallery />
      <BookTour />
      <div className='checkout-btn-container'>
        <button className='button checkout-btn'>Book Now</button>
      </div>

      <Footer />
    </React.Fragment>
  )
}

export default SingleTour
