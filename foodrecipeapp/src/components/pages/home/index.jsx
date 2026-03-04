import React, { useContext } from 'react'
import { GlobalContext } from '../../contex'
import RecipeList from '../../recipe-list'

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext)

  if (loading) return <p className="text-center text-xl font-medium py-10">Loading...</p>

  return (
    <div className="py-10 px-4 container mx-auto">
      {
        recipeList && recipeList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {
              recipeList.map((item)=><RecipeList item={item}/>)
            }
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600 mt-10">No recipes found. Try a different search.</p>
        )
      }
    </div>
  )
}
