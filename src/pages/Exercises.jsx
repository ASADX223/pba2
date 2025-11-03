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
        <Typography variant="body1" paragraph>
          Browse our comprehensive exercise database with detailed instructions, muscle group targeting, and equipment requirements.
        </Typography>

        {/* Search and Filters */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Search exercises..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                label="Category"
              >
                <MenuItem value="">All</MenuItem>
                {exerciseCategories.map(category => (
                  <MenuItem key={category.value} value={category.value}>
                    {category.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Equipment</InputLabel>
              <Select
                value={equipmentFilter}
                onChange={(e) => setEquipmentFilter(e.target.value)}
                label="Equipment"
              >
                <MenuItem value="">All</MenuItem>
                {equipmentTypes.map(equipment => (
                  <MenuItem key={equipment.value} value={equipment.value}>
                    {equipment.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Difficulty</InputLabel>
              <Select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                label="Difficulty"
              >
                <MenuItem value="">All</MenuItem>
                {difficultyLevels.map(difficulty => (
                  <MenuItem key={difficulty.value} value={difficulty.value}>
                    {difficulty.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="outlined"
                onClick={clearFilters}
                sx={{ flexGrow: 1 }}
              >
                Clear
              </Button>
              <Chip
                label={`${filteredExercises.length} exercises`}
                color="primary"
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        {filteredExercises.map((exercise) => (
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
                  position: 'relative',
                }}
              >
                <FitnessCenter sx={{ fontSize: 48, color: 'white' }} />
                <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                  <Chip
                    label={favorites.includes(exercise.id) ? '❤️' : '🤍'}
                    onClick={() => toggleFavorite(exercise.id)}
                    sx={{ cursor: 'pointer', fontSize: '16px' }}
                  />
                </Box>
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {exercise.name}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  <Chip
                    label={exercise.category}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    label={exercise.equipment}
                    size="small"
                    color="secondary"
                    variant="outlined"
                  />
                  <Chip
                    label={exercise.difficulty}
                    size="small"
                    color={
                      exercise.difficulty === 'beginner' ? 'success' :
                      exercise.difficulty === 'intermediate' ? 'warning' : 'error'
                    }
                    variant="outlined"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  <strong>Muscle Groups:</strong> {exercise.muscleGroups.join(', ')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Rest Time:</strong> {exercise.defaultRestTime}s
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {exercise.instructions.substring(0, 100)}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredExercises.length === 0 && (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No exercises found matching your criteria.
          </Typography>
          <Button variant="outlined" onClick={clearFilters} sx={{ mt: 2 }}>
            Clear Filters
          </Button>
        </Paper>
      )}
    </Container>
  );
}

export default Exercises;