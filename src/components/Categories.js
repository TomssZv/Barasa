import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Categories({ name, num }) {
  const [len, setLen] = useState(null)
  const [link, setLink] = useState(null)

  function getLen() {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`)
    .then(response => response.json())
    .then(data => {setLen(data.drinks.length)})
    .catch(error => {console.log(error)})
  }

  function checkName() {
    if (name.includes("/")) {
      setLink(name.replaceAll('/', '['))
    } else {
      setLink(name)
    }
  }

  useEffect(() => {
    getLen()
    checkName()
    // eslint-disable-next-line
  }, [])

  return (
    <li className="category-cont">

      <Link to={`/search/c/${link}`}>
        <img alt='red cocktail' src={require(`../images/top-view-${num+1}.png`)}></img>
        <h3>{name}</h3>
        <h4>{len + " results"}</h4>
      </Link>
    </li>
  )
}

export default Categories