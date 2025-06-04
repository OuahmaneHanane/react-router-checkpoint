import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies'; 

// This component displays detailed information and trailer for a selected movie
const MovieDetails = () => {
  // useParams to get the dynamic movie ID from the URL
  const { id } = useParams();

  // useNavigate to programmatically go back to the home page
  const navigate = useNavigate();

  // Find the movie in the list using the ID from the URL
  const movie = movies.find((m) => m.id === parseInt(id));

  // If no movie is found, show a fallback message
  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="movie-details">
      {/* Display movie title */}
      <h2>{movie.title}</h2>
      {/* Display movie description */}
      <p>{movie.description}</p>
      {/* Embed movie trailer */}
      <div style={{ margin: '20px 0' }}>
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Button to navigate back to home page */}
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default MovieDetails;