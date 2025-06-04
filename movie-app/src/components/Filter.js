import React from 'react';

// This component provides inputs to filter movies by title and rating
const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div className="filter">
      {/* Input to filter movies by title */}
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      {/* Input to filter movies by minimum rating */}
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => setRateFilter(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;