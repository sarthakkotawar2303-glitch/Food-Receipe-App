import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const GlobalContext = createContext()
export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState('')
  const [loading, setLoading] = useState(false)
  const [recipeList, setRecipelist] = useState([])
  const [recipeDetails, setRecipeDetails] = useState('')
  const [favlist, setFav] = useState([])
   const navigate=useNavigate()
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setLoading(true)
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
      const data = await res.json()
      console.log(data)
      if (data?.data.recipes) {
        setRecipelist(data?.data.recipes)
        setLoading(false)
        setSearchParam('')
        navigate('/Home')
      }
    } catch (error) {

    }
  }
  function handleFav(getCurrentId) {
    console.log(getCurrentId)
    const cpy = [...favlist]
    const index = cpy.findIndex((item) => item?.id === getCurrentId.id)
    if (index === -1) {
      cpy.push(getCurrentId)
    } else {
      cpy.splice(index)
    }
    setFav(cpy)
  }
  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit, loading, recipeList, recipeDetails, setRecipeDetails, favlist, setFav, handleFav }}>
      {children}
    </GlobalContext.Provider>
  )
}

