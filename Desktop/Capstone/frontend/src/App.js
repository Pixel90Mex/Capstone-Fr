import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import UserArea from './pages/UserArea';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/UserArea' element={<UserArea/>}/>
      </Routes>
    </Router>
  );
}

export default App;
