import React, { useEffect, useState } from 'react'

function Cocktails() {
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then((data) => {setCocktails(data.drinks)})
        .catch(error => {console.log(error)})
  }, [])
  return (
    <div>
      {cocktails && cocktails.map((cocktail, key) => {
        return <div key={key}>{cocktail.strDrink}</div>
      })}
    </div>
    
  )
}

export default Cocktails