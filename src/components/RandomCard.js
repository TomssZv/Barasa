import React from 'react'
import { Link } from 'react-router-dom'

function RandomCard({ name, category, count, id }) {
  return (
    <Link className='cardLink' to={`/cocktail/${id}`}>
        <div className="randomCard">
            <div className='cardTop'>
                <h1 className='cardTitle'>{name}</h1>
                <img className='cardImg' alt='' src={require(`../images/top-view-${11-count}.png`)} />
            </div>
            <p>{category}</p>
            <div className='tiers cardSecond'></div>
            <div className='tiers cardThird'></div>
        </div>
    </Link>
    
  )
}

export default RandomCard