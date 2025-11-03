import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { TrendingUp, Timeline, FitnessCenter } from '@mui/icons-material';

function Progress() {
  // Mock progress data
  const progressStats = [
    {
      title: 'Total Workouts',
      value: '47',
      subtitle: 'Last 30 days',
      icon: <FitnessCenter />,
      color: 'primary',
    },
    {
      title: 'Personal Records',
      value: '12',
      subtitle: 'This month',
      icon: <TrendingUp />,
      color: 'success',
    },
    {
      title: 'Avg Workout Duration',
      value: '52 min',
      subtitle: 'This week',
      icon: <Timeline />,
      color: 'info',
    },
  ];

  const strengthProgress = [
    { exercise: 'Bench Press', current: 185, previous: 175, unit: 'lbs' },
    { exercise: 'Squat', current: 225, previous: 215, unit: 'lbs' },
    { exercise: 'Deadlift', current: 275, previous: 265, unit: 'lbs' },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Progress Tracking
      </Typography>

      {/* Progress Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {progressStats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ color: `${stat.color}.main`, mb: 1 }}>
                  {React.cloneElement(stat.icon, { sx: { fontSize: 40 } })}
                </Box>
                <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                  {stat.value}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Strength Progress */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Strength Progress
        </Typography>
        <Grid container spacing={2}>
          {strengthProgress.map((exercise, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {exercise.exercise}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Previous
                      </Typography>
                      <Typography variant="h6">
                        {exercise.previous} {exercise.unit}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="body2" color="text.secondary">
                        Current
                      </Typography>
                      <Typography variant="h6" color="success.main">
                        {exercise.current} {exercise.unit}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 1, textAlign: 'center' }}>
                    <Typography variant="body2" color="success.main">
                      +{exercise.current - exercise.previous} {exercise.unit}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Charts Placeholder */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Performance Charts
        </Typography>
        <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body1" color="text.secondary">
            Interactive charts coming soon - Volume tracking, body measurements, and performance trends
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Progress;