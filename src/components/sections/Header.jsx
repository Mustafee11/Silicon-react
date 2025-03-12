import React, { useContext } from 'react'
import ToggleSwitch from '../elements/ToggleSwitch'
import LinkButton from '../elements/LinkButton'
import { Link, NavLink } from 'react-router-dom'
import { DarkModeContext } from '../../contexts/DarkModeContext'

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <header id="header">
      <div className="container">
        <div className='logotype'>
        <Link to="/">
          <img src={ darkMode ? '/images/logotype_dark.svg' : '/images/logotype_light.svg' } alt="Silicon Inc." />
        </Link>
        </div>
       
        
       

        <nav> 
          <NavLink to="/features" className="nav-link">Features</NavLink>
          <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
        </nav>
        <div className='darkmode'>
        <ToggleSwitch id="theme-switch" text="Dark Mode" currentState={darkMode} currentStateCallback={toggleDarkMode} />
        </div>
        
        <div className=' account-link'>
        <LinkButton to="signin" text="Sign in/up" color="purple" icon="bi bi-person" />
        </div>
        <div className='hamburger-button'>
        <button > <i className="bi bi-list"></i></button>
        </div>
        

      </div>
    </header>
  )
}

export default Header