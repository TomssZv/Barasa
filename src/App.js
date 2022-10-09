import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cocktail from './pages/Cocktail';
import Search from './pages/Search';
import { useEffect, useState } from 'react';

function App() {
  const [bg, setBg] = useState(null)
  let location = useLocation();
  
  useEffect(() => {
    console.log(location)
    if (location.pathname.includes('cocktail') || location.pathname.includes('search')) {
      setBg('var(--main-bg-color)')
    } else {
      console.log(bg)
      setBg(null)
    }
    // var(--main-bg-color)
  }, [location])

  return (
    <div className="App" style={{backgroundColor: bg}}>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cocktail/:id' element={<Cocktail />}/>
          <Route path='/search/:type/:name' element={<Search />}/>
        </Routes>
    </div>
  );
}

export default App;
