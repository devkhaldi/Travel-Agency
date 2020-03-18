import React, { useState } from 'react'
import Offer from '../Home/Offer'
import SingleOffer from './SingleOffer'
import australia from '../img/australia.jpg'
import italy from '../img/italy.jpg'
import japan from '../img/japan.jpg'
import spain from '../img/spain.jpg'
import turkey from '../img/turkey.jpg'
import uk from '../img/uk.jpg'
import { FiGrid } from 'react-icons/fi'
import { FaThList } from 'react-icons/fa'
import './css/Offers.css'

const Offers = () => {
  const [listView, setListView] = useState(false)
  // Generate tours
  let generatedTours = null
  if (listView) generatedTours = tours.map(tour => <SingleOffer offer={tour} />)
  else generatedTours = tours.map(tour => <Offer offer={tour} />)
  return (
    <section className={listView ? 'list-tours' : 'tours-offers'}>
      <div className='header'>
        <form>
          <label htmlFor='sort'>Sort by</label>
          <select id='sort' className='sort'>
            <option value='popularity'>Popularity</option>
            <option value='cheapest'>Cheapest</option>
            <option value='newest'>Newest</option>
          </select>
        </form>
        <div className='view'>
          <label>View</label>
          <div className='list-view' onClick={() => setListView(true)}>
            <FaThList />
          </div>
          <div className='grid-view' onClick={() => setListView(false)}>
            <FiGrid />
          </div>
        </div>
      </div>
      <div className='tours'>{generatedTours}</div>
      <div className='pagination'></div>
    </section>
  )
}

const tours = [
  {
    id: 1,
    image: australia,
    country: 'Australia',
    price: 11200,
    cities: ['Sydney', 'Brisbane', 'Melbourne'],
    duration: 12,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 2,
    image: italy,
    price: 5500,
    country: 'Italy',
    cities: ['Milan', 'Rome', 'Turin'],
    duration: 5,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 3,
    image: japan,
    price: 8900,
    country: 'Japan',
    cities: ['Tokyo', 'Kyoto'],
    duration: 7,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 4,
    image: spain,
    price: 3000,
    country: 'Spain',
    cities: ['Barcelone', 'Madrid'],
    duration: 4,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 5,
    image: uk,
    price: 9250,
    country: 'United Kingdom',
    cities: ['London', 'Liverpoul'],
    duration: 10,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 1,
    image: australia,
    country: 'Australia',
    price: 11200,
    cities: ['Sydney', 'Brisbane', 'Melbourne'],
    duration: 12,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 2,
    image: italy,
    price: 5500,
    country: 'Italy',
    cities: ['Milan', 'Rome', 'Turin'],
    duration: 5,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 3,
    image: japan,
    price: 8900,
    country: 'Japan',
    cities: ['Tokyo', 'Kyoto'],
    duration: 7,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 4,
    image: spain,
    price: 3000,
    country: 'Spain',
    cities: ['Barcelone', 'Madrid'],
    duration: 4,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 5,
    image: uk,
    price: 9250,
    country: 'United Kingdom',
    cities: ['London', 'Liverpoul'],
    duration: 10,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 1,
    image: australia,
    country: 'Australia',
    price: 11200,
    cities: ['Sydney', 'Brisbane', 'Melbourne'],
    duration: 12,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 2,
    image: italy,
    price: 5500,
    country: 'Italy',
    cities: ['Milan', 'Rome', 'Turin'],
    duration: 5,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 3,
    image: japan,
    price: 8900,
    country: 'Japan',
    cities: ['Tokyo', 'Kyoto'],
    duration: 7,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 4,
    image: spain,
    price: 3000,
    country: 'Spain',
    cities: ['Barcelone', 'Madrid'],
    duration: 4,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  },
  {
    id: 5,
    image: uk,
    price: 9250,
    country: 'United Kingdom',
    cities: ['London', 'Liverpoul'],
    duration: 10,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aut aliquid explicabo perspiciatis a nam! Blanditiis perspiciatis corrupti quas placeat?'
  }
]

export default Offers
