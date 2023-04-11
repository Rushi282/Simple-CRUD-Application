import { Routes,Route } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/read" element={<Read/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
