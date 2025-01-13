// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <nav>
          <Link to="/">Add Movie</Link>
          <Link to="/movies">View Movies</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AddMovie />} />
          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
};

export default App;