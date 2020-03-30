import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Hero from '../Component/Hero'
import bgImage from '../img/gallery/cover.jpeg'
import location from '../img/Contact/location.png'
import phone from '../img/Contact/phone.png'
import mobile from '../img/Contact/mobile.png'
import email from '../img/Contact/email.png'
import link from '../img/Contact/link.png'
import './css/Contact.css'

const Contact = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <React.Fragment>
      <Navbar />
      <Hero bgImage={bgImage}>
        <h1 className='title'>Contact Us</h1>
        <h3 className='subtitle'>Let`s keep in touch!</h3>
      </Hero>
      <div className='contact-page'>
        <div className='contact-container'>
          <div className='contact-column'>
            <h2>Contact Our Agency</h2>
            <p>
              At Menara Travels we want to make sure that your trip is everything you could possibly
              dream of. Whether you want inspiration and guidance in planning your next adventure or
              need help with an existing booking, our travel experts are here to help. Send us an
              email or give our team a call to book your flights, plan your adventure or get help
              with any problems you encounter along the way. Or if you're nearby, you can visit us
              in store to speak face to face. Our assistance doesn't end when you take off either;
              our team are on hand to assist with any issues you may have.
            </p>
          </div>
          <div className='contact-column'>
            <h2>Our Contacts</h2>
            <div className='contact-items'>
              <div className='row'>
                <div className='icon-container'>
                  <img src={location} alt='icon' />
                </div>
                <span>732/21 Second Street, Manchester, King Street, Kingston United Kingdom</span>
              </div>
              <div className='row'>
                <div className='icon-container'>
                  <img src={phone} alt='icon' />
                </div>
                <span>345-677-554</span>
              </div>
              <div className='row'>
                <div className='icon-container'>
                  <img src={mobile} alt='icon' />
                </div>
                <span>323-678-567</span>
              </div>
              <div className='row'>
                <div className='icon-container'>
                  <img src={email} alt='icon' />
                </div>
                <span>info@demolink.org</span>
              </div>
              <div className='row'>
                <div className='icon-container'>
                  <img src={link} alt='icon' />
                </div>
                <span>demolink.org</span>
              </div>
            </div>
          </div>
          <div className='contact-column'>
            <h2>Any Questions ?</h2>
            <form>
              <div className='form-group'>
                <input type='text' placeholder='Your Name' />
              </div>
              <div className='form-group'>
                <input type='text' placeholder='Email' />
              </div>
              <div className='form-group'>
                <textarea cols='30' rows='10' placeholder='Message'></textarea>
              </div>
              <input type='submit' value='Send Message' className='button' />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Contact
