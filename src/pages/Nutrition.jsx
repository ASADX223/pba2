import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { Add, Restaurant } from '@mui/icons-material';

function Nutrition() {
  // Mock nutrition data
  const nutritionStats = {
    calories: {
      consumed: 1850,
      goal: 2500,
      remaining: 650,
    },
    macros: {
      protein: { consumed: 120, goal: 150 },
      carbs: { consumed: 180, goal: 250 },
      fats: { consumed: 65, goal: 83 },
    },
    water: {
      consumed: 64,
      goal: 128,
    },
  };

  const recentMeals = [
    { name: 'Oatmeal with Berries', calories: 320, time: '8:00 AM' },
    { name: 'Grilled Chicken Salad', calories: 450, time: '12:30 PM' },
    { name: 'Protein Shake', calories: 280, time: '3:00 PM' },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Nutrition Tracking
      </Typography>

      {/* Nutrition Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Daily Calories
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                {nutritionStats.calories.consumed} / {nutritionStats.calories.goal}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {nutritionStats.calories.remaining} calories remaining
              </Typography>
              <Box
                sx={{
                  mt: 1,
                  height: 8,
                  backgroundColor: 'grey.200',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: `${(nutritionStats.calories.consumed / nutritionStats.calories.goal) * 100}%`,
                    backgroundColor: 'primary.main',
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Water Intake
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                {nutritionStats.water.consumed} oz
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Goal: {nutritionStats.water.goal} oz
              </Typography>
              <Box
                sx={{
                  mt: 1,
                  height: 8,
                  backgroundColor: 'grey.200',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: `${(nutritionStats.water.consumed / nutritionStats.water.goal) * 100}%`,
                    backgroundColor: 'info.main',
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Macros Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Protein
              </Typography>
              <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                {nutritionStats.macros.protein.consumed}g
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Goal: {nutritionStats.macros.protein.goal}g
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Carbs
              </Typography>
              <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                {nutritionStats.macros.carbs.consumed}g
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Goal: {nutritionStats.macros.carbs.goal}g
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Fats
              </Typography>
              <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                {nutritionStats.macros.fats.consumed}g
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Goal: {nutritionStats.macros.fats.goal}g
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Meals */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Recent Meals
          </Typography>
          <Button variant="contained" startIcon={<Add />} size="small">
            Log Meal
          </Button>
        </Box>

        <Grid container spacing={2}>
          {recentMeals.map((meal, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {meal.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {meal.time}
                      </Typography>
                    </Box>
                    <Typography variant="h6" color="primary">
                      {meal.calories}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default Nutrition;