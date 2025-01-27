import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SearchBar from './components/SearchBar';
import SortFilter from './components/SortFilter';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Boss');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [sortedMovies, setSortedMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const navigate = useNavigate();

  const fetchMovies = async (searchTerm) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=c8ff7400&s=${searchTerm}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
        setGenres([...new Set(data.Search.map(movie => movie.Genre.split(',')[0]))]);
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) fetchMovies(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    setSortedMovies(movies);
  }, [movies]);

  const sortMovies = (type) => {
    const sorted = [...movies].sort((a, b) => {
      if (type === 'asc') return a.Year - b.Year;
      if (type === 'desc') return b.Year - a.Year;
      return 0;
    });
    setSortedMovies(sorted);
  };

  const filterMovies = (genre) => {
    setGenreFilter(genre);
    if (genre === 'All') {
      setSortedMovies(movies);
    } else {
      const filtered = movies.filter(movie => movie.Genre.includes(genre));
      setSortedMovies(filtered);
    }
  };

  return (
      <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortFilter genres={genres} sortMovies={sortMovies} filterMovies={filterMovies} />
        
        <Routes>
          <Route path="/" element={<MovieList movies={sortedMovies} loading={loading} error={error} />} />
          <Route path="movie/:imdbID" element={<MovieDetails />} />
        </Routes>
      </div>
  );
};

export default App;
