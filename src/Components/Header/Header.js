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
        <NavLink className='nav-btn' to='/about' type='button'><span>About</span></NavLink>
        <NavLink className='nav-btn' to='/saved' type='button'><span>Saved(0)</span></NavLink>
        <NavLink className='nav-btn' to='/current' type='button'><span>Current</span></NavLink>
        <NavLink className='nav-btn' to='/search' type='button'><span>Search</span></NavLink>
      </section>
    </nav>
  )
}

export default Header