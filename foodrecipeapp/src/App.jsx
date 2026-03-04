import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home'
import Details from './components/pages/details'
import Navbar from './components/navbar'
import Fav from './components/pages/favorites'
function App() {


  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Fav' element={<Fav/>} />
          <Route path='/recipe-item/:id' element={<Details/>} />
        </Routes>

      </div>
    </div>
  )
}

export default App
