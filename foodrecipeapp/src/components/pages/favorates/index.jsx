import React, { useContext } from 'react'
import { GlobalContext } from '../../contex'
import favlist from '../../recipe-list'
import RecipeList from '../../recipe-list'
import { useNavigate } from 'react-router-dom'

export default function Fav() {
 
  const { favlist, setFav } = useContext(GlobalContext)
  return (
    <div className="py-10 px-4 container mx-auto">
      {
        favlist && favlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {
              favlist.map((item) => <RecipeList item={item} />)
              
            }
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600 mt-10">No recipes found. Try a different search.</p>
        )
      }
    </div>
  )
}
