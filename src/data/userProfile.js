export const initialUserProfile = {
  personalInfo: {
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "moderate"
  },
  goals: {
    primary: "muscle_gain",
    targetWeight: null,
    targetBodyFat: null,
    timeline: null
  },
  preferences: {
    units: "imperial", // imperial or metric
    restProfile: "moderate", // short, moderate, long
    notifications: true,
    darkMode: false
  },
  equipment: ["bodyweight"], // Available equipment
  statistics: {
    totalWorkouts: 0,
    currentStreak: 0,
    longestStreak: 0,
    personalRecords: [],
    joinDate: new Date().toISOString()
  },
  measurements: {
    weight: [],
    bodyFat: [],
    measurements: {
      chest: [],
      waist: [],
      arms: [],
      thighs: []
    }
  }
};

export const userWorkoutHistory = [];
export const userNutritionLogs = [];
export const userGoalHistory = [];

// Predefined workout splits based on goals and experience
export const recommendedWorkoutSplits = {
  beginner: {
    muscle_gain: "3_day_full",
    fat_loss: "3_day_full",
    strength: "3_day_full",
    maintenance: "3_day_cardio"
  },
  intermediate: {
    muscle_gain: "4_day_upper_lower",
    fat_loss: "4_day_upper_lower",
    strength: "5_day_body_part",
    maintenance: "4_day_upper_lower"
  },
  advanced: {
    muscle_gain: "5_day_body_part",
    fat_loss: "5_day_body_part",
    strength: "5_day_body_part",
    maintenance: "5_day_body_part"
  }
};

// Calculate recommended daily calories based on user data
export const calculateDailyCalories = (weight, height, age, gender, activityLevel, goal) => {
  // Mifflin-St Jeor equation for BMR
  let bmr;
  if (gender === 'male') {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very_active: 1.725,
    extra_active: 1.9
  };

  const goalMultipliers = {
    muscle_gain: 1.15,
    fat_loss: 0.85,
    strength: 1.10,
    maintenance: 1.0
  };

  const tdee = bmr * (activityMultipliers[activityLevel] || 1.55);
  const targetCalories = tdee * (goalMultipliers[goal] || 1.0);

  return Math.round(targetCalories);
};

// Calculate recommended macros based on calories and goals
export const calculateMacros = (calories, goal) => {
  const macroRatios = {
    muscle_gain: { protein: 0.3, carbs: 0.45, fats: 0.25 },
    fat_loss: { protein: 0.35, carbs: 0.35, fats: 0.30 },
    strength: { protein: 0.30, carbs: 0.50, fats: 0.20 },
    maintenance: { protein: 0.25, carbs: 0.45, fats: 0.30 }
  };

  const ratios = macroRatios[goal] || macroRatios.maintenance;

  return {
    protein: Math.round((calories * ratios.protein) / 4), // 4 calories per gram
    carbs: Math.round((calories * ratios.carbs) / 4), // 4 calories per gram
    fats: Math.round((calories * ratios.fats) / 9) // 9 calories per gram
  };
};

// Calculate estimated 1RM from reps and weight
export const calculate1RM = (weight, reps) => {
  // Using the Epley formula
  return Math.round(weight * (1 + reps / 30));
};

// Calculate workout volume
export const calculateWorkoutVolume = (sets) => {
  return sets.reduce((total, set) => {
    return total + (set.weight * set.reps);
  }, 0);
};

// Calculate calories burned during workout
export const calculateCaloriesBurned = (duration, intensity = 'moderate', userWeight = 70) => {
  // MET values for different intensities
  const metValues = {
    light: 4.0,
    moderate: 6.0,
    vigorous: 8.0,
    very_vigorous: 10.0
  };

  const met = metValues[intensity] || 6.0;
  const durationHours = duration / 3600; // Convert seconds to hours

  return Math.round(met * userWeight * durationHours);
};

// Generate workout recommendations based on previous performance
export const generateWorkoutRecommendations = (workoutHistory, goals) => {
  if (workoutHistory.length === 0) {
    return {
      message: "Complete a few workouts to get personalized recommendations!",
      recommendations: []
    };
  }

  // Analyze last 3 workouts for each exercise
  const exerciseProgress = {};

  workoutHistory.slice(-3).forEach(workout => {
    workout.exercises.forEach(exercise => {
      if (!exerciseProgress[exercise.name]) {
        exerciseProgress[exercise.name] = [];
      }

      const bestSet = exercise.sets.reduce((best, set) => {
        const volume = set.weight * set.reps;
        const bestVolume = best.weight * best.reps;
        return volume > bestVolume ? set : best;
      });

      exerciseProgress[exercise.name].push(bestSet);
    });
  });

  const recommendations = [];

  Object.keys(exerciseProgress).forEach(exerciseName => {
    const recentSets = exerciseProgress[exerciseName];
    if (recentSets.length >= 2) {
      const latest = recentSets[recentSets.length - 1];
      const previous = recentSets[recentSets.length - 2];

      // Check if all reps were completed with good form (simplified)
      if (latest.reps >= previous.reps && latest.weight === previous.weight) {
        recommendations.push({
          exercise: exerciseName,
          suggestion: `Consider increasing weight to ${latest.weight + 5} lbs`,
          reason: "You've been consistent with current weight"
        });
      }

      // Check if struggling with current weight
      if (latest.reps < previous.reps - 2 && latest.weight === previous.weight) {
        recommendations.push({
          exercise: exerciseName,
          suggestion: `Consider reducing weight to ${latest.weight - 5} lbs`,
          reason: "Struggling with current weight, focus on form"
        });
      }
    }
  });

  return {
    message: recommendations.length > 0 ? "Here are your personalized recommendations:" : "Keep up the great work!",
    recommendations: recommendations.slice(0, 3) // Limit to top 3 recommendations
  };
};