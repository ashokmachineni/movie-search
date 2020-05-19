import React, { useState } from "react";
import "./search.css";
import MovieCard from "./MovieCard";

function SearchMovies() {
  //states -input query,movies
  const [query, setQuery] = useState("");
  //create state for movies and update that state appropriate
  const [movies, setMovies] = useState([]);
  const searchMovies = async e => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          className="input"
          placeholder="i.e.Jurassic"
          name="query"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter(movie => movie.poster_path)
          .map(movie => (
            <MovieCard movie={movie} />
          ))}
      </div>
    </>
  );
}

export default SearchMovies;
