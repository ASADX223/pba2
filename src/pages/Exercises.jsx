import React, { useState } from 'react';
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
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { FitnessCenter, Search } from '@mui/icons-material';
import { exercises, exerciseCategories, equipmentTypes, difficultyLevels } from '../data/exercises.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

function Exercises() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [equipmentFilter, setEquipmentFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [favorites, setFavorites] = useLocalStorage('fittrack_exercise_favorites', []);

  // Filter exercises based on search and filters
  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.instructions.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || exercise.category === categoryFilter;
    const matchesEquipment = !equipmentFilter || exercise.equipment === equipmentFilter;
    const matchesDifficulty = !difficultyFilter || exercise.difficulty === difficultyFilter;

    return matchesSearch && matchesCategory && matchesEquipment && matchesDifficulty;
  });

  const toggleFavorite = (exerciseId) => {
    const newFavorites = favorites.includes(exerciseId)
      ? favorites.filter(id => id !== exerciseId)
      : [...favorites, exerciseId];
    setFavorites(newFavorites);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setCategoryFilter('');
    setEquipmentFilter('');
    setDifficultyFilter('');
  };

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