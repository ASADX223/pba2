
// Workout volume calculations
export const calculateExerciseVolume = (sets) => {
  return sets.reduce((total, set) => {
    return total + (set.weight * set.reps);
  }, 0);
};

export const calculateWorkoutVolume = (exercises) => {
  return exercises.reduce((total, exercise) => {
    return total + calculateExerciseVolume(exercise.sets);
  }, 0);
};

// One-rep max calculations using different formulas
export const calculate1RM = (weight, reps, formula = 'epley') => {
  switch (formula) {
    case 'epley':
      return weight * (1 + reps / 30);
    case 'brzycki':
      return weight * (36 / (37 - reps));
    case 'lander':
      return (100 * weight) / (101.3 - 2.67123 * reps);
    case 'lombardi':
      return weight * Math.pow(reps, 0.10);
    default:
      return weight * (1 + reps / 30);
  }
};

// Calculate training load (RPE-based)
export const calculateTrainingLoad = (weight, reps, rpe = 7) => {
  // Simplified load calculation based on weight, reps, and perceived exertion
  const volume = weight * reps;
  const intensityFactor = rpe / 10;
  return volume * intensityFactor;
};

// Calculate fatigue percentage
export const calculateFatigue = (actualReps, targetReps, weight) => {
  if (actualReps >= targetReps) return 0;
  const fatigueScore = ((targetReps - actualReps) / targetReps) * 100;
  return Math.min(fatigueScore, 100);
};

// Calculate recovery score based on various factors
export const calculateRecoveryScore = (sleep, soreness, energy, stress) => {
  // Normalize inputs (assuming 1-10 scale where higher is better except soreness/stress)
  const sleepScore = (sleep / 10) * 25; // 25% weight
  const sorenessScore = ((10 - soreness) / 10) * 25; // 25% weight (inverted)
  const energyScore = (energy / 10) * 25; // 25% weight
  const stressScore = ((10 - stress) / 10) * 25; // 25% weight (inverted)

  return Math.round(sleepScore + sorenessScore + energyScore + stressScore);
};

// Calculate body composition metrics
export const calculateBMI = (weight, height) => {
  const heightInMeters = height / 100; // Convert cm to meters
  return (weight / (heightInMeters * heightInMeters)).toFixed(1);
};

export const calculateBodyFatPercentage = (weight, height, age, gender, waist, neck) => {
  // U.S. Navy formula for body fat percentage
  if (gender === 'male') {
    const leanMass = weight - 76.2 * Math.log10(waist - neck) + 52.5 * Math.log10(height) - 96.4;
    return ((weight - leanMass) / weight * 100).toFixed(1);
  } else {
    const leanMass = weight - 98.8 * Math.log10(waist + hip - neck) - 78.2 * Math.log10(height) + 336.7;
    return ((weight - leanMass) / weight * 100).toFixed(1);
  }
};

// Calculate basal metabolic rate using Mifflin-St Jeor equation
export const calculateBMR = (weight, height, age, gender) => {
  if (gender === 'male') {
    return (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    return (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
};

// Calculate total daily energy expenditure
export const calculateTDEE = (bmr, activityLevel) => {
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very_active: 1.725,
    extra_active: 1.9
  };

  return bmr * (activityMultipliers[activityLevel] || 1.55);
};

// Calculate daily macro needs
export const calculateMacros = (calories, goal) => {
  const macroRatios = {
    muscle_gain: { protein: 0.30, carbs: 0.45, fats: 0.25 },
    fat_loss: { protein: 0.35, carbs: 0.35, fats: 0.30 },
    strength: { protein: 0.30, carbs: 0.50, fats: 0.20 },
    maintenance: { protein: 0.25, carbs: 0.45, fats: 0.30 }
  };

  const ratios = macroRatios[goal] || macroRatios.maintenance;

  return {
    protein: Math.round((calories * ratios.protein) / 4),
    carbs: Math.round((calories * ratios.carbs) / 4),
    fats: Math.round((calories * ratios.fats) / 9)
  };
};

// Calculate water intake needs
export const calculateWaterIntake = (weight, activityLevel, climate = 'moderate') => {
  let baseIntake = weight * 0.033; // 33ml per kg body weight

  const activityMultipliers = {
    sedentary: 1.0,
    light: 1.1,
    moderate: 1.2,
    very_active: 1.3,
    extra_active: 1.4
  };

  const climateMultipliers = {
    cold: 0.9,
    moderate: 1.0,
    hot: 1.2,
    very_hot: 1.4
  };

  const adjustedIntake = baseIntake *
    (activityMultipliers[activityLevel] || 1.2) *
    (climateMultipliers[climate] || 1.0);

  return Math.round(adjustedIntake * 1000); // Convert to ml
};

// Calculate strength progression
export const calculateStrengthProgression = (exerciseHistory) => {
  if (exerciseHistory.length < 2) {
    return { trend: 'insufficient_data', percentageChange: 0 };
  }

  const recentWorkouts = exerciseHistory.slice(-4); // Last 4 sessions
  const volumeProgression = recentWorkouts.map(workout => {
    return calculateExerciseVolume(workout.sets);
  });

  if (volumeProgression.length < 2) {
    return { trend: 'insufficient_data', percentageChange: 0 };
  }

  const firstVolume = volumeProgression[0];
  const lastVolume = volumeProgression[volumeProgression.length - 1];
  const percentageChange = ((lastVolume - firstVolume) / firstVolume) * 100;

  let trend;
  if (percentageChange > 5) {
    trend = 'increasing';
  } else if (percentageChange < -5) {
    trend = 'decreasing';
  } else {
    trend = 'stable';
  }

  return { trend, percentageChange: Math.round(percentageChange * 10) / 10 };
};

// Calculate muscle group balance
export const calculateMuscleGroupBalance = (workoutHistory) => {
  const muscleGroups = {
    chest: 0,
    back: 0,
    shoulders: 0,
    legs: 0,
    arms: 0,
    core: 0
  };

  workoutHistory.forEach(workout => {
    workout.exercises.forEach(exercise => {
      exercise.muscleGroups.forEach(muscle => {
        const volume = calculateExerciseVolume(exercise.sets);
        if (muscleGroups.hasOwnProperty(muscle)) {
          muscleGroups[muscle] += volume;
        }
      });
    });
  });

  const totalVolume = Object.values(muscleGroups).reduce((sum, volume) => sum + volume, 0);

  const balance = Object.entries(muscleGroups).map(([group, volume]) => ({
    group,
    volume,
    percentage: totalVolume > 0 ? Math.round((volume / totalVolume) * 100) : 0
  }));

  return balance;
};

// Calculate workout density (volume per minute)
export const calculateWorkoutDensity = (exercises, duration) => {
  const totalVolume = calculateWorkoutVolume(exercises);
  const durationInMinutes = duration / 60;

  return Math.round(totalVolume / durationInMinutes);
};

// Calculate training frequency
export const calculateTrainingFrequency = (workoutHistory, days = 30) => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);

  const recentWorkouts = workoutHistory.filter(workout =>
    new Date(workout.date) >= cutoffDate
  );

  return {
    workouts: recentWorkouts.length,
    frequency: Math.round((recentWorkouts.length / days) * 7 * 10) / 10, // Weekly frequency
    daysPerWeek: Math.round((recentWorkouts.length / days) * 7 * 10) / 10
  };
};

// Calculate personal records
export const calculatePersonalRecords = (workoutHistory) => {
  const records = {};

  workoutHistory.forEach(workout => {
    workout.exercises.forEach(exercise => {
      if (!records[exercise.name]) {
        records[exercise.name] = {
          maxWeight: 0,
          maxReps: 0,
          maxVolume: 0,
          max1RM: 0
        };
      }

      exercise.sets.forEach(set => {
        // Update max weight
        if (set.weight > records[exercise.name].maxWeight) {
          records[exercise.name].maxWeight = set.weight;
          records[exercise.name].maxWeightDate = workout.date;
        }

        // Update max reps
        if (set.reps > records[exercise.name].maxReps) {
          records[exercise.name].maxReps = set.reps;
          records[exercise.name].maxRepsDate = workout.date;
        }

        // Update max volume
        const volume = set.weight * set.reps;
        if (volume > records[exercise.name].maxVolume) {
          records[exercise.name].maxVolume = volume;
          records[exercise.name].maxVolumeDate = workout.date;
        }

        // Update max estimated 1RM
        const estimated1RM = calculate1RM(set.weight, set.reps);
        if (estimated1RM > records[exercise.name].max1RM) {
          records[exercise.name].max1RM = Math.round(estimated1RM);
          records[exercise.name].max1RMDate = workout.date;
        }
      });
    });
  });

  return records;
};

// Calculate workout streak
export const calculateWorkoutStreak = (workoutHistory) => {
  if (workoutHistory.length === 0) return 0;

  const sortedDates = workoutHistory
    .map(workout => new Date(workout.date))
    .sort((a, b) => b - a); // Sort newest to oldest

  let streak = 1;
  let currentDate = new Date(sortedDates[0]);
  currentDate.setHours(0, 0, 0, 0);

  for (let i = 1; i < sortedDates.length; i++) {
    const workoutDate = new Date(sortedDates[i]);
    workoutDate.setHours(0, 0, 0, 0);

    const daysDiff = Math.floor((currentDate - workoutDate) / (1000 * 60 * 60 * 24));

    if (daysDiff === 1) {
      streak++;
      currentDate = workoutDate;
    } else if (daysDiff > 1) {
      break;
    }
  }

  return streak;
};

// Format weight based on unit preference
export const formatWeight = (weight, unit = 'imperial') => {
  if (unit === 'metric') {
    return Math.round(weight * 0.453592); // Convert lbs to kg
  }
  return Math.round(weight); // Return lbs
};

// Format duration in human readable format
export const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${remainingSeconds}s`;
  } else {
    return `${remainingSeconds}s`;
  }
};

// Format date for display
export const formatDate = (dateString, format = 'short') => {
  const date = new Date(dateString);

  switch (format) {
    case 'long':
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    case 'medium':
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    case 'short':
    default:
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
  }
};