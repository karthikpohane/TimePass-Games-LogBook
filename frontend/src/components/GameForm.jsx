//This component is used to add or update a game in the database. It takes in the selectedGame prop to determine, 
// if it should be in add or update mode. It also takes in fetchGames to refresh the game list after adding or updating a game.
import { useState, useEffect } from "react";
import axios from "../api/axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const GameForm = ({ fetchGames, selectedGame, setSelectedGame }) => {
  const [form, setForm] = useState({
    name: "",
    url: "",
    author: "",
    publishedDate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // <-- New State

  useEffect(() => {
    if (selectedGame) setForm(selectedGame);
  }, [selectedGame]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // freeze form

    try {
      if (selectedGame) {
        await axios.put(`/games/${selectedGame._id}`, form);
      } else {
        await axios.post("/games", form);
      }
      handleReset();
      fetchGames();
    } catch (error) {
      console.error("Error saving game:", error);
    } finally {
      setIsSubmitting(false); // unfreeze form
    }
  };

  const handleReset = () => {
    setForm({ name: "", url: "", author: "", publishedDate: "" });
    setSelectedGame(null);
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
          {selectedGame ? "Update Game" : "Add New Game"}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1.5}
          mt={2}
        >
          <TextField
            label="Game Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
            disabled={isSubmitting}
            variant="outlined"
            sx={{
              fontSize: "16px",
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
            }}
          />

          <TextField
            label="Game URL"
            name="url"
            value={form.url}
            onChange={handleChange}
            fullWidth
            required
            disabled={isSubmitting}
            variant="outlined"
            sx={{
              fontSize: "16px",
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
            }}
          />

          <TextField
            label="Author"
            name="author"
            value={form.author}
            onChange={handleChange}
            fullWidth
            required
            disabled={isSubmitting}
            variant="outlined"
            sx={{
              fontSize: "16px",
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
            }}
          />

          <TextField
            label="Published Date"
            type="date"
            name="publishedDate"
            value={form.publishedDate}
            onChange={handleChange}
            fullWidth
            required
            disabled={isSubmitting}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              fontSize: "16px",
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
            }}
          />

          <Box display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
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
            >
              {isSubmitting
                ? selectedGame
                  ? "Updating..."
                  : "Adding..."
                : selectedGame
                ? "Update"
                : "Add"}{" "}
              Game
            </Button>

            <Button
              variant="outlined"
              onClick={handleReset}
              disabled={isSubmitting}
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
      </CardContent>
    </Card>
  );
};

export default GameForm;


