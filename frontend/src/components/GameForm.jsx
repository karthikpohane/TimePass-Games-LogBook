// src/components/GameForm.jsx

import { useState, useEffect } from 'react';
import axios from '../api/axios';

const GameForm = ({ fetchGames, selectedGame, setSelectedGame }) => {
  // State to hold form data, initialized with empty values
  const [form, setForm] = useState({
    name: '',
    url: '',
    author: '',
    publishedDate: '',
  });

  // Effect hook to pre-fill the form if a game is selected for editing
  useEffect(() => {
    if (selectedGame) setForm(selectedGame); // Pre-fill form fields with the selected game data
  }, [selectedGame]);

  // Handle input changes and update form state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission for both creating and updating games
  const handleSubmit = async (e) => {
    e.preventDefault();

    // If a game is selected, we update it, otherwise we create a new game
    if (selectedGame) {
      await axios.put(`/games/${selectedGame._id}`, form); // Update existing game
    } else {
      await axios.post('/games', form); // Create new game
    }

    // Reset the form after submission
    setForm({ name: '', url: '', author: '', publishedDate: '' });
    setSelectedGame(null); // Deselect the selected game
    fetchGames(); // Refresh the games list
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for game details */}
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Game Name"
        required
      />
      <input
        name="url"
        value={form.url}
        onChange={handleChange}
        placeholder="Game URL"
        required
      />
      <input
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <input
        type="date"
        name="publishedDate"
        value={form.publishedDate}
        onChange={handleChange}
        required
      />
      {/* Submit button with dynamic text based on whether a game is being edited or added */}
      <button type="submit">{selectedGame ? 'Update' : 'Add'} Game</button>
    </form>
  );
};

export default GameForm;
