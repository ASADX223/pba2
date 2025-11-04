import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="container">
      {/* Welcome Section */}
      <section className="text-center mb-4">
        <h1>
          {isAuthenticated
            ? `Welcome back, ${user.firstName}!`
            : 'Welcome to Gym Tracker'
          }
        </h1>
        <p className="text-secondary">
          {isAuthenticated
            ? 'Track your fitness journey and achieve your goals!'
            : 'Your intelligent gym tracking companion for optimized workouts and recovery.'
          }
        </p>
      </section>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">4</div>
          <div className="stat-label">Weekly Workouts</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">15,420</div>
          <div className="stat-label">Total Volume (lbs)</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">7</div>
          <div className="stat-label">Day Streak</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2,840</div>
          <div className="stat-label">Calories Burned</div>
        </div>
      </div>

      {/* Quick Actions and Goals */}
      <div className="grid grid-cols-2 mb-4">
        <div className="card">
          <h2>Quick Actions</h2>
          <div className="flex flex-col gap-4">
            <Link to="/workout" className="btn btn-primary">
              Start Today's Workout
            </Link>
            <Link to="/nutrition" className="btn btn-outline">
              Log a Meal
            </Link>
            <Link to="/exercises" className="btn btn-outline">
              Browse Exercises
            </Link>
          </div>
        </div>

        <div className="card">
          <h2>Today's Goals</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center p-2 bg-light rounded">
              <span>Complete workout</span>
              <span className="chip success">Complete</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-light rounded">
              <span>Log meals</span>
              <span className="chip">Pending</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-light rounded">
              <span>Drink 8 glasses of water (0/8)</span>
              <span className="chip">Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Workouts */}
      <div className="card">
        <h2>Recent Workouts</h2>
        <div className="grid grid-cols-3">
          <div className="exercise-card">
            <h4>Upper Body Push</h4>
            <div className="flex justify-between">
              <span>Jan 14, 2025</span>
              <span>45 min</span>
            </div>
          </div>
          <div className="exercise-card">
            <h4>Lower Body</h4>
            <div className="flex justify-between">
              <span>Jan 13, 2025</span>
              <span>50 min</span>
            </div>
          </div>
          <div className="exercise-card">
            <h4>Cardio + Core</h4>
            <div className="flex justify-between">
              <span>Jan 12, 2025</span>
              <span>30 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;