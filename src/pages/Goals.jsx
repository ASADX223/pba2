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
  LinearProgress,
} from '@mui/material';
import { Add, Target } from '@mui/icons-material';

function Goals() {
  // Mock goals data
  const activeGoals = [
    {
      id: 1,
      title: 'Bench Press 200 lbs',
      category: 'Strength',
      current: 185,
      target: 200,
      unit: 'lbs',
      deadline: '2025-02-15',
    },
    {
      id: 2,
      title: 'Lose 10 lbs',
      category: 'Weight Loss',
      current: 180,
      target: 170,
      unit: 'lbs',
      deadline: '2025-03-01',
    },
    {
      id: 3,
      title: 'Run 5k Under 25 min',
      category: 'Cardio',
      current: 28,
      target: 25,
      unit: 'minutes',
      deadline: '2025-02-28',
    },
  ];

  const completedGoals = [
    {
      id: 4,
      title: 'Squat 225 lbs',
      category: 'Strength',
      completedDate: '2025-01-10',
    },
    {
      id: 5,
      title: '30-Day Workout Streak',
      category: 'Consistency',
      completedDate: '2025-01-05',
    },
  ];

  const getProgressPercentage = (current, target, category) => {
    if (category === 'Weight Loss') {
      return ((target - current) / (target - target + 10)) * 100; // Assuming starting weight was target + 10
    }
    if (category === 'Cardio') {
      return ((target - current) / (target - 30)) * 100; // Assuming starting time was 30 minutes
    }
    return (current / target) * 100;
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
          Goals
        </Typography>
        <Button variant="contained" startIcon={<Add />}>
          Set New Goal
        </Button>
      </Box>

      {/* Active Goals */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Active Goals
        </Typography>
        <Grid container spacing={3}>
          {activeGoals.map((goal) => (
            <Grid item xs={12} md={6} lg={4} key={goal.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Target sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6" component="div">
                      {goal.title}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {goal.category} • Due: {goal.deadline}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">
                        Progress
                      </Typography>
                      <Typography variant="body2">
                        {goal.current} / {goal.target} {goal.unit}
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={Math.min(getProgressPercentage(goal.current, goal.target, goal.category), 100)}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                      }}
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary" align="center">
                    {Math.round(getProgressPercentage(goal.current, goal.target, goal.category))}% Complete
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Completed Goals */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Completed Goals
        </Typography>
        <Grid container spacing={2}>
          {completedGoals.map((goal) => (
            <Grid item xs={12} sm={6} md={4} key={goal.id}>
              <Card variant="outlined" sx={{ backgroundColor: 'success.light' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: 'success.dark' }}>
                    ✓ {goal.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {goal.category} • Completed: {goal.completedDate}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default Goals;