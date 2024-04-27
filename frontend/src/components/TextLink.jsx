import React from 'react'
import { Link } from 'react-router-dom'

import arrow from "../assets/arrow.svg"

const TextLink = ({text, link}) => {
    return (
        <Link to={link}>
            <div className="btn-text">
                {text}
                <img src={arrow} alt="" />
            </div>
            
        </Link>
    )
}

export default TextLink
