import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GlobalState, { GlobalContext } from '../../contex'

export default function Details() {
  const { id } = useParams()
  const { recipeDetails, setRecipeDetails, handleFav, favlist } = useContext(GlobalContext)

  useEffect(() => {
    async function getCurrentId() {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data = await res.json()
      console.log(data)
      if (data?.data) {
        setRecipeDetails(data?.data)
      }
    }
    getCurrentId()
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <div className="w-full h-64 overflow-hidden rounded-xl shadow hover:scale-105">
        <img
          src={recipeDetails?.recipe?.image_url}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center">
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
          onClick={() => handleFav(recipeDetails?.recipe)}
        >
          {
            favlist && favlist.length > 0 && favlist.findIndex((item) => item.id === recipeDetails?.recipe?.id) !== -1 ? "Remove From Favorites" : "Add To Favorites"
          }
        </button>
      </div>

      <div className="text-center">
        <span className="text-sm text-cyan-700 font-medium block">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h1 className="text-2xl font-bold text-gray-800 mt-2">
          {recipeDetails?.recipe?.title}
        </h1>
      </div>

      <div>
        <span className="text-lg font-semibold text-gray-900">Ingredients</span>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
          {recipeDetails?.recipe?.ingredients.map((item, index) =>
            <li key={index}>
              <span className="font-medium">{item.quantity} {item.unit}</span>
              <span> {item.description}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
