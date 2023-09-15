
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
