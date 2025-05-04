//This component allows users to search for games by name and displays the results in a list format. 
// It also includes error handling and loading states.
import { useState } from "react";
import axios from "../api/axios";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  Alert,
  List,
  ListItem,
  Link,
  CircularProgress,
} from "@mui/material";

const GameSearch = ({ setGames }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundGames, setFoundGames] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setSearchError(""); 

    try {
      const res = await axios.get(`/games/search?name=${searchTerm}`);

      if (res.data.length > 0) {
        setFoundGames(res.data);
      } else {
        setFoundGames([]);
        setSearchError("Game not found");
      }
    } catch (error) {
      setFoundGames([]);
      setSearchError("Error searching for games");
      console.error("Error searching for game:", error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    setFoundGames([]);
    setSearchError("");
  };

  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: "center", fontSize: "18px" }}
        >
          🕹️ Find Your Game
        </Typography>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1.5}
          mt={2}
        >
          <TextField
            label="Search game by name"
            variant="outlined"
            value={searchTerm}
            required
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            disabled={isLoading}
            placeholder="Enter game name"
            sx={{
              fontSize: "16px",
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
            }}
          />

          <Box display="flex" justifyContent="center" gap={1.5}>
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                backgroundColor: "#4CAF50",
                color: "#fff",
                borderRadius: "5px",
                padding: "6px 16px",
                fontSize: "14px",
                minWidth: "100px",
                "&:hover": {
                  backgroundColor: "#45a049",
                },
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Search"
              )}
            </Button>

            <Button
              variant="outlined"
              onClick={handleResetSearch}
              disabled={isLoading}
              sx={{
                borderColor: "#4CAF50",
                color: "#4CAF50",
                borderRadius: "5px",
                padding: "6px 16px",
                fontSize: "14px",
                minWidth: "100px",
                "&:hover": {
                  borderColor: "#45a049",
                  color: "#45a049",
                },
              }}
            >
              Reset
            </Button>
          </Box>
        </Box>

        {searchError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {searchError}
          </Alert>
        )}

        {foundGames.length > 0 && (
          <Box
            sx={{
              mt: 3,
              p: 2,
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              backgroundColor: "#fafafa",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Games Found ({foundGames.length})
            </Typography>

            <List>
              {foundGames.map((game) => (
                <ListItem key={game._id} divider>
                  <Box width="100%">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="subtitle1" fontWeight="bold">
                        {game.name}
                      </Typography>
                      <Link
                        href={game.url}
                        target="_blank"
                        rel="noreferrer"
                        underline="hover"
                        sx={{ fontSize: "14px", ml: 2 }}
                      >
                        Visit
                      </Link>
                    </Box>

                    <Typography variant="body2" color="text.secondary" mt={0.5}>
                      by {game.author} (ID: <strong>{game._id}</strong>)
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default GameSearch;
