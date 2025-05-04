// This component is a confirmation dialog that appears when the user tries to delete an item.
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Box,
    Typography,
  } from '@mui/material';
  
  const ConfirmDialog = ({ open, title, message, onClose, onConfirm }) => {
    return (
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            {title}
          </Typography>
        </DialogTitle>
  
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1" sx={{ textAlign: 'center', mb: 1 }}>
              {message}
            </Typography>
          </DialogContentText>
        </DialogContent>
  
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Box display="flex" gap={2}>
            {/* Cancel Button */}
            <Button
              onClick={onClose}
              sx={{
                color: '#4CAF50',
                backgroundColor: '#e8f5e9',
                borderRadius: '8px',
                px: 3,
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#c8e6c9',
                },
              }}
            >
              Cancel
            </Button>
  
            {/* Delete Button */}
            <Button
              onClick={onConfirm}
              sx={{
                color: '#f44336',
                backgroundColor: '#ffebee',
                borderRadius: '8px',
                px: 3,
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#ffcdd2',
                },
              }}
            >
              Delete
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConfirmDialog;
  