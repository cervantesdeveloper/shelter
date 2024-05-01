import React from 'react';
import { Outlet } from 'react-router-dom';

import PagesHero from '../components/PagesHero';

const LayoutAbout = () => {
        return (
            <>
                <PagesHero image="about_hero.jpg" text="Sobre nosotros" />
                <main className='main-about'>
                    <Outlet />
                </main>
            </>
        )
}

export default LayoutAbout
