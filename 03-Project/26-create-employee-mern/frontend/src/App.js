import './App.css';
import AddEmployee from './pages/AddEmployee';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addemployee' element={<AddEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
