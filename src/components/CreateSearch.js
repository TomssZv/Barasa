import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CreateSearch({url}) {
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then( data =>
                setCocktails(data.drinks)
            ) 
            .catch(error => console.log(error))
    }, [])
  return (
    <div id='ingrSearch'>
        {cocktails ? cocktails.map((el, key) => {
            return (
                <Link
                    to={`/cocktail/${el.idDrink}`}
                    className='ingr-src-card'
                    style={{backgroundImage: `url(${el.strDrinkThumb})`}}
                    key={key}
                >
                    <h2 className='ingr-title'>{el.strDrink}</h2>
                </Link>
            )
        }) : <h1>Loading...</h1>}
    </div>
  )
}

export default CreateSearch