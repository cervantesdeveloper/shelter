import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import NavMobile from '../components/NavMobile';

import { MenuProvider } from '../context/MenuContext';

const LayoutHome = () => {
    return (
        <div>
            <MenuProvider>
                <Header />
                <NavMobile />
            </MenuProvider>
            <Outlet />
        </div>
    )
}

export default LayoutHome
