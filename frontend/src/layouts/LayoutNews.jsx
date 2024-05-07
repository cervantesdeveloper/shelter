import React from 'react'
import { Outlet } from 'react-router-dom'

import PagesHero from '../components/PagesHero'

const LayoutNews = () => {
  return (
    <>
        <PagesHero image="news_hero.jpg" text="Noticias" />
        <Outlet />
    </>
  )
}

export default LayoutNews
