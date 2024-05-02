import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import chevron from "../assets/chevronDown.svg";
    

const AboutNavMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const revealLinks = ()=>{
        setIsMenuOpen(isMenuOpen => !isMenuOpen)
    }
    
    return (
        <nav className={`pages-nav-mobile ${isMenuOpen ? "open" : "closed"}`}>
            <div className="pages-nav-mobile__summary">
                <Link to="/about">Nosotros</Link>
                <img className={isMenuOpen ? "open" : "closed"} src={chevron} alt="" onClick={revealLinks}/>
            </div>
            <div className="pages-nav-mobile__links">
                <Link to="/about/history">Nuestra Historia</Link>
                <Link to="/about/team">Nuestro Equipo</Link>
            </div>
        </nav>
    )
}

export default AboutNavMobile
