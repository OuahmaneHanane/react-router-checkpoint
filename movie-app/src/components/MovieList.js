import React from 'react';
import MovieCard from './MovieCard';

// This component receives a list of movies and renders a MovieCard for each one
const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {/* Loop through movies array and render MovieCard */}
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;