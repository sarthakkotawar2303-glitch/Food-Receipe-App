import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../contex'

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext)
  console.log(searchParam)
  return (
    <nav className='container mx-auto px-6 py-4 bg-gradient-to-r from-red-100 via-orange-50 to-white shadow-md rounded-xl flex flex-col lg:flex-row items-center justify-between gap-4'>

      <h2 className='text-3xl font-extrabold text-red-500 tracking-wide drop-shadow-sm'>
        🍽️ FoodRecipe
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder='Search recipes...'
          className='w-full max-w-md px-4 py-2 bg-white text-gray-700 placeholder-gray-500 border border-red-200 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200'
        />

      </form>


      <ul className='flex gap-6 text-base font-semibold text-gray-700'>

        <li>
          <NavLink
            to='/Home'
            className='hover:text-red-600 transition-colors duration-200'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Fav'
            className='hover:text-red-600 transition-colors duration-200'
          >
            Favorites
          </NavLink>
        </li>
      </ul>

    </nav>

  )
}
