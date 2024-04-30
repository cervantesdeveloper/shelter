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
import Volunteering from "./pages/Volunteering"
import About from './pages/About'
import News from './pages/News'
import Donate from './pages/Donate'
import AdoptDetail from './pages/AdoptDetail'
import LayoutHome from './layouts/LayoutHome'
import LayoutAdopt from './layouts/LayoutAdopt'
import AdoptProcess from './pages/AdoptProcess'
import AdoptDogs from './pages/AdoptDogs'




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
          </Route>
           
          <Route path='adopt/:id' element={<AdoptDetail />} />
          <Route path='volunteering' element={<Volunteering />}/>
          <Route path='about' element={<About />}/>
          <Route path='news' element={<News />} />
          <Route path='donate' element={<Donate />}/>
        </Route>
        
        
      </Routes>
    </DeviceProvider>
    </BrowserRouter>
  )
}

export default App
