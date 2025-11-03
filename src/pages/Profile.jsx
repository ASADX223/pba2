import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import { Person, Edit } from '@mui/icons-material';

function Profile() {
  // Mock user data
  const [userData, setUserData] = React.useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 28,
    gender: 'male',
    height: '5\'10"',
    weight: 180,
    activityLevel: 'moderate',
    primaryGoal: 'muscle_gain',
  });

  const goals = [
    { value: 'muscle_gain', label: 'Muscle Gain' },
    { value: 'fat_loss', label: 'Fat Loss' },
    { value: 'strength', label: 'Strength' },
    { value: 'maintenance', label: 'Maintenance' },
  ];

  const activityLevels = [
    { value: 'sedentary', label: 'Sedentary' },
    { value: 'light', label: 'Lightly Active' },
    { value: 'moderate', label: 'Moderately Active' },
    { value: 'very_active', label: 'Very Active' },
    { value: 'extra_active', label: 'Extra Active' },
  ];

  const handleInputChange = (field) => (event) => {
    setUserData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Profile
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Overview */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}>
                <Person sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" gutterBottom>
                {userData.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {userData.email}
              </Typography>
              <Button variant="outlined" startIcon={<Edit />} fullWidth>
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Stats
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Age</Typography>
                  <Typography variant="body2">{userData.age} years</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Height</Typography>
                  <Typography variant="body2">{userData.height}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Weight</Typography>
                  <Typography variant="body2">{userData.weight} lbs</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Activity Level</Typography>
                  <Typography variant="body2">
                    {activityLevels.find(level => level.value === userData.activityLevel)?.label}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Profile Settings */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Personal Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  value={userData.name}
                  onChange={handleInputChange('name')}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  value={userData.email}
                  onChange={handleInputChange('email')}
                  margin="normal"
                  type="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Age"
                  value={userData.age}
                  onChange={handleInputChange('age')}
                  margin="normal"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Gender"
                  value={userData.gender}
                  onChange={handleInputChange('gender')}
                  margin="normal"
                  select
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Height"
                  value={userData.height}
                  onChange={handleInputChange('height')}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Weight (lbs)"
                  value={userData.weight}
                  onChange={handleInputChange('weight')}
                  margin="normal"
                  type="number"
                />
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
              Fitness Preferences
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Activity Level"
                  value={userData.activityLevel}
                  onChange={handleInputChange('activityLevel')}
                  margin="normal"
                  select
                >
                  {activityLevels.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Primary Goal"
                  value={userData.primaryGoal}
                  onChange={handleInputChange('primaryGoal')}
                  margin="normal"
                  select
                >
                  {goals.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button variant="contained" color="primary">
                Save Changes
              </Button>
              <Button variant="outlined" color="secondary">
                Cancel
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;