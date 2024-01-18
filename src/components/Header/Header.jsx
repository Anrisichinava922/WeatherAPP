import React from 'react'
import './header.css'

const Header = ({handleSubmit, setAciveCity }) => {
  return (
    <header>
    <img src="./public/assets/headerimg.svg" alt="" />
    <form onSubmit={handleSubmit}>
      <input 
      onChange={(e) => setAciveCity(e.target.value)}
      type="text" placeholder='Search location...'/>
    </form>
  </header>
  )
}

export default Header