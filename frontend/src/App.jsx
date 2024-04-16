import react from 'react'
import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"


import './App.css'
import Home from './pages/Home'
import Adopt from './pages/Adopt'
import Volunteering from "./pages/Volunteering"
import About from './pages/About'
import News from './pages/News'
import Donate from './pages/Donate'

import Header from './components/Header'
import NavMobile from './components/NavMobile'

import { DeviceProvider } from './context/DeviceContext'
import { MenuProvider } from './context/MenuContext'


function App() {
  return (
    <BrowserRouter>
    <DeviceProvider>
      <MenuProvider>
      <Header />
      <NavMobile />
      </MenuProvider>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='adopt' element={<Adopt />}/>
        <Route path='volunteering' element={<Volunteering />}/>
        <Route path='about' element={<About />}/>
        <Route path='news' element={<News />} />
        <Route path='donate' element={<Donate />}/>
      </Routes>
    </DeviceProvider>
    </BrowserRouter>
  )
}

export default App
