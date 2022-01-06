import React from "react"
import { GoLocation } from "react-icons/go"
import { FiPhone } from "react-icons/fi"
import { AiOutlineMail } from "react-icons/ai"
import { MdWebAsset } from "react-icons/md"
import { IoLogoFacebook } from "react-icons/io"
import { IoLogoTwitter } from "react-icons/io"
import { IoLogoYoutube } from "react-icons/io"
import { IoLogoLinkedin } from "react-icons/io"
import logo from "../img/logo.png"
import "./css/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className='footer-grid'>
        <div className='col'>
          <span className='logo'>
            {/* <span style={{ color: "#48cfaf" }}>Menara</span>Travels */}
            <img src={logo} alt='footer logo' />
          </span>
          <p className='about'>
            Since 2002, we have been offering travel services of the highest
            quality, combining our energy and enthusiasm.
          </p>
        </div>
        <div className='col contact'>
          <h3>Our Contacts</h3>
          <div className='sub-grid'>
            <div className='col'>
              <div className='col-item'>
                <GoLocation />
                <span>
                  732/21 Second Street, Manchester, King Street, Kingston United
                  Kingdom
                </span>
              </div>
              <div className='col-item'>
                <FiPhone />
                <span>345-677-554</span>
              </div>
            </div>
            <div className='col'>
              <div className='col-item'>
                <AiOutlineMail />
                <span>info@demolink.org</span>
              </div>
              <div className='col-item'>
                <MdWebAsset />
                <span>demolink.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* contact us */}
        <div className='col'>
          <h3>Follow Us</h3>
          <div className='social-icons'>
            <IoLogoFacebook />
            <IoLogoTwitter />
            <IoLogoYoutube />
            <IoLogoLinkedin />
          </div>
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <hr />
      <div className='bottom'>
        <p className='copyright'>
          Copyright ©2020 Menara Travels. All Rights Reserved.
        </p>
        <div className='footer-links'>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms of use</a>
          <a href='#'>Contact Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
