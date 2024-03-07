import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TV from "./pages/TV";
import Signup from "./pages/SignUp";
import Login from "./pages/LogIn";
import Details from "./components/Details";
import Movie from './pages/Movie'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/movie' element={<Movie />} />
            <Route path='/tv' element={<TV />} />
            <Route path='/details/:field/:id' element={<Details />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
