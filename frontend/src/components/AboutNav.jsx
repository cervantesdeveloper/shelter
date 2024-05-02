import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const AboutNav = () => {
    return (
        <nav className="pages-nav">
        <div className="pages-nav__summary">
            <Link to=".">Nosotros</Link>
        </div>
        <div className="pages-nav__links">
            <NavLink 
                to="history"
                className={({isActive})=> isActive ? "activeLink" : ""}
            >
                Nuestra Historia
            </NavLink>

            <NavLink 
                to="team"
                className={({isActive})=> isActive ? "activeLink" : ""}
            >
                Nuestro Equipo
            </NavLink>
        </div>
    </nav>
    )
}

export default AboutNav
