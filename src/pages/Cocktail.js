import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function Cocktail() {
    const [cocktail, setCocktail] = useState([])
    const params = useParams();

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(response => response.json())
            .then(data => setCocktail(data.drinks))
            .catch(error => console.log(error))
    }, [])

  return (
    <div id="cocktail">
        <div id='top'>
            {cocktail ? cocktail.map((data, key) => {
                return (
                    <div key={key}>
                        <h1>{data.strDrink}</h1>
                        <img src={data.strDrinkThumb} />
                    </div>
                );
            }) : <h1>Loading...</h1>}
        </div>
        <div id="bottom">

        </div>
        
    </div>
  )
}

export default Cocktail