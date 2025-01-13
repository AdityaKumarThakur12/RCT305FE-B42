import React from "react";
import { useMovies } from "../contexts/MovieContext";

const MovieList = () => {
  const { movies, editMovie, deleteMovie } = useMovies();

  const handleEdit = (id) => {
    const title = prompt("Enter new title:");
    const description = prompt("Enter new description:");
    const releaseYear = prompt("Enter new release year:");
    if (title && description && releaseYear) {
      editMovie(id, { title, description, releaseYear });
    }
  };

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>Release Year: {movie.releaseYear}</p>
            <button onClick={() => handleEdit(movie.id)}>Edit</button>
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;