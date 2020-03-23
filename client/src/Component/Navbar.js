import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import './css/Navbar.css'

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(true)
  return (
    <header>
      <div className='navbar animated medium'>
        <AiOutlineMenu onClick={() => setIsOpened(!isOpened)} />
        <div className='logo-container'>
          <span>Menara Travels</span>
        </div>
        <div className='nav-items'>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink exact to='/tours'>
            Tours
          </NavLink>
          <NavLink exact to='/hotels'>
            Hotels
          </NavLink>
          <NavLink exact to='/flights'>
            Flights
          </NavLink>
          <NavLink exact to='/gallery'>
            Gallery
          </NavLink>
          <NavLink exact to='/contact'>
            Contact
          </NavLink>
        </div>
      </div>
      <div className={isOpened ? 'side-nav' : 'side-nav opened'}>
        <div className='side-nav-items'>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink exact to='/tours'>
            Tours
          </NavLink>
          <NavLink exact to='/hotels'>
            Hotels
          </NavLink>
          <NavLink exact to='/flights'>
            Flights
          </NavLink>
          <NavLink exact to='/gallery'>
            Gallery
          </NavLink>
          <NavLink exact to='/contact'>
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Navbar
