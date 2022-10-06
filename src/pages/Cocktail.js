import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

function Cocktail() {
    const [cocktail, setCocktail] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [ammount, setAmmount] = useState([])
    const [top, setTop] = useState('-150%')
    const params = useParams();

    function getTop(e) {
        if(e.target.localName === 'a') {
            if(e.target.children[0].offsetHeight === 139) {
                setTop('-150%')
            } else if (e.target.children[0].offsetHeight === 114) {
                setTop('-125%')
            } else if (e.target.children[0].offsetHeight === 73) {
                setTop('-80%')
            } else if (e.target.children[0].offsetHeight === 164) {
                setTop('-175%')
            }
        }
    }

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(response => response.json())
            .then(data => {
                setCocktail(data.drinks)
                let ingr = Object.keys(data.drinks[0]).filter(el => el.includes("strIngredient"))
                let amm = Object.keys(data.drinks[0]).filter(el => el.includes("strMeasure"))
                let temp = []
                for (let i = 0; i < ingr.length; ++i) {
                    if (data.drinks[0][ingr[i]] && temp.includes(data.drinks[0][ingr[i]].replaceAll(' ', "%20")) == false) {
                        temp.push(data.drinks[0][ingr[i]].replaceAll(' ', "%20"))
                    }
                }
                temp.map((el, key) => {
                    setIngredients(ingredients => [...ingredients, el])
                    setAmmount(ammount => [...ammount, data.drinks[0][amm[key]]])
                })
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
                            <h2>Instructions</h2>
                            <p>{data.strInstructions}</p>
                            <h2>Ingreadients</h2>
                            <div id='ingr-cont'>
                                <ul className='ingr-list'>
                                    {ingredients ? ingredients.map((el, key) => {
                                        return (
                                            <li key={key}>
                                                {el.replaceAll('%20', ' ')} | {ammount[key]}
                                            </li>
                                        ) 
                                    }): <h1>Loading...</h1>}
                                </ul>
                                <div className='ingr-cards'>
                                    {ingredients ? ingredients.map((el, key) => {
                                        return (
                                            <Link 
                                                to={`/search/i/${el}`}
                                                key={key} 
                                                style={{backgroundImage: `url(https://www.thecocktaildb.com/images/ingredients/${el}-Small.png)`}}
                                                className='ingr'
                                                onMouseOver={(e) => getTop(e)} 
                                            >
                                                <div 
                                                    className='ingr-info'
                                                    style={{top: top}}
                                                >
                                                    <p>{el.replaceAll('%20', ' ')}</p>
                                                    <p>{ammount[key]}</p>
                                                </div>
                                            </Link>
                                        )
                                    }) : <h1>Loading...</h1>}
                                </div>
                                
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