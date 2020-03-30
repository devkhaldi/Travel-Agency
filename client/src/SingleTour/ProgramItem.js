import React from 'react'

const ProgramItem = ({ program }) => {
  const cities =
    program.cities.slice(0, program.cities.length - 1).join(', ') +
    ', and ' +
    program.cities.slice(-1)
  return (
    <div className='program-item'>
      <div className='header'>
        <div className='time'>
          <div className='value'>
            {program.startDay} - {program.endDay}
          </div>
          <div className='label'>DAY</div>
        </div>
        <div className='cities'>{cities}</div>
      </div>
      <hr />
      <div className='description'>
        <p>{program.description}</p>
      </div>
    </div>
  )
}

export default ProgramItem
