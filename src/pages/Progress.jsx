import React from 'react';

function Progress() {
  return (
    <div className="container">
      <h1>Progress Tracking</h1>

      <div className="stats-grid mb-4">
        <div className="card">
          <h3>Total Workouts</h3>
          <div className="stat-number">47</div>
          <p className="text-secondary">Last 30 days</p>
        </div>

        <div className="card">
          <h3>Personal Records</h3>
          <div className="stat-number">12</div>
          <p className="text-secondary">This month</p>
        </div>

        <div className="card">
          <h3>Avg Workout Duration</h3>
          <div className="stat-number">52 min</div>
          <p className="text-secondary">This week</p>
        </div>
      </div>

      <div className="card mb-3">
        <h2>Strength Progress</h2>
        <div className="grid grid-cols-3">
          <div className="exercise-card">
            <h4>Bench Press</h4>
            <div className="flex justify-between">
              <span>Previous: 175 lbs</span>
              <span className="text-success">Current: 185 lbs</span>
            </div>
            <p className="text-success">+10 lbs improvement</p>
          </div>
          <div className="exercise-card">
            <h4>Squat</h4>
            <div className="flex justify-between">
              <span>Previous: 215 lbs</span>
              <span className="text-success">Current: 225 lbs</span>
            </div>
            <p className="text-success">+10 lbs improvement</p>
          </div>
          <div className="exercise-card">
            <h4>Deadlift</h4>
            <div className="flex justify-between">
              <span>Previous: 265 lbs</span>
              <span className="text-success">Current: 275 lbs</span>
            </div>
            <p className="text-success">+10 lbs improvement</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Performance Charts</h2>
        <div style={{
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <p className="text-secondary">
            Interactive charts coming soon - Volume tracking, body measurements, and performance trends
          </p>
        </div>
      </div>
    </div>
  );
}

export default Progress;