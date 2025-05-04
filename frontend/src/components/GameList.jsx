import { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Card,
  CardContent,
  Box,
  Snackbar,
} from '@mui/material';
import { Edit, Delete, ErrorOutline } from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';
import axios from '../api/axios';
import ConfirmDialog from './ConfirmDialog';

const GameList = ({ games, fetchGames, setSelectedGame }) => {
  const [editMessage, setEditMessage] = useState('');
  const [openConfirm, setOpenConfirm] = useState(false);
  const [gameToDelete, setGameToDelete] = useState(null);

  const handleEditClick = (game) => {
    setSelectedGame(game);
    setEditMessage('Edit in Update section');
    setTimeout(() => setEditMessage(''), 3000);
  };

  const handleDeleteClick = (game) => {
    setGameToDelete(game);
    setOpenConfirm(true);
  };

  const confirmDelete = async () => {
    if (!gameToDelete) return;

    try {
      await axios.delete(`/games/${gameToDelete._id}`);
      fetchGames();
    } catch (error) {
      console.error('Error deleting the game:', error);
    } finally {
      setOpenConfirm(false);
      setGameToDelete(null);
    }
  };

  return (
    <>
      {/* Snackbar for Edit Message */}
      <Snackbar
        open={editMessage !== ''}
        onClose={() => setEditMessage('')}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={
          <Box display="flex" alignItems="center">
            <ErrorOutline sx={{ marginRight: 1, fontSize: 20 }} />
            {editMessage}
          </Box>
        }
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        open={openConfirm}
        title="Confirm Delete"
        message={`Are you sure you want to delete "${gameToDelete?.name}"?`}
        onClose={() => setOpenConfirm(false)}
        onConfirm={confirmDelete}
      />

      <Card
        sx={{
          maxWidth: 600,
          margin: 'auto',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: 'center', fontSize: '18px' }}
          >
            All Games
          </Typography>

          <List>
            {games.map((game) => (
              <ListItem
                key={game._id}
                divider
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '10px',
                  px: 2,
                  py: 1,
                }}
              >
                <ListItemText
                  primary={<strong>{game.name}</strong>}
                  secondary={`By ${game.author} | Game ID: ${game._id}`}
                  sx={{ fontSize: '16px' }}
                />

                <ListItemSecondaryAction>
                  <Box display="flex" alignItems="center">
                    {/* Visit Button */}
                    <IconButton
                      edge="end"
                      href={game.url}
                      target="_blank"
                      rel="noreferrer"
                      sx={{
                        color: '#4CAF50',
                        backgroundColor: '#e8f5e9',
                        borderRadius: '5px',
                        marginRight: 1,
                        padding: '6px',
                        '&:hover': {
                          backgroundColor: '#c8e6c9',
                        },
                      }}
                    >
                      <LanguageIcon fontSize="small" />
                    </IconButton>

                    {/* Edit Button */}
                    <IconButton
                      edge="end"
                      onClick={() => handleEditClick(game)}
                      sx={{
                        color: '#4CAF50',
                        backgroundColor: '#e8f5e9',
                        borderRadius: '5px',
                        marginRight: 1,
                        padding: '6px',
                        '&:hover': {
                          backgroundColor: '#c8e6c9',
                        },
                      }}
                    >
                      <Edit fontSize="small" />
                    </IconButton>

                    {/* Delete Button */}
                    <IconButton
                      edge="end"
                      onClick={() => handleDeleteClick(game)}
                      sx={{
                        color: '#f44336',
                        backgroundColor: '#ffebee',
                        borderRadius: '5px',
                        padding: '6px',
                        '&:hover': {
                          backgroundColor: '#ffcdd2',
                        },
                      }}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default GameList;
