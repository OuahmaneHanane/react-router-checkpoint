import React, { useState } from 'react';

// This component allows the user to add a new movie
const AddMovie = ({ onAdd }) => {
  // Local state to store new movie input values
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
    trailer: '',
  });

  const [error, setError] = useState('');

  // Update state when input changes
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (
      !newMovie.title.trim() ||
      !newMovie.description.trim() ||
      !newMovie.posterURL.trim() ||
      !newMovie.trailer.trim() ||
      newMovie.rating < 1 ||
      newMovie.rating > 5
    ) {
      setError('Please fill in all fields correctly. Rating must be between 1 and 5.');
      return;
    }

    // Clear error and submit the movie
    setError('');
    onAdd({ ...newMovie, rating: Number(newMovie.rating) });
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
      trailer: '',
    });
  };

  return (
    // Movie submission form
    <form onSubmit={handleSubmit}className="add-movie-form">
       {/* Movie title input */}
      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={newMovie.title}
      />
      {/* Movie description input */}
      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={newMovie.description}
      />
       {/* Poster image URL input */}
      <input
        name="posterURL"
        placeholder="Poster URL"
        onChange={handleChange}
        value={newMovie.posterURL}
      />
       {/* Trailer embed YouTube URL input */}
      <input
        name="trailer"
        placeholder="Trailer Embed URL"
        onChange={handleChange}
        value={newMovie.trailer}
      />
      {/* Rating input (from 1 to 5) */}
      <input
        name="rating"
        type="number"
        placeholder="Rating (1–5)"
        onChange={handleChange}
        value={newMovie.rating}
        min="1"
        max="5"
      />
      <button type="submit">Add Movie</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AddMovie;
