import React, {useContext} from 'react'

import DeviceContext from '../context/DeviceContext'

import ButtonDonate from './ButtonDonate.jsx'

const HomeHero = () => {
    const {isMobil} = useContext(DeviceContext);

    return (
        <section className="home-hero">
            <picture>
                <source media="(min-width:430px)" srcSet='home_hero.jpg'/>
                <img src="home_hero-mobile.jpg" alt="A stray dog looking for a kind soul" />
            </picture>
            <h1 className='home-hero__header'>
                Haz la diferencia hoy: <br/>apoya a nuestros amigos de cuatro patas
            </h1>
            {isMobil && <ButtonDonate />}
        </section>
    )
}

export default HomeHero
