import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Gym Tracker - Responsive Learning Platform</p>
        <p>Built with React, JSX, and React Router</p>
      </div>
    </footer>
  );
}

export default Footer;