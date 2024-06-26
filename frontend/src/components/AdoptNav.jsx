import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const AdoptNav = () => {
  return (
    <nav className="pages-nav">
        <div className="pages-nav__summary">
            <Link to=".">Adoptar</Link>
        </div>
        <div className="pages-nav__links">
            <NavLink 
                to="process"
                className={({isActive})=> isActive ? "activeLink" : ""}
            >
                Proceso de adopción
            </NavLink>

            <NavLink 
                to="dogs"
                className={({isActive})=> isActive ? "activeLink" : ""}
            >
                Perros en adopción
            </NavLink>
        </div>
    </nav>
  )
}

export default AdoptNav
