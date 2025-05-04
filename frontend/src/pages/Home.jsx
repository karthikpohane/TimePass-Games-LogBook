//This is the main page of the application where users can view, search, and add games.
import { useState, useEffect } from "react";
import axios from "../api/axios";
import GameForm from "../components/GameForm";
import GameList from "../components/GameList";
import GameSearch from "../components/GameSearch";
import { Box } from "@mui/material";

const Home = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

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
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflowY: "auto",
        paddingBottom: 6,
        backgroundImage: "url('/bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.6)", // Dark overlay
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Title at the top */}
        <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
          <img
            src="/timepass-games-logo.png"
            alt="TimePass Games Logo"
            style={{ height: 100, width: 100 }}
          />
        </Box>

        {/* Game Search */}
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
        <Box
          component="footer"
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "#4CAF50",
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
            style={{ color: "#000", textDecoration: "none" }}
          >
            kartikpohane0612@gmail.com 🎮
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
