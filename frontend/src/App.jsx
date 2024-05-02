import react from 'react'
import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"
import './App.css'

import { DeviceProvider } from './context/DeviceContext'

import Home from './pages/Home'
import Adopt from './pages/Adopt'
import About from './pages/About'
import News from './pages/News'
import Donate from './pages/Donate'
import AdoptDetail from './pages/AdoptDetail'
import LayoutHome from './layouts/LayoutHome'
import LayoutAdopt from './layouts/LayoutAdopt'
import AdoptProcess from './pages/AdoptProcess'
import AdoptDogs from './pages/AdoptDogs'
import LayoutAbout from './layouts/LayoutAbout'
import AboutHistory from './pages/AboutHistory'
import AboutTeam from './pages/AboutTeam'




function App() {
  return (
    <BrowserRouter>
    <DeviceProvider>
      <Routes>
        <Route element={<LayoutHome />}>

          <Route index element={<Home />}/>

          <Route path='adopt' element={<LayoutAdopt />}>
            <Route index element={<Adopt />} />
            <Route path='process' element={<AdoptProcess />} />
            <Route path='dogs' element={<AdoptDogs />}/>
            <Route path=':id' element={<AdoptDetail />} />
          </Route>

          <Route path='about' element={<LayoutAbout />}>
            <Route index element={<About />}/>
            <Route path='history' element={<AboutHistory />}/>
            <Route path='team' element={<AboutTeam />}/>
          </Route>
           
          
          <Route path='news' element={<News />} />
          <Route path='donate' element={<Donate />}/>
        </Route>
        
        
      </Routes>
    </DeviceProvider>
    </BrowserRouter>
  )
}

export default App
