import React from 'react'
import { Link } from 'react-router-dom'

import heart from "../assets/heart.svg";

const ButtonDonate = () => {
    return (
        <Link to={"/donate"}>
            <div className='btn cta'>
                <img src={heart} className='btn__icon'></img>
                Donar
            </div>
        </Link>
    )
}

export default ButtonDonate
