import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from '@mui/material';
import { FitnessCenter } from '@mui/icons-material';

function Exercises() {
  // Mock exercise data
  const exercises = [
    {
      id: 1,
      name: 'Bench Press',
      category: 'Chest',
      equipment: 'Barbell',
      difficulty: 'Intermediate',
      muscleGroups: ['Chest', 'Triceps', 'Shoulders'],
    },
    {
      id: 2,
      name: 'Squats',
      category: 'Legs',
      equipment: 'Barbell',
      difficulty: 'Intermediate',
      muscleGroups: ['Quadriceps', 'Glutes', 'Hamstrings'],
    },
    {
      id: 3,
      name: 'Deadlifts',
      category: 'Back',
      equipment: 'Barbell',
      difficulty: 'Advanced',
      muscleGroups: ['Back', 'Glutes', 'Hamstrings'],
    },
    {
      id: 4,
      name: 'Pull-ups',
      category: 'Back',
      equipment: 'Bodyweight',
      difficulty: 'Intermediate',
      muscleGroups: ['Back', 'Biceps'],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Exercise Library
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="body1">
          Browse our comprehensive exercise database with detailed instructions, muscle group targeting, and equipment requirements.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {exercises.map((exercise) => (
          <Grid item xs={12} sm={6} md={4} key={exercise.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="div"
                sx={{
                  height: 140,
                  backgroundColor: 'primary.light',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FitnessCenter sx={{ fontSize: 48, color: 'white' }} />
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {exercise.name}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  <Chip label={exercise.category} size="small" color="primary" />
                  <Chip label={exercise.equipment} size="small" color="secondary" />
                  <Chip label={exercise.difficulty} size="small" />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  <strong>Muscle Groups:</strong> {exercise.muscleGroups.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Exercises;