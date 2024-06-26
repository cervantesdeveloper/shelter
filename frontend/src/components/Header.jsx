import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import HeaderNavDesktop from './HeaderNavDesktop'
import ButtonDonate from './ButtonDonate'
import Burger from './Burger'

import DeviceContext from '../context/DeviceContext'
import MenuContext from '../context/MenuContext'


const Header = () => {
  const {isMobil} = useContext(DeviceContext);
  const {isOpen, handleClick} = useContext(MenuContext);
  return (
    <header className='header container'>
      <div className="contained">
        <Link className='header__logo' to="/" >
            Santuario
        </Link>
        {
          isMobil
          ?  <Burger handleClick={handleClick} isOpen={isOpen}/>
          :  (<><HeaderNavDesktop /> <ButtonDonate /></>)
        }
        
        
      </div>
    </header>
  )
}

export default Header
