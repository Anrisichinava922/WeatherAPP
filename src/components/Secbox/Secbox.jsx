import React from 'react'
import './secbox.css'

const Secbox = ({weather}) => {
  return (
    <div className="blari">
        <div className="winatext">
          <p>Weather Details...</p>
          <h6>THUNDERSTORM WITH LIGHT DRIZZLE</h6>
        </div>
        <div className="infos">
            <div className="box box1">
                <h2 className='max-temp'>Temp Max</h2>
                <div className="imgbox">
                  <p>{weather?.maxTemp}°</p>
                  <img src="/assets/max.svg" alt="" />
                </div>
            </div>
            <div className="box box2">
                <h3 className='min-temp'>Temp Min</h3>
                <div className="imgbox">
                  <p>{weather?.minTemp}°</p>
                  <img src="/assets/min.svg" alt="" />
                </div>
            </div>
            <div className="box box3">
                <h4 className='humidity'>Humidity</h4>
                <div className="imgbox">
                  <p>{weather?.humidity}%</p>
                  <img src="/assets/humidity.svg" alt="" />
                </div>
            </div>
            <div className="box box4">
                <h5 className='wind-speed'>Wind speed</h5>
                <div className="imgbox">
                  <p>{weather?.windSpeed}km/h</p>
                  <img src="/assets/wind.svg" alt="" />
                </div>
            </div>

          <div className="sicariele"></div>
        </div>
      </div>
  )
}

export default Secbox