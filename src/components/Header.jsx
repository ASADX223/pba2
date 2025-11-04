import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Exercises', path: '/exercises' },
    { name: 'Nutrition', path: '/nutrition' },
    { name: 'Progress', path: '/progress' },
    ...(isAuthenticated ? [] : [
      { name: 'Login', path: '/login' },
      { name: 'Register', path: '/register' },
    ])
  ];

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Gym Tracker</h1>
        </Link>

        <nav>
          <ul className="nav-menu">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={isActiveRoute(item.path) ? 'active' : ''}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {isAuthenticated && (
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#e9ecef' }}>
                  Welcome, {user?.firstName}!
                </span>
                <button
                  onClick={logout}
                  style={{
                    background: 'none',
                    border: '1px solid #fff',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.875rem'
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;