import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
} from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

function Workout() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Workout Tracker
      </Typography>

      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Ready to Start Your Workout?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
          Track your exercises, sets, reps, and rest periods in real-time.
        </Typography>

        <Button
          variant="contained"
          size="large"
          startIcon={<PlayArrow />}
          sx={{ py: 2, px: 4 }}
        >
          Start Workout
        </Button>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Features Coming Soon:
          </Typography>
          <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
            <li>Exercise selection from library</li>
            <li>Real-time set and rep tracking</li>
            <li>Automatic rest timer</li>
            <li>Dynamic weight suggestions</li>
            <li>Workout summary and analytics</li>
          </ul>
        </Box>
      </Paper>
    </Container>
  );
}

export default Workout;