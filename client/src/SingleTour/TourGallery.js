import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

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

const TourGallery = () => {
  const responsive = {
    300: { items: 1 },
    550: { items: 2 },
    1000: { items: 4 }
  }
  return (
    <div className='tour-gallery'>
      <OwlCarousel responsive={responsive} items={4} nav={true} dots={false} className='owl-theme'>
        <img src={img1} alt='tour gallery item' />
        <img src={img2} alt='tour gallery item' />
        <img src={img3} alt='tour gallery item' />
        <img src={img4} alt='tour gallery item' />
        <img src={img5} alt='tour gallery item' />
        <img src={img6} alt='tour gallery item' />
        <img src={img7} alt='tour gallery item' />
        <img src={img8} alt='tour gallery item' />
        <img src={img9} alt='tour gallery item' />
        <img src={img10} alt='tour gallery item' />
        <img src={img11} alt='tour gallery item' />
        <img src={img12} alt='tour gallery item' />
      </OwlCarousel>
    </div>
  )
}

export default TourGallery
