import React from 'react'
import Home from './Home'
import About from './About'
import Product from './Product'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'  
import { Link } from 'react-router-dom'
import ThemeButton from './ThemeButton'
import { useContext } from 'react'
import { ThemeContext } from '../Them.jsx'
const NavBar = () => {
  const theme = useContext(ThemeContext)

  return (
    <div className=' flex  justify-between bg-blue-400 alighn-center p-6 white' >
      <h2>Vibp4</h2>
      <div className='flex gap-6 font-semibold text-large rounded '>
        <Link className=' hover:text-black ' to='/'>Home</Link>
        <Link className=' hover:text-black ' to='/about'>About</Link>
        <Link className=' hover:text-black ' to='/product'>Product</Link>
        <Link className=' hover:text-black ' to='/contact'>Contact</Link>
        <Link className=' hover:text-black ' to='/courses'>Courses</Link>
        <ThemeButton/>
        <h2>{theme}</h2>
      </div>
      
    </div>
  )
}

export default NavBar