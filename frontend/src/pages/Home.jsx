import { useState, useEffect } from "react";
import axios from "../api/axios";
import GameForm from "../components/GameForm";
import GameList from "../components/GameList";
import GameSearch from "../components/GameSearch";

import { Box } from "@mui/material";

const Home = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  // Fetch all games on initial load
  const fetchGames = async () => {
    try {
      const res = await axios.get("/games");
      setGames(res.data);
    } catch (err) {
      console.error("Error fetching games:", err);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", overflowY: "auto", paddingBottom: 6 }}>
      {/* Title at the top */}
      <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
        <img
          src="/timepass-games-logo.png" // Correct path from public folder
          alt="TimePass Games Logo"
          style={{ height: 100, width: 100}}
        />
        {/* <Typography variant="h4" gutterBottom>
          <h4>LogBook</h4>
        </Typography> */}
      </Box>

      {/* Game Search centered */}
      <Box sx={{ padding: 2, textAlign: "center" }}>
        <GameSearch setGames={setGames} />
      </Box>

      {/* Game List */}
      <Box sx={{ padding: 2 }}>
        <GameList
          games={games}
          fetchGames={fetchGames}
          setSelectedGame={setSelectedGame}
        />
      </Box>

      {/* Game Form */}
      <Box sx={{ padding: 2 }}>
        <GameForm
          fetchGames={fetchGames}
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
        />
      </Box>

      {/* Footer */}
      {/* Footer */}
      <Box
        component="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "#222",
          color: "#fff",
          py: 1.5,
          textAlign: "center",
          fontSize: "14px",
          zIndex: 1000,
        }}
      >
        © {new Date().getFullYear()} TimePass Games. All rights reserved. |{" "}
        <a
          href="mailto:kartikpohane0612@gmail.com"
          style={{ color: "#90caf9", textDecoration: "none" }}
        >
          kartikpohane0612@gmail.com
        </a>
      </Box>
    </Box>
  );
};

export default Home;
