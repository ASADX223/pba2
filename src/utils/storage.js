import { initialUserProfile } from '../data/userProfile.js';

// Storage keys
const STORAGE_KEYS = {
  USER_PROFILE: 'fittrack_user_profile',
  WORKOUT_HISTORY: 'fittrack_workout_history',
  NUTRITION_LOGS: 'fittrack_nutrition_logs',
  GOAL_HISTORY: 'fittrack_goal_history',
  EXERCISE_FAVORITES: 'fittrack_exercise_favorites',
  WORKOUT_TEMPLATES: 'fittrack_workout_templates',
  APP_SETTINGS: 'fittrack_app_settings'
};

// Generic storage helpers
const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

const getItem = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};

// User profile management
export const getUserProfile = () => {
  return getItem(STORAGE_KEYS.USER_PROFILE, initialUserProfile);
};

export const saveUserProfile = (profile) => {
  return setItem(STORAGE_KEYS.USER_PROFILE, profile);
};

export const updateUserProfile = (updates) => {
  const currentProfile = getUserProfile();
  const updatedProfile = { ...currentProfile, ...updates };
  return saveUserProfile(updatedProfile);
};

// Workout history management
export const getWorkoutHistory = () => {
  return getItem(STORAGE_KEYS.WORKOUT_HISTORY, []);
};

export const saveWorkout = (workout) => {
  const history = getWorkoutHistory();
  const workoutWithTimestamp = {
    ...workout,
    createdAt: new Date().toISOString()
  };

  // Add to beginning of array (most recent first)
  history.unshift(workoutWithTimestamp);

  // Keep only last 100 workouts to prevent storage issues
  const limitedHistory = history.slice(0, 100);

  return setItem(STORAGE_KEYS.WORKOUT_HISTORY, limitedHistory);
};

export const deleteWorkout = (workoutId) => {
  const history = getWorkoutHistory();
  const filteredHistory = history.filter(workout => workout.id !== workoutId);
  return setItem(STORAGE_KEYS.WORKOUT_HISTORY, filteredHistory);
};

export const updateWorkout = (workoutId, updates) => {
  const history = getWorkoutHistory();
  const updatedHistory = history.map(workout =>
    workout.id === workoutId ? { ...workout, ...updates } : workout
  );
  return setItem(STORAGE_KEYS.WORKOUT_HISTORY, updatedHistory);
};

// Nutrition logs management
export const getNutritionLogs = () => {
  return getItem(STORAGE_KEYS.NUTRITION_LOGS, []);
};

export const saveNutritionLog = (log) => {
  const logs = getNutritionLogs();
  const logWithTimestamp = {
    ...log,
    createdAt: new Date().toISOString()
  };

  // Add to beginning of array (most recent first)
  logs.unshift(logWithTimestamp);

  // Keep only last 90 days of logs to prevent storage issues
  const ninetyDaysAgo = new Date();
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

  const filteredLogs = logs.filter(log =>
    new Date(log.date) >= ninetyDaysAgo
  );

  return setItem(STORAGE_KEYS.NUTRITION_LOGS, filteredLogs);
};

export const deleteNutritionLog = (logId) => {
  const logs = getNutritionLogs();
  const filteredLogs = logs.filter(log => log.id !== logId);
  return setItem(STORAGE_KEYS.NUTRITION_LOGS, filteredLogs);
};

export const updateNutritionLog = (logId, updates) => {
  const logs = getNutritionLogs();
  const updatedLogs = logs.map(log =>
    log.id === logId ? { ...log, ...updates } : log
  );
  return setItem(STORAGE_KEYS.NUTRITION_LOGS, updatedLogs);
};

// Get nutrition logs for a specific date
export const getNutritionLogByDate = (date) => {
  const logs = getNutritionLogs();
  return logs.find(log => log.date === date);
};

// Goal history management
export const getGoalHistory = () => {
  return getItem(STORAGE_KEYS.GOAL_HISTORY, []);
};

export const saveGoal = (goal) => {
  const history = getGoalHistory();
  const goalWithTimestamp = {
    ...goal,
    createdAt: new Date().toISOString(),
    completed: false
  };

  history.push(goalWithTimestamp);
  return setItem(STORAGE_KEYS.GOAL_HISTORY, history);
};

export const completeGoal = (goalId) => {
  const history = getGoalHistory();
  const updatedHistory = history.map(goal =>
    goal.id === goalId ? { ...goal, completed: true, completedAt: new Date().toISOString() } : goal
  );
  return setItem(STORAGE_KEYS.GOAL_HISTORY, updatedHistory);
};

export const deleteGoal = (goalId) => {
  const history = getGoalHistory();
  const filteredHistory = history.filter(goal => goal.id !== goalId);
  return setItem(STORAGE_KEYS.GOAL_HISTORY, filteredHistory);
};

// Exercise favorites management
export const getExerciseFavorites = () => {
  return getItem(STORAGE_KEYS.EXERCISE_FAVORITES, []);
};

export const toggleExerciseFavorite = (exerciseId) => {
  const favorites = getExerciseFavorites();
  const index = favorites.indexOf(exerciseId);

  if (index === -1) {
    favorites.push(exerciseId);
  } else {
    favorites.splice(index, 1);
  }

  return setItem(STORAGE_KEYS.EXERCISE_FAVORITES, favorites);
};

export const isExerciseFavorite = (exerciseId) => {
  const favorites = getExerciseFavorites();
  return favorites.includes(exerciseId);
};

// Custom workout templates management
export const getWorkoutTemplates = () => {
  return getItem(STORAGE_KEYS.WORKOUT_TEMPLATES, []);
};

export const saveWorkoutTemplate = (template) => {
  const templates = getWorkoutTemplates();
  const templateWithId = {
    ...template,
    id: template.id || `template_${Date.now()}`,
    createdAt: new Date().toISOString()
  };

  // Update existing or add new
  const existingIndex = templates.findIndex(t => t.id === templateWithId.id);
  if (existingIndex !== -1) {
    templates[existingIndex] = templateWithId;
  } else {
    templates.push(templateWithId);
  }

  return setItem(STORAGE_KEYS.WORKOUT_TEMPLATES, templates);
};

export const deleteWorkoutTemplate = (templateId) => {
  const templates = getWorkoutTemplates();
  const filteredTemplates = templates.filter(template => template.id !== templateId);
  return setItem(STORAGE_KEYS.WORKOUT_TEMPLATES, filteredTemplates);
};

// App settings management
export const getAppSettings = () => {
  return getItem(STORAGE_KEYS.APP_SETTINGS, {
    units: 'imperial',
    theme: 'light',
    notifications: true,
    restSounds: true,
    autoSave: true
  });
};

export const saveAppSettings = (settings) => {
  return setItem(STORAGE_KEYS.APP_SETTINGS, settings);
};

export const updateAppSettings = (updates) => {
  const currentSettings = getAppSettings();
  const updatedSettings = { ...currentSettings, ...updates };
  return saveAppSettings(updatedSettings);
};

// Data export and import
export const exportUserData = () => {
  try {
    const userData = {
      userProfile: getUserProfile(),
      workoutHistory: getWorkoutHistory(),
      nutritionLogs: getNutritionLogs(),
      goalHistory: getGoalHistory(),
      exerciseFavorites: getExerciseFavorites(),
      workoutTemplates: getWorkoutTemplates(),
      appSettings: getAppSettings(),
      exportDate: new Date().toISOString()
    };

    return JSON.stringify(userData, null, 2);
  } catch (error) {
    console.error('Error exporting user data:', error);
    return null;
  }
};

export const importUserData = (jsonData) => {
  try {
    const userData = JSON.parse(jsonData);

    // Validate data structure
    if (!userData.userProfile) {
      throw new Error('Invalid data format');
    }

    // Save all data
    setItem(STORAGE_KEYS.USER_PROFILE, userData.userProfile);
    setItem(STORAGE_KEYS.WORKOUT_HISTORY, userData.workoutHistory || []);
    setItem(STORAGE_KEYS.NUTRITION_LOGS, userData.nutritionLogs || []);
    setItem(STORAGE_KEYS.GOAL_HISTORY, userData.goalHistory || []);
    setItem(STORAGE_KEYS.EXERCISE_FAVORITES, userData.exerciseFavorites || []);
    setItem(STORAGE_KEYS.WORKOUT_TEMPLATES, userData.workoutTemplates || []);
    setItem(STORAGE_KEYS.APP_SETTINGS, userData.appSettings || {});

    return true;
  } catch (error) {
    console.error('Error importing user data:', error);
    return false;
  }
};

// Clear all data (for logout/reset)
export const clearAllData = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    removeItem(key);
  });

  // Reset with default user profile
  saveUserProfile(initialUserProfile);

  return true;
};

// Get storage usage information
export const getStorageUsage = () => {
  try {
    let totalSize = 0;
    const sizes = {};

    Object.entries(STORAGE_KEYS).forEach(([key, storageKey]) => {
      const item = localStorage.getItem(storageKey);
      const size = item ? item.length : 0;
      sizes[key] = size;
      totalSize += size;
    });

    // localStorage typically has 5-10MB limit
    const maxSize = 5 * 1024 * 1024; // 5MB
    const usagePercentage = ((totalSize / maxSize) * 100).toFixed(2);

    return {
      totalBytes: totalSize,
      totalKB: (totalSize / 1024).toFixed(2),
      maxSizeBytes: maxSize,
      maxSizeKB: (maxSize / 1024).toFixed(2),
      usagePercentage,
      sizes
    };
  } catch (error) {
    console.error('Error calculating storage usage:', error);
    return null;
  }
};