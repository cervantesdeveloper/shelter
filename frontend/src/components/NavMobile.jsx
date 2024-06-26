import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'

import MenuContext from '../context/MenuContext'

const NavMobile = () => {
    const {isOpen, handleClick} = useContext(MenuContext)

    return (
            <nav className={`nav-mobile ${isOpen && "open"}`} onClick={handleClick}>
                <NavLink to="adopt"> Adoptar </ NavLink>
                <NavLink to="about"> Acerca de nosotros </ NavLink>
                <NavLink to="news"> Noticias </ NavLink>
            </nav>
    )
}

export default NavMobile
