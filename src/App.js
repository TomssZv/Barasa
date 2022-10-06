import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cocktail from './pages/Cocktail';
import Search from './pages/Search';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cocktail/:id' element={<Cocktail />}/>
          <Route path='/search/:type/:name' element={<Search />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
