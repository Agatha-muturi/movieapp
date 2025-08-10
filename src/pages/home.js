import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/card.js";
import SearchBar from "../components/searchbar.js";

function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
    const res = await axios.get(url);
    setMovies(res.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <SearchBar onSearch={fetchMovies} />
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;