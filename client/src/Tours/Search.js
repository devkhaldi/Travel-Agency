import React, { useState } from 'react'
import destinationIcon from '../img/tours/destination.png'
import dateIcon from '../img/tours/date.png'
import './css/Search.css'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

const Search = () => {
  const [price, setprice] = useState({
    min: 2000,
    max: 8000
  })
  return (
    <section className='tours-search'>
      <form>
        <div className='search-form'>
          <h2>Search</h2>
          <div className='form-group'>
            <img src={destinationIcon} alt='icon' />
            <input type='text' placeholder='Your destination' />
          </div>
          <div className='form-group'>
            <img src={dateIcon} alt='icon' />
            <input type='text' placeholder='Arrival' />
          </div>
          <div className='form-group'>
            <img src={dateIcon} alt='icon' />
            <input type='text' placeholder='Departure' />
          </div>
        </div>

        <hr />
        <div className='tours-price'>
          <h2>Price Range</h2>
          {/* <input type='range' onChange={e => e.target.value} value={price} min='1000' max='15000' /> */}
          <InputRange
            draggableTrack
            formatLabel={value => `${value} $`}
            maxValue={10000}
            minValue={1000}
            value={price}
            onChange={value => setprice(value)}
          />
        </div>
        <hr />
        <div className='tours-categories'>
          <h2>Categories</h2>

          <div className='form-group'>
            <input type='checkbox' id='seaTours' />
            <label htmlFor='seaTours'> Sea Tours</label>
          </div>
          <div className='form-group'>
            <input type='checkbox' id='romanticTours' />
            <label htmlFor='romanticTours'> Romantic Tours</label>
          </div>
          <div className='form-group'>
            <input type='checkbox' id='honeymoonTours' />
            <label htmlFor='honeymoonTours'> Honeymoon Tours</label>
          </div>
          <div className='form-group'>
            <input type='checkbox' id='countryTours' />
            <label htmlFor='countryTours'> Country Tours</label>
          </div>
          <div className='form-group'>
            <input type='checkbox' id='montainTours' />
            <label htmlFor='montainTours'> Montain Tours</label>
          </div>
        </div>
        <input type='submit' className='button' />
      </form>
    </section>
  )
}

export default Search
