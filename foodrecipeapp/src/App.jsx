import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './components'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/pages/home'
import Fav from './components/pages/favorates'
import Details from './components/pages/details'
function App() {


  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Fav' element={<Fav />} />
          <Route path='/recipe-item/:id' element={<Details/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
