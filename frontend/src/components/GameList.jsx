// src/components/GameList.jsx

import axios from '../api/axios';

const GameList = ({ games, fetchGames, setSelectedGame }) => {
  // Handle game deletion
  const handleDelete = async (id) => {
    try {
      // Send delete request to API
      await axios.delete(`/games/${id}`);
      fetchGames(); // Re-fetch the updated list of games after deletion
    } catch (error) {
      console.error("Error deleting the game:", error); // Log any errors during deletion
    }
  };

  return (
    <ul>
      {/* Iterate over the games array and display each game */}
      {games.map((game) => (
        <li key={game._id}>
          <p>
            <strong>{game.name}</strong> by {game.author}
          </p>
          <p><strong>Game ID:</strong> {game._id}</p> {/* Display the game ID */}
          <a href={game.url} target="_blank" rel="noreferrer">
            Visit
          </a>
          {/* Edit and Delete buttons */}
          <button onClick={() => setSelectedGame(game)}>Edit</button>
          <button onClick={() => handleDelete(game._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default GameList;
