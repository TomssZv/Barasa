import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function Navbar() {
  
  return (
    <div id="navbar">
        <h1 id="logo"><Link to='/'>Barasa</Link></h1>
        <h2><Link to='/cocktails'>Cocktails</Link></h2>
    </div>
  )
}

export default Navbar