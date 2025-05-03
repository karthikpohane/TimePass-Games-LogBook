// src/components/GameForm.jsx
import { useState, useEffect } from 'react';
import axios from '../api/axios';

const GameForm = ({ fetchGames, selectedGame, setSelectedGame }) => {
  const [form, setForm] = useState({
    name: '',
    url: '',
    author: '',
    publishedDate: '',
  });

  useEffect(() => {
    if (selectedGame) setForm(selectedGame);
  }, [selectedGame]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedGame) {
      await axios.put(`/games/${selectedGame._id}`, form);
    } else {
      await axios.post('/games', form);
    }
    setForm({ name: '', url: '', author: '', publishedDate: '' });
    setSelectedGame(null);
    fetchGames();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Game Name" required />
      <input name="url" value={form.url} onChange={handleChange} placeholder="Game URL" required />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Author" required />
      <input type="date" name="publishedDate" value={form.publishedDate} onChange={handleChange} required />
      <button type="submit">{selectedGame ? 'Update' : 'Add'} Game</button>
    </form>
  );
};

export default GameForm;
