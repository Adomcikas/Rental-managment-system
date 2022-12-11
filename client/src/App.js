import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import Posts from './Routes/Posts';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Post from './Page/Post';
import Comments from './Routes/Comments';
import Comment from './Page/Comment';
import Reviews from './Routes/Reviews';
import Review from './Page/Review';


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
                <Route path="/api/posts/:id" element={<Post />} />
                <Route path="/api/posts/:id1/api/comments" element={<Comments />} />
                <Route path="/api/posts/:id1/api/comments/:id2" element={<Comment />} />
                <Route path="/api/posts/:id1/api/comments/:id2/api/reviews/" element={<Reviews />} />
                <Route path="/api/posts/:id1/api/comments/:id2/api/reviews/:id3" element={<Review />} /> 
              </Routes>
          </header>
        </div>
      </Router>
  );
}

export default App;
