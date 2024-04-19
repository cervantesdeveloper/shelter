import React, { useContext } from 'react'

import StatsCarrousel from './StatsCarrousel'
import StatsGrid from './StatsGrid';

import DeviceContext from '../context/DeviceContext'

const HomeStats = () => {
  const {isMobil} = useContext(DeviceContext);
  return (
    <section className="home-stats">
        {
          isMobil
          ? <StatsCarrousel />
          : <StatsGrid />
        }
        
    </section>
  )
}

export default HomeStats
