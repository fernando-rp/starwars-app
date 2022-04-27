import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Views/Home"
import Navbar from './Components/Navbar';
import injectContext from "./Store/appContext";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import 'bootstrap'
import 'react-icons'


function App() {
  return (
    
    <div className="d-flex flex-column">
      
      <BrowserRouter>
        <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>

          
      </BrowserRouter>
    </div>
  )
}

export default injectContext(App);
