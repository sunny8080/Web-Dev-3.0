import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Labs from './components/Labs';
import MainHeader from './components/MainHeader';
import NotFound from './components/NotFound';
import Support from './components/Support';


function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
          <li><NavLink to="/footer">Footer</NavLink></li>
          <li><NavLink to="*">No Found</NavLink></li>
        </ul>
      </nav>

      <Routes>
        {/* nesting route */}
        <Route path='/' element={<MainHeader />} >
          {/* index denotes default path */}
          <Route index element={<Home />} />

          <Route path='/support' element={<Support />} />
          <Route path='/about' element={<About />} />
          <Route path='/labs' element={<Labs />} />

          {/* when no path matches */}
          <Route path='*' element={<NotFound />} />
        </Route>

        <Route path='/footer' element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
