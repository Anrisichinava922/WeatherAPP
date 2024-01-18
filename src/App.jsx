import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import First from './components/First/First'
import Header from './components/Header/Header'
import Secbox from './components/Secbox/Secbox'

function App() {
  const [activeCity, setAciveCity] = useState()
  const [weather, setWeather] = useState()

  const fetchData = async (activeCity) => {
    const data = await axios.get(`https://lobster-app-kps4x.ondigitalocean.app/api/weather/${activeCity}`)
    setWeather(data?.data)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    fetchData(activeCity)
   
  }
  useEffect(() => {
    fetchData("tbilisi")
  },[])

 
  console.log(weather)
  return (
    <>
    <Header 
    handleSubmit={handleSubmit}
    setAciveCity={setAciveCity}
    />
    <First weather={weather}/>
    <Secbox weather={weather}/>
    </>
  )
}

export default App
