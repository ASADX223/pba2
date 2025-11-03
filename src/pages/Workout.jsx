import React from 'react';

function Workout() {
  return (
    <div className="container">
      <h1>Workout Tracker</h1>

      <div className="card text-center">
        <h2>Ready to Start Your Workout?</h2>
        <p className="text-secondary mb-3">
          Track your exercises, sets, reps, and rest periods in real-time.
        </p>

        <button className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
          Start Workout
        </button>

        <div className="mt-4">
          <h3>Features Coming Soon:</h3>
          <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
            <li>Exercise selection from library</li>
            <li>Real-time set and rep tracking</li>
            <li>Automatic rest timer</li>
            <li>Dynamic weight suggestions</li>
            <li>Workout summary and analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Workout;