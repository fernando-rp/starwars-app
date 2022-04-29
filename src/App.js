import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Views/Home"
import Characters from './Views/Characters';
import Planets from './Views/Planets';
import Starships from './Views/Starships';

import OneCharacter from './Views/OneCharacter';
import OnePlanet from './Views/OnePlanet';
import OneStarship from './Views/OneStarship';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import injectContext from "./Store/appContext";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import 'bootstrap'
import 'react-icons'
import '@fortawesome/fontawesome-free'


function App() {
  return (
    
    <div className="d-flex flex-column">
      
      <BrowserRouter>
        <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Routes>
            <Route path="/characters" element={<Characters/>}/>
          </Routes>
          <Routes>
            <Route path="/planets" element={<Planets/>}/>
          </Routes>
          <Routes>
            <Route path="/starships" element={<Starships/>}/>
          </Routes>
          <Routes>
            <Route path="/onecharacter/:id/detail" element={<OneCharacter/>}/>
          </Routes>
          <Routes>
            <Route path="/oneplanet/:id/detail" element={<OnePlanet/>}/>
          </Routes>
          <Routes>
            <Route path="/onestarship/:id/detail" element={<OneStarship/>}/>
          </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default injectContext(App);
