import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Hero from './Hero'
import BestOffers from './BestOffers'
import WhyMenaraTravels from './WhyMenaraTravels'
import CustomerSayings from './CustomerSayings'
import FindTour from './FindTour'

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <BestOffers />
      <WhyMenaraTravels />
      <CustomerSayings />
      <FindTour />
      <Footer />
    </React.Fragment>
  )
}

export default Home
