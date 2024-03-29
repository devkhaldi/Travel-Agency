import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import "./css/Navbar.css"
import logo from "../img/logo.png"

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(true)
  return (
    <header>
      <div className='navbar animated medium'>
        <AiOutlineMenu onClick={() => setIsOpened(!isOpened)} />
        <div className='logo-container'>
          <img src={logo} alt='logo' />
        </div>
        <div className='nav-items'>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink exact to='/tours'>
            Tours
          </NavLink>
          <NavLink exact to='/gallery'>
            Gallery
          </NavLink>
          <NavLink exact to='/contact'>
            Contact
          </NavLink>
        </div>
      </div>
      <div className={isOpened ? "side-nav" : "side-nav opened"}>
        <div className='side-nav-items'>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink exact to='/tours'>
            Tours
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
