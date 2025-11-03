import React from 'react';

function Goals() {
  const activeGoals = [
    { title: 'Bench Press 200 lbs', current: 185, target: 200, unit: 'lbs' },
    { title: 'Lose 10 lbs', current: 180, target: 170, unit: 'lbs' },
    { title: 'Run 5k Under 25 min', current: 28, target: 25, unit: 'minutes' },
  ];

  const completedGoals = [
    { title: 'Squat 225 lbs', completedDate: '2025-01-10' },
    { title: '30-Day Workout Streak', completedDate: '2025-01-05' },
  ];

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-3">
        <h1>Goals</h1>
        <button className="btn btn-primary">Set New Goal</button>
      </div>

      <div className="card mb-3">
        <h2>Active Goals</h2>
        <div className="grid grid-cols-3">
          {activeGoals.map((goal, index) => (
            <div key={index} className="card">
              <h3>{goal.title}</h3>
              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <span>Progress</span>
                  <span>{goal.current} / {goal.target} {goal.unit}</span>
                </div>
                <div style={{
                  height: '8px',
                  backgroundColor: '#e9ecef',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${Math.min((goal.current / goal.target) * 100, 100)}%`,
                    backgroundColor: '#007bff'
                  }} />
                </div>
              </div>
              <p className="text-center text-secondary">
                {Math.round((goal.current / goal.target) * 100)}% Complete
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Completed Goals</h2>
        <div className="grid grid-cols-3">
          {completedGoals.map((goal, index) => (
            <div key={index} className="exercise-card" style={{ backgroundColor: '#d4edda', borderColor: '#c3e6cb' }}>
              <h4 className="text-success">✓ {goal.title}</h4>
              <p className="text-secondary">Completed: {goal.completedDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Goals;