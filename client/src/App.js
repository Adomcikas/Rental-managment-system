import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import Posts from './Routes/Posts';
import Login from './Routes/Login';
import Register from './Routes/Register';


function App() {
  return (
      <Router>
        <Nav />
        <div className="App">
          <header className="App-header">
              <Routes >
                <Route >
                  <Route path="/" element={<Home/>} />
                </Route>
                <Route path="/api/posts" element={<Posts />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register />} />
              </Routes>
          </header>
        </div>
      </Router>
  );
}

export default App;
