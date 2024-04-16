import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import HeaderNavDesktop from './HeaderNavDesktop'
import ButtonDonate from './ButtonDonate'

import DeviceContext from '../context/DeviceContext'


const Header = () => {
  const {isMobil} = useContext(DeviceContext);
  return (
    <header className='header container'>
      <div className="contained">
        <Link className='header__logo' to="/">
            Dog Shelter
        </Link>
        {
          isMobil
          ? <HeaderNavDesktop />
          : <ButtonDonate/>
        }
        
        <ButtonDonate />
      </div>
    </header>
  )
}

export default Header
