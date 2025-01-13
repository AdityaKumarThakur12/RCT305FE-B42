import React, { useState } from "react";
import { useMovies } from "../contexts/MovieContext";

const AddMovie = () => {
  const { addMovie } = useMovies();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, releaseYear });
    setTitle("");
    setDescription("");
    setReleaseYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Release Year"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;