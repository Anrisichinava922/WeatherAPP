import React from 'react'
import './first.css'

const First = ({weather}) => {
  return (
    <div className="hello">
      <h1 className='weather'>{weather?.currentTemp}°</h1>
      <div className="gverdzee">
        <h1 className='city'>{weather?.city}</h1>
        <h1 className='date'>{weather?.day}{weather?.month}</h1>  
      </div>
    </div>
  )
}

export default First