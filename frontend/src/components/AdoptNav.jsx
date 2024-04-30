import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const AdoptNav = () => {
  return (
    <nav className="adopt-nav">
        <div className="adopt-nav__summary">
            <Link to=".">Adoptar</Link>
        </div>
        <div className="adopt-nav__links">
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
