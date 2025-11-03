import React from 'react';
import {
  Box,
  Typography,
  Link,
  Container,
  Grid,
  IconButton,
} from '@mui/material';
import {
  GitHub,
  Twitter,
  Instagram,
  FitnessCenter,
} from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FitnessCenter sx={{ mr: 1 }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                FitTrack Pro
              </Typography>
            </Box>
            <Typography variant="body2">
              Your intelligent gym tracking companion for optimized workouts and recovery.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Features
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                Workout Tracking
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Progress Analytics
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Nutrition Planning
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Goal Setting
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                Exercise Library
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Workout Plans
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Nutrition Guide
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Community
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <IconButton
                color="inherit"
                href="#"
                aria-label="GitHub"
                size="small"
              >
                <GitHub />
              </IconButton>
              <IconButton
                color="inherit"
                href="#"
                aria-label="Twitter"
                size="small"
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                href="#"
                aria-label="Instagram"
                size="small"
              >
                <Instagram />
              </IconButton>
            </Box>
            <Typography variant="body2">
              Follow us for fitness tips and updates
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} FitTrack Pro. Built with React & Material-UI.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;