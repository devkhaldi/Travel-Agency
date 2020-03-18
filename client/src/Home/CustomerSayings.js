import React, { useEffect } from 'react'
import { tns } from 'tiny-slider/src/tiny-slider.js'
import './css/CustomerSayings.css'
import customer1 from '../img/customers/1.jpg'
import customer2 from '../img/customers/2.jpg'
import customer3 from '../img/customers/3.jpg'

const CustomerSayings = () => {
  useEffect(() => {
    let slider = tns({
      container: '.customers-slider',
      items: 1,
      autoplay: true,
      mouseDrag: true,
      controls: false,
      arrowKeys: true,
      gutter: 30,
      edgePadding: 30,
      mode: 'carousel',
      nav: false,
      responsive: {
        640: {
          items: 2
        },
        900: {
          items: 3
        }
      }
    })
  }, [])
  return (
    <section className='customerSayings'>
      <div className='title'>
        <h1>What Customers Say</h1>
        <h4>Our clients’ testimonials are the best proof of our high level of service</h4>
      </div>
      <div className='content'>
        <div className='customers-slider'>
          {customers.map(customer => (
            <div key={customer.id} className='customer'>
              <img src={customer.image} alt='customer image' />
              <h3>{customer.name}</h3>
              <p>{customer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

let customers = [
  {
    id: 1,
    image: customer1,
    name: 'JAMES SMITH',
    text:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore vel at perferendis enim aspernatur numquam quod asperiores? Error, dolore adipisci.'
  },
  {
    id: 2,
    image: customer2,
    name: 'JAMES SMITH',
    text:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore vel at perferendis enim aspernatur numquam quod asperiores? Error, dolore adipisci.'
  },
  {
    id: 3,
    image: customer3,
    name: 'JAMES SMITH',
    text:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore vel at perferendis enim aspernatur numquam quod asperiores? Error, dolore adipisci.'
  },
  {
    id: 4,
    image: customer1,
    name: 'JAMES SMITH',
    text:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore vel at perferendis enim aspernatur numquam quod asperiores? Error, dolore adipisci.'
  }
]

export default CustomerSayings
