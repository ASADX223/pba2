import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  FitnessCenter,
  TrendingUp,
  Restaurant,
  Timeline,
  EmojiEvents,
  Person,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  { label: 'Home', path: '/', icon: <FitnessCenter /> },
  { label: 'Workout', path: '/workout', icon: <FitnessCenter /> },
  { label: 'Exercises', path: '/exercises', icon: <FitnessCenter /> },
  { label: 'Nutrition', path: '/nutrition', icon: <Restaurant /> },
  { label: 'Progress', path: '/progress', icon: <TrendingUp /> },
  { label: 'Goals', path: '/goals', icon: <EmojiEvents /> },
  { label: 'Profile', path: '/profile', icon: <Person /> },
];

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <AppBar position="sticky" elevation={2}>
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 700,
                }}
              >
                FitTrack Pro
              </Typography>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  flexGrow: 0,
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 700,
                  mr: 4,
                }}
              >
                FitTrack Pro
              </Typography>
              <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    color="inherit"
                    sx={{
                      backgroundColor: isActiveRoute(item.path) ? 'rgba(255,255,255,0.1)' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </>
          )}

          <IconButton
            color="inherit"
            onClick={handleProfileMenuOpen}
            aria-label="user menu"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleMobileMenuClose}
        >
          <List>
            {navigationItems.map((item) => (
              <ListItem
                key={item.path}
                component={Link}
                to={item.path}
                selected={isActiveRoute(item.path)}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main + '20',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main + '30',
                    },
                  },
                }}
              >
                <IconButton sx={{ mr: 2 }} color="inherit">
                  {item.icon}
                </IconButton>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem component={Link} to="/profile" onClick={handleProfileMenuClose}>
          Profile
        </MenuItem>
        <MenuItem component={Link} to="/settings" onClick={handleProfileMenuClose}>
          Settings
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default Header;