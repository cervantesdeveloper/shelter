import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';

import DeviceContext from '../context/DeviceContext';

import PagesHero from '../components/PagesHero';
import AboutNavMobile from '../components/AboutNavMobile';
import AboutNav from '../components/AboutNav';

const LayoutAbout = () => {
    const {isMobil} = useContext(DeviceContext);
    return (
        <>
            <PagesHero image="about_hero.jpg" text="Sobre nosotros" />
            <main className='main-pages'>
                {
                    isMobil
                        ? <AboutNavMobile />
                        : <AboutNav />
                }
                <Outlet />
            </main>
        </>
    )
}

export default LayoutAbout
