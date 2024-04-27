import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = ({text, link}) => {
  return (
    <Link to={link}>
        <div className="btn btn-outlined">
            {text}
        </div>
    </Link>
  )
}

export default ButtonLink
