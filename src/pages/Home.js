import { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import RandomCard from '../components/RandomCard'
import '../App.css'

function Home() {
  const [cocktails, setCocktails] = useState(null)
  const [random, setRandom] = useState([])
  const [search, setSearch] = useState('')
  const [randomDone, setRandomDone] = useState(null);


  const getRandom = () => {
   for (var index = 0; index < 5; ++index) {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then((data) => {
          setRandom(cur => [...cur, data.drinks[0]])})
        .catch(error => {
          index-=1
          console.log(error)
        })
    }
    setRandomDone(true)
  }

  useEffect(() => {
    // fetches categorie names
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then(response => response.json())
        .then((data) => {setCocktails(data.drinks)})
        .catch(error => {console.log(error)})
    // fetches 5 random cocktails
    getRandom()
  }, [])
    
  return (
    <div id='home'>
      <div id="search-container">
        <h1>Search for drinks</h1>
        <input id="search" type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Enter the name of a drink.'></input>
      </div>
      <div id='categories-container'>
        <h1>Categories</h1>
          <ul id="categories">
            {cocktails ? (cocktails.map((categorie, key) => {
              return <Categories
                name={categorie.strCategory}
                key={key}
                num={key}
              />
            })) : <h1>Loading...</h1>}
          </ul>
      </div>
      <div id="randomContainer">
          <h1>Random Drinks</h1>
          <div className='cardContainer'>
              {randomDone ? random.map((cocktail, key) => {
              return <RandomCard
              id= {cocktail.idDrink} 
              key={key}
              count={key} 
              name={cocktail.strDrink} 
              ategory={cocktail.strCategory} 
              />
              }) : <h1>Loading...</h1>}
          </div>
      </div>
    </div>
  )
}

export default Home