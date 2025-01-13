import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { ref, onValue, set, remove } from "firebase/database";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesRef = ref(db, 'movies/');
    onValue(moviesRef, (snapshot) => {
      const data = snapshot.val();
      const movieList = data ? Object.entries(data).map(([id, movie]) => ({ id, ...movie })) : [];
      setMovies(movieList);
    });
  }, []);

  const addMovie = (movie) => {
    const newMovieRef = ref(db, 'movies/' + Date.now());
    set(newMovieRef, movie);
  };

  const deleteMovie = (id) => {
    const movieRef = ref(db, 'movies/' + id);
    remove(movieRef);
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);