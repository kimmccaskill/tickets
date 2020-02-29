import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='nav-bar'>
      <Link to='/' className='logo-box'>
        <div className='logo'></div>
        <h1>TicketCloud</h1>
      </Link>
      <section className='links-container'>
        <NavLink className='nav-btn' to='/about' type='button'>About</NavLink>
        <NavLink className='nav-btn' to='/saved' type='button'>Saved(0)</NavLink>
        <NavLink className='nav-btn' to='/current' type='button'>Current</NavLink>
        <NavLink className='nav-btn' to='/search' type='button'>Search</NavLink>
      </section>
    </nav>
  )
}

export default Header