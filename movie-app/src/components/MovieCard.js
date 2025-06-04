
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="movie-card">
        {/* Display movie poster */}
        <img src={movie.posterURL} alt={movie.title} />
        {/* Display movie title */}
        <h3>{movie.title}</h3>
        {/* Display movie rating */}
        <p>⭐ {movie.rating}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
