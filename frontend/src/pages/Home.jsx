// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import GameForm from '../components/GameForm';
import GameList from '../components/GameList';

const Home = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  const fetchGames = async () => {
    const res = await axios.get('/games');
    setGames(res.data);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div>
      <h1>Game CRUD App</h1>
      <GameForm fetchGames={fetchGames} selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
      <GameList games={games} fetchGames={fetchGames} setSelectedGame={setSelectedGame} />
    </div>
  );
};

export default Home;
