import React from 'react'
import './css/WhyMenaraTravels.css'
import icon1 from '../img/WhyMenaraTravels/1.png'
import icon2 from '../img/WhyMenaraTravels/2.png'
import icon3 from '../img/WhyMenaraTravels/3.png'
import icon4 from '../img/WhyMenaraTravels/4.png'
import icon5 from '../img/WhyMenaraTravels/5.png'
import icon6 from '../img/WhyMenaraTravels/6.png'
import bgImage from '../img/whyMenaraTravels.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

const WhyMenaraTravels = () => {
  return (
    <section className='whyMenaraTravels'>
      <div className='title-container'>
        <ScrollAnimation animateOnce={true} delay={500} animateIn='slideInLeft'>
          <h1>Why Menara Travels</h1>
        </ScrollAnimation>
      </div>
      <div className='cards-container'>
        {cardsContent.map(ct => (
          <ScrollAnimation animateOnce={true} animateIn='slideInRight'>
            <div key={ct.id} className='card'>
              <div className='icon-container'>
                <div className='icon'>
                  <img src={ct.icon} alt='icon' />
                </div>
              </div>
              <div className='text-container'>
                <h3>{ct.title}</h3>
                <p>{ct.content}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}

const cardsContent = [
  {
    id: 1,
    icon: icon1,
    title: 'PERSONALIZED MATCHING',
    content: 'Our search system helps you find a personalized tour in just a few clicks.'
  },
  {
    id: 2,
    icon: icon2,
    title: 'WIDE VARIETY OF DESTINATIONS',
    content: 'With SunTravel, you’ll find a perfect destination among hundreds available.'
  },
  {
    id: 3,
    icon: icon3,
    title: 'HIGHLY QUALIFIED SERVICE',
    content: 'Our high level of service is officially recognized by thousands of clients.'
  },
  {
    id: 4,
    icon: icon4,
    title: '24/7 SUPPORT',
    content: 'Our travel agents are always there to support you during your trip.'
  },
  {
    id: 5,
    icon: icon5,
    title: 'HANDPICKED HOTELS',
    content: 'We pick the hotels with the utmost reputation and positive reviews.'
  },
  {
    id: 6,
    icon: icon6,
    title: 'BEST PRICE GUARANTEE',
    content: 'We guarantee you’ll get top-notch comfort at an affordable price.'
  }
]

export default WhyMenaraTravels
