import React from 'react'

const TourInfo = () => {
  return (
    <section className='tour-info'>
      <div className='infos-container'>
        <div className='info'>
          <span className='title'>DATE</span>
          <span className='value'>{`${tourInfos.dateStart} - ${tourInfos.dateEnd}`}</span>
        </div>
        <div className='info'>
          <span className='title'>DURATION</span>
          <span className='value'>{`${tourInfos.duration} DAYS`}</span>
        </div>
        <div className='info'>
          <span className='title'>PRICE</span>
          <span className='value'>{`$ ${tourInfos.price}`}</span>
        </div>
        <div className='info'>
          <span className='title'>PLACES AVAIBLE</span>
          <span className='value'>{tourInfos.placesAvaible}</span>
        </div>
      </div>
      {/* <div className='description-container'>
        <h1 className='description-title'>Tour Description</h1>
        <p>{tourInfos.description}</p>
      </div> */}
    </section>
  )
}

const tourInfos = {
  dateStart: '19 OCT',
  dateEnd: '29 OCT',
  duration: 10,
  price: 2500,
  placesAvaible: 27,
  description:
    "Capital of Catalonia, Barcelona is renowned for its art and architecture. Very popular for its cultural wealth, its beach and its nightlife. Visit its emblematic monuments then go to Madrid renowned for its collections of works of art from the Prado Museum. Wake up your taste buds in the city 's many tapas bars before discovering Madrid's nightlife"
}

export default TourInfo
