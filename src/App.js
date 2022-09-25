import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cocktails from './pages/Cocktails';
import Cocktail from './pages/Cocktail';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cocktails' element={<Cocktails />} />
          <Route path='/cocktail/:id' element={<Cocktail />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
