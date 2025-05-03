// src/components/GameSearch.jsx

import { useState } from 'react';
import axios from '../api/axios';

const GameSearch = ({ setGames }) => {
  // State to store the search term entered by the user
  const [searchTerm, setSearchTerm] = useState('');

  // Handle the search when the user clicks the search button
  const handleSearch = async () => {
    try {
      // Make a GET request to search for games by name
      const res = await axios.get(`/games/search?name=${searchTerm}`);
      
      // Set the fetched games to state (to be displayed in the parent component)
      setGames(res.data);
    } catch (error) {
      console.error("Error searching for game:", error); // Log error if search fails
    }
  };

  return (
    <div>
      {/* Input for searching games by name */}
      <input
        type="text"
        placeholder="Search game by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update the search term on change
      />
      {/* Search button triggers the handleSearch function */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default GameSearch;
