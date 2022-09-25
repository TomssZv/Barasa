import React from 'react'

function RandomCard({ name, category, count }) {
  return (
    <div className="randomCard">
        <div className='cardTop'>
            <h1 className='cardTitle'>{name}</h1>
            <img className='cardImg' alt='' src={require(`../images/top-view-${11-count}.png`)} />
        </div>
        <p>{category}</p>
        <div className='tiers cardSecond'></div>
        <div className='tiers cardThird'></div>
    </div>
  )
}

export default RandomCard