import React from 'react'

import { NavLink } from 'react-router-dom';

const HeaderNavDesktop = () => {
    return (
        <nav className='header__nav-desktop'>
            <NavLink to="adopt"> Adoptar </ NavLink>
            <NavLink to="volunteering"> Ser Voluntario </ NavLink>
            <NavLink to="about"> Acerca de nosotros </ NavLink>
            <NavLink to="news"> Noticias </ NavLink>
        </nav>
    )
}

export default HeaderNavDesktop
