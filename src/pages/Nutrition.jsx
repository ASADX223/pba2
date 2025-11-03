import React from 'react';

function Nutrition() {
  return (
    <div className="container">
      <h1>Nutrition Tracking</h1>

      <div className="stats-grid mb-4">
        <div className="card">
          <h3>Daily Calories</h3>
          <div className="stat-number">1,850 / 2,500</div>
          <p className="text-secondary">650 calories remaining</p>
        </div>

        <div className="card">
          <h3>Water Intake</h3>
          <div className="stat-number">64 oz</div>
          <p className="text-secondary">Goal: 128 oz</p>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-4">
        <div className="card text-center">
          <h3>Protein</h3>
          <div className="stat-number text-primary">120g</div>
          <p className="text-secondary">Goal: 150g</p>
        </div>

        <div className="card text-center">
          <h3>Carbs</h3>
          <div className="stat-number text-primary">180g</div>
          <p className="text-secondary">Goal: 250g</p>
        </div>

        <div className="card text-center">
          <h3>Fats</h3>
          <div className="stat-number text-primary">65g</div>
          <p className="text-secondary">Goal: 83g</p>
        </div>
      </div>

      <div className="card">
        <h2>Recent Meals</h2>
        <div className="grid grid-cols-3">
          <div className="exercise-card">
            <h4>Oatmeal with Berries</h4>
            <p className="text-secondary">8:00 AM • 320 cal</p>
          </div>
          <div className="exercise-card">
            <h4>Grilled Chicken Salad</h4>
            <p className="text-secondary">12:30 PM • 450 cal</p>
          </div>
          <div className="exercise-card">
            <h4>Protein Shake</h4>
            <p className="text-secondary">3:00 PM • 280 cal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;