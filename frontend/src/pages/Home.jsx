// src/pages/Home.jsx

import { useState, useEffect } from 'react';
import axios from '../api/axios';
import GameForm from '../components/GameForm';
import GameList from '../components/GameList';

const Home = () => {
  // ================================
  // State Variables
  // ================================
  const [games, setGames] = useState([]);                  // All games list
  const [selectedGame, setSelectedGame] = useState(null);  // Game selected for editing
  const [searchTerm, setSearchTerm] = useState('');        // Search input value
  const [foundGames, setFoundGames] = useState([]);        // Search results
  const [searchError, setSearchError] = useState('');      // Error message for search

  // ================================
  // Fetch all games from backend
  // ================================
  const fetchGames = async () => {
    try {
      const res = await axios.get('/games');
      setGames(res.data);
    } catch (err) {
      console.error('Error fetching games:', err);
    }
  };

  // ================================
  // Search game(s) by name
  // ================================
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      const res = await axios.get(`/games/search?name=${searchTerm}`);
      if (res.data.length > 0) {
        setFoundGames(res.data);
        setSearchError('');
      } else {
        setFoundGames([]);
        setSearchError('Game not found');
      }
    } catch (err) {
      setFoundGames([]);
      setSearchError('Error searching for games');
    }
  };

  // ================================
  // Reset search inputs and results
  // ================================
  const handleResetSearch = () => {
    setSearchTerm('');
    setFoundGames([]);
    setSearchError('');
  };

  // ================================
  // Fetch all games on initial render
  // ================================
  useEffect(() => {
    fetchGames();
  }, []);

  // ================================
  // Render Component
  // ================================
  return (
    <div>
      <h1>Game CRUD App</h1>

      {/* Search Input & Buttons */}
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleResetSearch}>Reset</button>
      </div>

      {/* Display Search Error */}
      {searchError && (
        <p style={{ color: 'red' }}>{searchError}</p>
      )}

      {/* Search Results */}
      {foundGames.length > 0 && (
        <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h3>Search Results ({foundGames.length} found):</h3>
          <ul>
            {foundGames.map((game) => (
              <li key={game._id}>
                <p>
                  <strong>{game.name}</strong> by {game.author} 
                  {' '}(<strong>ID: {game._id}</strong>)
                  {' '}– <a href={game.url} target="_blank" rel="noreferrer">Visit</a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Game Creation / Update Form */}
      <GameForm
        fetchGames={fetchGames}
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />

      {/* List of All Games */}
      <GameList
        games={games}
        fetchGames={fetchGames}
        setSelectedGame={setSelectedGame}
      />
    </div>
  );
};

export default Home;
