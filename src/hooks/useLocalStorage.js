import { useState, useEffect } from 'react';

// Generic hook for localStorage with JSON serialization
export const useLocalStorage = (key, initialValue) => {
  // Get from local storage then parse stored json or return initialValue
  const readValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(readValue);

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Listen for changes to other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key) {
        setStoredValue(readValue());
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue];
};

// Hook for workout timer
export const useWorkoutTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const start = () => {
    setIsActive(true);
    setIsPaused(false);
    if (!startTime) {
      setStartTime(new Date());
    }
  };

  const pause = () => {
    setIsPaused(true);
  };

  const resume = () => {
    setIsPaused(false);
  };

  const stop = () => {
    setIsActive(false);
    setIsPaused(false);
    setSeconds(0);
    setStartTime(null);
  };

  const reset = () => {
    setSeconds(0);
    setIsPaused(false);
  };

  const formatTime = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    isActive,
    isPaused,
    seconds,
    startTime,
    start,
    pause,
    resume,
    stop,
    reset,
    formatTime
  };
};

// Hook for rest timer
export const useRestTimer = (initialTime = 60) => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [initialRestTime] = useState(initialTime);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Play notification sound or vibrate
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const start = (customTime = initialRestTime) => {
    setTimeLeft(customTime);
    setIsActive(true);
  };

  const pause = () => {
    setIsActive(false);
  };

  const resume = () => {
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
    setTimeLeft(initialRestTime);
  };

  const addTime = (seconds) => {
    setTimeLeft(time => time + seconds);
  };

  const skip = () => {
    setTimeLeft(0);
    setIsActive(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = ((initialRestTime - timeLeft) / initialRestTime) * 100;

  return {
    isActive,
    timeLeft,
    progress,
    start,
    pause,
    resume,
    stop,
    addTime,
    skip,
    formatTime
  };
};

// Hook for managing workout state
export const useWorkoutState = () => {
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [currentSet, setCurrentSet] = useState(null);
  const [workoutHistory, setWorkoutHistory] = useLocalStorage('fittrack_workout_history', []);

  const startWorkout = (workoutTemplate) => {
    const newWorkout = {
      id: `workout_${Date.now()}`,
      name: workoutTemplate.name,
      date: new Date().toISOString().split('T')[0],
      startTime: new Date().toTimeString().split(' ')[0].substring(0, 5),
      exercises: [],
      completed: false
    };
    setCurrentWorkout(newWorkout);
    return newWorkout;
  };

  const addExercise = (exercise) => {
    if (!currentWorkout) return;

    const newExercise = {
      ...exercise,
      sets: [],
      notes: '',
      completed: false
    };

    setCurrentWorkout(prev => ({
      ...prev,
      exercises: [...prev.exercises, newExercise]
    }));

    setCurrentExercise(newExercise);
  };

  const addSet = (setData) => {
    if (!currentExercise) return;

    const newSet = {
      ...setData,
      setNumber: currentExercise.sets.length + 1,
      completed: true
    };

    setCurrentExercise(prev => ({
      ...prev,
      sets: [...prev.sets, newSet]
    }));

    setCurrentWorkout(prev => ({
      ...prev,
      exercises: prev.exercises.map(ex =>
        ex.id === currentExercise.id
          ? { ...ex, sets: [...ex.sets, newSet] }
          : ex
      )
    }));

    return newSet;
  };

  const completeExercise = () => {
    if (!currentExercise) return;

    const completedExercise = {
      ...currentExercise,
      completed: true,
      totalVolume: currentExercise.sets.reduce((total, set) => total + (set.weight * set.reps), 0)
    };

    setCurrentExercise(null);
    setCurrentWorkout(prev => ({
      ...prev,
      exercises: prev.exercises.map(ex =>
        ex.id === completedExercise.id ? completedExercise : ex
      )
    }));
  };

  const completeWorkout = () => {
    if (!currentWorkout) return;

    const endTime = new Date().toTimeString().split(' ')[0].substring(0, 5);
    const completedWorkout = {
      ...currentWorkout,
      endTime,
      completed: true,
      totalVolume: currentWorkout.exercises.reduce((total, exercise) => {
        return total + exercise.sets.reduce((exerciseTotal, set) => exerciseTotal + (set.weight * set.reps), 0);
      }, 0),
      duration: 0 // Calculate duration
    };

    setWorkoutHistory(prev => [completedWorkout, ...prev]);
    setCurrentWorkout(null);
    setCurrentExercise(null);

    return completedWorkout;
  };

  const cancelWorkout = () => {
    setCurrentWorkout(null);
    setCurrentExercise(null);
    setCurrentSet(null);
  };

  return {
    currentWorkout,
    currentExercise,
    currentSet,
    workoutHistory,
    startWorkout,
    addExercise,
    addSet,
    completeExercise,
    completeWorkout,
    cancelWorkout
  };
};

// Hook for managing nutrition state
export const useNutritionState = () => {
  const [nutritionLogs, setNutritionLogs] = useLocalStorage('fittrack_nutrition_logs', []);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const getDailyLog = (date = selectedDate) => {
    return nutritionLogs.find(log => log.date === date) || {
      date,
      meals: [],
      totalCalories: 0,
      totalProtein: 0,
      totalCarbs: 0,
      totalFats: 0,
      water: 0
    };
  };

  const addMeal = (meal) => {
    const date = meal.date || selectedDate;
    const existingLog = getDailyLog(date);
    const newMeal = {
      ...meal,
      id: `meal_${Date.now()}`,
      createdAt: new Date().toISOString()
    };

    const updatedLog = {
      ...existingLog,
      meals: [...existingLog.meals, newMeal],
      totalCalories: existingLog.totalCalories + newMeal.totalCalories,
      totalProtein: existingLog.totalProtein + newMeal.totalProtein,
      totalCarbs: existingLog.totalCarbs + newMeal.totalCarbs,
      totalFats: existingLog.totalFats + newMeal.totalFats
    };

    setNutritionLogs(prev => {
      const otherLogs = prev.filter(log => log.date !== date);
      return [updatedLog, ...otherLogs];
    });

    return updatedLog;
  };

  const deleteMeal = (mealId, date = selectedDate) => {
    const existingLog = getDailyLog(date);
    const mealToDelete = existingLog.meals.find(meal => meal.id === mealId);

    if (!mealToDelete) return;

    const updatedLog = {
      ...existingLog,
      meals: existingLog.meals.filter(meal => meal.id !== mealId),
      totalCalories: existingLog.totalCalories - mealToDelete.totalCalories,
      totalProtein: existingLog.totalProtein - mealToDelete.totalProtein,
      totalCarbs: existingLog.totalCarbs - mealToDelete.totalCarbs,
      totalFats: existingLog.totalFats - mealToDelete.totalFats
    };

    setNutritionLogs(prev => {
      const otherLogs = prev.filter(log => log.date !== date);
      return [updatedLog, ...otherLogs];
    });

    return updatedLog;
  };

  const updateWater = (amount, date = selectedDate) => {
    const existingLog = getDailyLog(date);
    const updatedLog = {
      ...existingLog,
      water: amount
    };

    setNutritionLogs(prev => {
      const otherLogs = prev.filter(log => log.date !== date);
      return [updatedLog, ...otherLogs];
    });

    return updatedLog;
  };

  return {
    nutritionLogs,
    selectedDate,
    setSelectedDate,
    getDailyLog,
    addMeal,
    deleteMeal,
    updateWater
  };
};

// Hook for debouncing values
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};