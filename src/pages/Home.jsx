import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Paper,
  Chip,
} from '@mui/material';
import {
  FitnessCenter,
  TrendingUp,
  Restaurant,
  Timeline,
  PlayArrow,
  Add,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Home() {
  // Mock data - will be replaced with real data from localStorage
  const stats = {
    weeklyWorkouts: 4,
    totalVolume: 15420,
    currentStreak: 7,
    caloriesBurned: 2840,
  };

  const recentWorkouts = [
    { name: 'Upper Body Push', date: '2025-01-14', duration: 45 },
    { name: 'Lower Body', date: '2025-01-13', duration: 50 },
    { name: 'Cardio + Core', date: '2025-01-12', duration: 30 },
  ];

  const todayGoals = [
    { name: 'Complete workout', completed: true },
    { name: 'Log meals', completed: false },
    { name: 'Drink 8 glasses of water', completed: false },
  ];

  return (
    <Container maxWidth="lg">
      {/* Welcome Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome Back, Athlete!
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          You're on a {stats.currentStreak}-day streak! Keep up the great work.
        </Typography>
      </Box>

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: 'center', py: 2 }}>
            <CardContent>
              <FitnessCenter sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                {stats.weeklyWorkouts}
              </Typography>
              <Typography color="text.secondary">
                Weekly Workouts
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: 'center', py: 2 }}>
            <CardContent>
              <TrendingUp sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
              <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                {stats.totalVolume.toLocaleString()}
              </Typography>
              <Typography color="text.secondary">
                Total Volume (lbs)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: 'center', py: 2 }}>
            <CardContent>
              <Timeline sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
              <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                {stats.currentStreak}
              </Typography>
              <Typography color="text.secondary">
                Day Streak
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: 'center', py: 2 }}>
            <CardContent>
              <Restaurant sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
              <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                {stats.caloriesBurned.toLocaleString()}
              </Typography>
              <Typography color="text.secondary">
                Calories Burned
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Actions and Goals */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/workout"
                startIcon={<PlayArrow />}
                sx={{ py: 1.5 }}
              >
                Start Today's Workout
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/nutrition"
                startIcon={<Add />}
                sx={{ py: 1.5 }}
              >
                Log a Meal
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/exercises"
                sx={{ py: 1.5 }}
              >
                Browse Exercises
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Today's Goals
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {todayGoals.map((goal, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 1,
                    borderRadius: 1,
                    backgroundColor: goal.completed ? 'success.light' : 'grey.100',
                  }}
                >
                  <Typography variant="body1">{goal.name}</Typography>
                  <Chip
                    label={goal.completed ? 'Complete' : 'Pending'}
                    color={goal.completed ? 'success' : 'default'}
                    size="small"
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Workouts */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Recent Workouts
        </Typography>
        <Grid container spacing={2}>
          {recentWorkouts.map((workout, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {workout.name}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'text.secondary' }}>
                    <Typography variant="body2">{workout.date}</Typography>
                    <Typography variant="body2">{workout.duration} min</Typography>
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

export default Home;