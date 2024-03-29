import React, { useState } from "react"
import australia from "../img/australia.jpg"
import italy from "../img/italy.jpg"
import japan from "../img/japan.jpg"
import spain from "../img/spain.jpg"
import turkey from "../img/turkey.jpg"
import uk from "../img/uk.jpg"
import Offer from "./Offer"
import "./css/BestOffers.css"
import { Link } from "react-router-dom"

const BestOffers = () => {
  const [BestOffers, setBestOffers] = useState(bestOffersData)
  return (
    <div className='best-offers-container'>
      <div className='title'>
        <h1>Best offers</h1>
        <h4>Check out our top-rated tours</h4>
      </div>
      <div className='best-offers'>
        {BestOffers.map(offer => (
          <Link to={`/tours/${offer.id}`}>
            <Offer key={offer.id} offer={offer} />
          </Link>
        ))}
      </div>
      <Link to='/tours' className='tours-link'>
        View All Tours
      </Link>
    </div>
  )
}

let bestOffersData = [
  {
    id: 1,
    image: australia,
    country: "Australia",
    price: 11200,
    cities: ["Sydney", "Brisbane", "Melbourne"],
    duration: 15,
  },
  {
    id: 2,
    image: italy,
    price: 5500,
    country: "Italy",
    cities: ["Milan", "Rome", "Turin"],
    duration: 9,
  },
  {
    id: 3,
    image: japan,
    price: 8900,
    country: "Japan",
    cities: ["Tokyo", "Kyoto"],
    duration: 10,
  },
  {
    id: 4,
    image: spain,
    price: 3000,
    country: "Spain",
    cities: ["Barcelone", "Madrid"],
    duration: 5,
  },
  {
    id: 5,
    image: uk,
    price: 9250,
    country: "United Kingdom",
    cities: ["London", "Monchester", "Glasgow"],
    duration: 10,
  },
  {
    id: 6,
    image: turkey,
    price: 4500,
    country: "Turkey",
    cities: ["Istanboul", "Ankara"],
    duration: 5,
  },
]

export default BestOffers
