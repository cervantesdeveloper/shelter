import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';

import DeviceContext from '../context/DeviceContext';

import PagesHero from '../components/PagesHero';
import AdoptNavMobile from '../components/AdoptNavMobile';
import AdoptNav from '../components/AdoptNav';
    

const LayoutAdopt = () => {
    const {isMobil} = useContext(DeviceContext);

    return (
        <>
            <PagesHero image="adopt_hero.jpg" text="adopta un perro"/>
            <main className='main-pages'>
                {
                    isMobil
                        ? <AdoptNavMobile />
                        : <AdoptNav />

                }
                <Outlet />
            </main>
            
        </>
    )
}

export default LayoutAdopt
