import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import chevron from "../assets/chevronDown.svg";

const AdoptNavMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const revealLinks = ()=>{
        setIsMenuOpen(isMenuOpen => !isMenuOpen)
    }

    return (
        <nav className={`pages-nav-mobile ${isMenuOpen ? "open" : "closed"}`}>
            <div className="pages-nav-mobile__summary">
                <Link to="/adopt">Adoptar</Link>
                <img className={isMenuOpen ? "open" : "closed"} src={chevron} alt="" onClick={revealLinks}/>
            </div>
            <div className="pages-nav-mobile__links">
                <Link to="/adopt/process">Proceso de adopción</Link>
                <Link to="/adopt/dogs">Perros en adopción</Link>
            </div>
        </nav>
    )
}

export default AdoptNavMobile
