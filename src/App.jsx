import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'

import Home from './Page/Home'
import ContractInfo from './Page/ContractInfo'
import Booking from './Page/Booking'


function App() {
  return (
    <div className="overlay">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContractInfo" element={<ContractInfo />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </div>
  )
}

export default App
