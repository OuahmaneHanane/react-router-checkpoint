import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';
import moviesData from './data/movies';

function App() {
  // State to hold the list of movies
  const [movies, setMovies] = useState(moviesData);

  // State to filter movies by title (search text)
  const [titleFilter, setTitleFilter] = useState('');

  // State to filter movies by minimum rating
  const [rateFilter, setRateFilter] = useState(0);

  // Function to add a new movie to the list
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  // Filter movies based on title and rating filters
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <Router>
      <div className="App">
        <h1>🎬 Movie App</h1>
        <Routes>
          {/* Home route: shows filter, add movie form, and movie list */}
          <Route
            path="/"
            element={
              <>
                <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
                <AddMovie onAdd={handleAddMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          {/* Route for movie details page */}
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;