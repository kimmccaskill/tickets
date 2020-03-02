import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Header.css'

export const Header = ({ savedEvents }) => {
  return (
    <nav className='nav-bar'>
      <Link to='/' className='logo-box'>
        <div className='logo'></div>
        <h1>TicketCloud</h1>
      </Link>
      <section className='links-container'>
        <NavLink className='nav-btn' to='/about' type='button'><span>About</span></NavLink>
        <NavLink className='nav-btn' to='/saved' type='button'><span>Saved({savedEvents.length})</span></NavLink>
        <NavLink className='nav-btn' to='/current' type='button'><span>Current</span></NavLink>
        <NavLink className='nav-btn' to='/search' type='button'><span>Search</span></NavLink>
      </section>
    </nav>
  )
}

export const mapStateToProps = state => ({
  savedEvents: state.savedEvents
})

export default connect(mapStateToProps)(Header);