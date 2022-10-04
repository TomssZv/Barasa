import React, { useEffect, useState } from 'react'

function IngrSearch({ingrName}) {
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrName}`)
            .then(response => response.json())
            .then( data =>
                setCocktails(data.drinks)
            ) 
            .catch(error => console.log(error))
    }, [])
  return (
    <div id='ingrSearch'>
        {cocktails ? cocktails.map((el, key) => {
            console.log(cocktails);
            return (
                <div
                    className='ingr-src-card'
                    style={{backgroundImage: `url(${el.strDrinkThumb})`}}
                >
                    {el.strDrink}
                </div>
            )
        }) : <h1>Loading...</h1>}
    </div>
  )
}

export default IngrSearch