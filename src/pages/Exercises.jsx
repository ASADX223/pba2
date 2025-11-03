import React from 'react';

function Exercises() {
  const exercises = [
    { name: 'Bench Press', category: 'Chest', equipment: 'Barbell', difficulty: 'Intermediate' },
    { name: 'Squats', category: 'Legs', equipment: 'Barbell', difficulty: 'Intermediate' },
    { name: 'Deadlifts', category: 'Back', equipment: 'Barbell', difficulty: 'Advanced' },
    { name: 'Pull-ups', category: 'Back', equipment: 'Bodyweight', difficulty: 'Intermediate' },
    { name: 'Overhead Press', category: 'Shoulders', equipment: 'Barbell', difficulty: 'Intermediate' },
    { name: 'Bicep Curls', category: 'Arms', equipment: 'Dumbbells', difficulty: 'Beginner' },
  ];

  return (
    <div className="container">
      <h1>Exercise Library</h1>

      <div className="card mb-3">
        <p>Browse our comprehensive exercise database with detailed instructions, muscle group targeting, and equipment requirements.</p>
      </div>

      <div className="grid grid-cols-3">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <h4>{exercise.name}</h4>
            <div className="exercise-details">
              <span className="chip primary">{exercise.category}</span>
              <span className="chip">{exercise.equipment}</span>
              <span className={`chip ${exercise.difficulty === 'Beginner' ? 'success' : exercise.difficulty === 'Intermediate' ? 'warning' : 'danger'}`}>
                {exercise.difficulty}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercises;