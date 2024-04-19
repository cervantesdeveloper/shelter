import React from 'react'
import { Link } from 'react-router-dom'

const ButtonCTA = ({text, link}) => {
  return (
    <Link to={link}>
        <div className="btn cta">
            {text}
        </div>
    </Link>
  )
}

export default ButtonCTA
