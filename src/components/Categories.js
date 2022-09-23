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

  // checks if name has "/" or " " and sets link state
  function checkName() {
    if (name.includes("/")) {
      let tempString = '';
      // goes over name until index of the unwanted element
      for (let index = 0; index < name.indexOf("/"); ++index) {
        // adds characters to temperoray string
        tempString += name[index];
      }
      setLink(tempString)
    } else if (name.includes(" ")) {
      let tempString = '';
      // goes over name until index of the unwanted element
      for (let index = 0; index < name.indexOf(" "); ++index) {
        // adds characters to temperoray string
        tempString += name[index];
      }
      setLink(tempString)
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
      <Link to={link}>
        <img alt='red cocktail' src={require(`../images/top-view-${num+1}.png`)}></img>
        <h3>{name}</h3>
        <h4>{len + " results"}</h4>
      </Link>
    </li>
  )
}

export default Categories