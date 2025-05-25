import React, { useEffect } from "react"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import Hero from "./Hero"
import BestOffers from "./BestOffers"
import WhyMenaraTravels from "./WhyMenaraTravels"
import CustomerSayings from "./CustomerSayings"
import FindTour from "./FindTour"

const Home = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

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
