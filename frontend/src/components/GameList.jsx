// src/components/GameList.jsx
import axios from '../api/axios';

const GameList = ({ games, fetchGames, setSelectedGame }) => {
  const handleDelete = async (id) => {
    await axios.delete(`/games/${id}`);
    fetchGames();
  };

  return (
    <ul>
      {games.map((game) => (
        <li key={game._id}>
          <p><strong>{game.name}</strong> by {game.author}</p>
          <a href={game.url} target="_blank" rel="noreferrer">Visit</a>
          <button onClick={() => setSelectedGame(game)}>Edit</button>
          <button onClick={() => handleDelete(game._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default GameList;
