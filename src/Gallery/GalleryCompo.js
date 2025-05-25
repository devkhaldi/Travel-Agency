import React from 'react'
// Import images
import img1 from '../img/gallery/bankok_tailand.jpg'
import img2 from '../img/gallery/barcelona.jpg'
import img3 from '../img/gallery/bled_slovinia.jpg'
import img4 from '../img/gallery/burgenland_austria.jpg'
import img5 from '../img/gallery/himalayas_nepal.jpg'
import img6 from '../img/gallery/istanbul.jpg'
import img7 from '../img/gallery/london.jpg'
import img8 from '../img/gallery/longsPeak_usa.jpg'
import img9 from '../img/gallery/portAntonio_jamaika.jpg'
import img10 from '../img/gallery/stjones_antigua.jpg'
import img11 from '../img/gallery/swissAlps_Switzerland.jpg'
import img12 from '../img/gallery/valletta_malta.jpg'

import './css/GalleryCompo.css'

const GalleryCompo = () => {
  return (
    <div className='gallery'>
      {galleryItems.map((item) => (
        <div className='column'>
          {item.map((columnItem) => (
            <div className='img-container'>
              <img src={columnItem.image} alt='gallery item' />
              <div className='img-overlay'>
                <span>{columnItem.destination}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

const galleryItems = [
  [
    { image: img1, destination: 'Bankok, Tailand' },
    { image: img2, destination: 'Barcelona, Spain' },
    { image: img3, destination: 'Bled, Slovinia' },
    { image: img4, destination: 'Burgenland, Austria' },
  ],
  [
    { image: img5, destination: 'Himalayas, Nipal' },
    { image: img6, destination: 'Istanbol, Turkey' },
    { image: img7, destination: 'London, England' },
    { image: img8, destination: 'Longs Peak, USA' },
  ],
  [
    { image: img9, destination: 'Port Antonio, Jamaika' },
    { image: img10, destination: 'St Jones, Antigua' },
    { image: img11, destination: 'Swiss Alps, Switzerland' },
    { image: img12, destination: 'Valletta, Malta' },
  ],
  [
    { image: img3, destination: 'Bled, Slovinia' },
    { image: img4, destination: 'Burgenland, Austria' },
    { image: img1, destination: 'Bankok, Tailand' },
    { image: img2, destination: 'Barcelona, Spain' },
  ],
]

export default GalleryCompo
