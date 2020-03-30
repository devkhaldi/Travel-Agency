import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import ProgramItem from './ProgramItem'

const TourProgram = () => {
  const responsive = {
    100: { items: 1 },
    850: { items: 2 },
    1200: { items: 3 }
  }
  return (
    <section className='tour-program'>
      <div className='title-container'>
        <h1 className='title'>Tour Program</h1>
        <h3 className='subtitle'>Here is what’s included in the program of this tour</h3>
      </div>
      <div className='owl-carousel-container'>
        <OwlCarousel responsive={responsive} items={3} className='owl-theme'>
          {programms.map(program => (
            <ProgramItem key={program.id} program={program} />
          ))}
        </OwlCarousel>
      </div>
    </section>
  )
}

const programms = [
  {
    id: 1,
    startDay: 1,
    endDay: 3,
    cities: ['BERLIN', 'WARSWAW', 'KRAKOW'],
    description:
      'Start your Eastern Europe trip from Berlin - one of the most attractive European cities. Head out to Warsaw - the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums.'
  },
  {
    id: 2,
    startDay: 1,
    endDay: 3,
    cities: ['BERLIN', 'WARSWAW', 'KRAKOW'],
    description:
      'Start your Eastern Europe trip from Berlin - one of the most attractive European cities. Head out to Warsaw - the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums.'
  },
  {
    id: 3,
    startDay: 1,
    endDay: 3,
    cities: ['BERLIN', 'WARSWAW', 'KRAKOW'],
    description:
      'Start your Eastern Europe trip from Berlin - one of the most attractive European cities. Head out to Warsaw - the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums.'
  },
  {
    id: 4,
    startDay: 1,
    endDay: 3,
    cities: ['BERLIN', 'WARSWAW', 'KRAKOW'],
    description:
      'Start your Eastern Europe trip from Berlin - one of the most attractive European cities. Head out to Warsaw - the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums.'
  },
  {
    id: 5,
    startDay: 1,
    endDay: 3,
    cities: ['BERLIN', 'WARSWAW', 'KRAKOW'],
    description:
      'Start your Eastern Europe trip from Berlin - one of the most attractive European cities. Head out to Warsaw - the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums.'
  },
  {
    id: 6,
    startDay: 1,
    endDay: 3,
    cities: ['BERLIN', 'WARSWAW', 'KRAKOW'],
    description:
      'Start your Eastern Europe trip from Berlin - one of the most attractive European cities. Head out to Warsaw - the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums.'
  }
]

export default TourProgram
