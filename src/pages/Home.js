import { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import '../styles/Home.css'

function Home() {
  const [cocktails, setCocktails] = useState(null)

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then(response => response.json())
        .then((data) => {setCocktails(data.drinks)})
        .catch(error => {console.log(error)})
  }, [])
    
  return (
    <div id='home'>
      <div id="search-container">
        <h1>Search for drinks</h1>
        <input type="text" placeholder='Enter the name of a drink.'></input>
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
      <div id="random-container">
          <h1>Random Drinks</h1>
      </div>
    </div>
  )
}

export default Home