import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function Cocktail() {
    const [cocktail, setCocktail] = useState([])
    const [ingredients, setIngredients] = useState([])
    const params = useParams();

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(response => response.json())
            .then(data => {
                setCocktail(data.drinks)
                console.log(data.drinks)
                let ingr = Object.keys(data.drinks[0]).filter(el => el.includes("strIngredient"))
                for (let i = 0; i < ingr.length; ++i) {
                    let ingred = data.drinks[0][ingr[i]]
                    if (ingred) {
                        setIngredients(ingredients => [...ingredients, ingred.replaceAll(' ', "%20")])
                    }
                }
            })
            .catch(error => console.log(error))
    }, [])

  return (
    <div id="cocktail">
        <div id='top'>
            {cocktail ? cocktail.map((data, key) => {
                return (
                    <div className='cocktail-cont' key={key}>
                        <div className='cocktail-text'>
                            <h1>{data.strDrink}</h1>
                            <p>{data.strInstructions}</p>
                            <h2>Ingreadients</h2>
                            <div id='ingr-cont'>
                                {ingredients ? ingredients.map((el, key) => {
                                    console.log(el)
                                    return (
                                        <div 
                                            key={key} 
                                            style={{backgroundImage: `url(https://www.thecocktaildb.com/images/ingredients/${el}-Small.png)`}}
                                            className='ingr'
                                        >

                                        </div>
                                    )
                                }) : <h1>Loading...</h1>}
                            </div>
                            
                        </div>
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