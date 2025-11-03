export const sampleWorkouts = [
  {
    id: "workout_1",
    name: "Upper Body Push",
    date: "2025-01-14",
    startTime: "09:00",
    endTime: "10:15",
    duration: 4500, // 75 minutes in seconds
    exercises: [
      {
        id: "exercise_1",
        name: "Bench Press",
        sets: [
          { setNumber: 1, weight: 135, reps: 12, restTime: 90 },
          { setNumber: 2, weight: 135, reps: 10, restTime: 90 },
          { setNumber: 3, weight: 140, reps: 8, restTime: 120 }
        ],
        totalVolume: 3460,
        estimated1RM: 165
      },
      {
        id: "exercise_2",
        name: "Overhead Press",
        sets: [
          { setNumber: 1, weight: 65, reps: 12, restTime: 90 },
          { setNumber: 2, weight: 65, reps: 10, restTime: 90 },
          { setNumber: 3, weight: 70, reps: 8, restTime: 120 }
        ],
        totalVolume: 1680,
        estimated1RM: 85
      },
      {
        id: "exercise_3",
        name: "Dumbbell Flyes",
        sets: [
          { setNumber: 1, weight: 25, reps: 15, restTime: 60 },
          { setNumber: 2, weight: 25, reps: 12, restTime: 60 },
          { setNumber: 3, weight: 30, reps: 10, restTime: 90 }
        ],
        totalVolume: 825,
        estimated1RM: null
      },
      {
        id: "exercise_4",
        name: "Tricep Pushdowns",
        sets: [
          { setNumber: 1, weight: 40, reps: 15, restTime: 60 },
          { setNumber: 2, weight: 45, reps: 12, restTime: 60 },
          { setNumber: 3, weight: 45, reps: 10, restTime: 90 }
        ],
        totalVolume: 1425,
        estimated1RM: null
      }
    ],
    totalVolume: 7390,
    caloriesBurned: 285,
    notes: "Felt strong today, increased weight on bench press and overhead press."
  },
  {
    id: "workout_2",
    name: "Lower Body",
    date: "2025-01-13",
    startTime: "18:30",
    endTime: "19:40",
    duration: 4200, // 70 minutes
    exercises: [
      {
        id: "exercise_1",
        name: "Barbell Squat",
        sets: [
          { setNumber: 1, weight: 185, reps: 12, restTime: 120 },
          { setNumber: 2, weight: 185, reps: 10, restTime: 120 },
          { setNumber: 3, weight: 195, reps: 8, restTime: 180 }
        ],
        totalVolume: 5310,
        estimated1RM: 235
      },
      {
        id: "exercise_2",
        name: "Romanian Deadlifts",
        sets: [
          { setNumber: 1, weight: 135, reps: 12, restTime: 90 },
          { setNumber: 2, weight: 135, reps: 10, restTime: 90 },
          { setNumber: 3, weight: 145, reps: 8, restTime: 120 }
        ],
        totalVolume: 3510,
        estimated1RM: null
      },
      {
        id: "exercise_3",
        name: "Leg Press",
        sets: [
          { setNumber: 1, weight: 270, reps: 15, restTime: 90 },
          { setNumber: 2, weight: 270, reps: 12, restTime: 90 },
          { setNumber: 3, weight: 290, reps: 10, restTime: 120 }
        ],
        totalVolume: 9750,
        estimated1RM: null
      },
      {
        id: "exercise_4",
        name: "Calf Raises",
        sets: [
          { setNumber: 1, weight: 180, reps: 20, restTime: 45 },
          { setNumber: 2, weight: 180, reps: 18, restTime: 45 },
          { setNumber: 3, weight: 200, reps: 15, restTime: 60 }
        ],
        totalVolume: 9990,
        estimated1RM: null
      }
    ],
    totalVolume: 28560,
    caloriesBurned: 380,
    notes: "Heavy leg day, feeling the burn tomorrow!"
  },
  {
    id: "workout_3",
    name: "Upper Body Pull",
    date: "2025-01-11",
    startTime: "07:00",
    endTime: "08:05",
    duration: 3900, // 65 minutes
    exercises: [
      {
        id: "exercise_1",
        name: "Pull-ups",
        sets: [
          { setNumber: 1, weight: 0, reps: 12, restTime: 90 },
          { setNumber: 2, weight: 0, reps: 10, restTime: 90 },
          { setNumber: 3, weight: 0, reps: 8, restTime: 120 }
        ],
        totalVolume: 0,
        estimated1RM: null
      },
      {
        id: "exercise_2",
        name: "Bent Over Row",
        sets: [
          { setNumber: 1, weight: 95, reps: 12, restTime: 90 },
          { setNumber: 2, weight: 95, reps: 10, restTime: 90 },
          { setNumber: 3, weight: 105, reps: 8, restTime: 120 }
        ],
        totalVolume: 2580,
        estimated1RM: 125
      },
      {
        id: "exercise_3",
        name: "Dumbbell Bicep Curls",
        sets: [
          { setNumber: 1, weight: 20, reps: 15, restTime: 60 },
          { setNumber: 2, weight: 20, reps: 12, restTime: 60 },
          { setNumber: 3, weight: 25, reps: 10, restTime: 90 }
        ],
        totalVolume: 800,
        estimated1RM: null
      },
      {
        id: "exercise_4",
        name: "Face Pulls",
        sets: [
          { setNumber: 1, weight: 30, reps: 20, restTime: 60 },
          { setNumber: 2, weight: 30, reps: 18, restTime: 60 },
          { setNumber: 3, weight: 35, reps: 15, restTime: 90 }
        ],
        totalVolume: 1815,
        estimated1RM: null
      }
    ],
    totalVolume: 5195,
    caloriesBurned: 245,
    notes: "Good back session, pull-ups are getting easier."
  },
  {
    id: "workout_4",
    name: "Cardio + Core",
    date: "2025-01-12",
    startTime: "17:00",
    endTime: "17:45",
    duration: 2700, // 45 minutes
    exercises: [
      {
        id: "exercise_1",
        name: "Mountain Climbers",
        sets: [
          { setNumber: 1, weight: 0, reps: 50, restTime: 30 },
          { setNumber: 2, weight: 0, reps: 45, restTime: 30 },
          { setNumber: 3, weight: 0, reps: 40, restTime: 60 }
        ],
        totalVolume: 0,
        estimated1RM: null
      },
      {
        id: "exercise_2",
        name: "Burpees",
        sets: [
          { setNumber: 1, weight: 0, reps: 15, restTime: 60 },
          { setNumber: 2, weight: 0, reps: 12, restTime: 60 },
          { setNumber: 3, weight: 0, reps: 10, restTime: 90 }
        ],
        totalVolume: 0,
        estimated1RM: null
      },
      {
        id: "exercise_3",
        name: "Plank",
        sets: [
          { setNumber: 1, weight: 0, reps: 60, restTime: 45 }, // 60 seconds
          { setNumber: 2, weight: 0, reps: 45, restTime: 45 }, // 45 seconds
          { setNumber: 3, weight: 0, reps: 30, restTime: 60 }  // 30 seconds
        ],
        totalVolume: 0,
        estimated1RM: null
      },
      {
        id: "exercise_4",
        name: "Russian Twists",
        sets: [
          { setNumber: 1, weight: 0, reps: 30, restTime: 45 },
          { setNumber: 2, weight: 0, reps: 25, restTime: 45 },
          { setNumber: 3, weight: 0, reps: 20, restTime: 60 }
        ],
        totalVolume: 0,
        estimated1RM: null
      }
    ],
    totalVolume: 0,
    caloriesBurned: 320,
    notes: "Quick but intense session. Core is on fire!"
  }
];

export const workoutTemplates = [
  {
    id: "template_upper_push",
    name: "Upper Body Push",
    category: "strength",
    difficulty: "intermediate",
    estimatedDuration: 60,
    exercises: [
      { exerciseId: "bench_press", defaultSets: 3, defaultReps: "8-12", defaultRest: 90 },
      { exerciseId: "overhead_press", defaultSets: 3, defaultReps: "8-12", defaultRest: 90 },
      { exerciseId: "incline_dumbbell_press", defaultSets: 3, defaultReps: "10-15", defaultRest: 90 },
      { exerciseId: "lateral_raises", defaultSets: 3, defaultReps: "12-15", defaultRest: 60 },
      { exerciseId: "tricep_pushdowns", defaultSets: 3, defaultReps: "10-15", defaultRest: 60 },
      { exerciseId: "dips", defaultSets: 3, defaultReps: "8-12", defaultRest: 90 }
    ]
  },
  {
    id: "template_upper_pull",
    name: "Upper Body Pull",
    category: "strength",
    difficulty: "intermediate",
    estimatedDuration: 60,
    exercises: [
      { exerciseId: "pull_up", defaultSets: 3, defaultReps: "6-12", defaultRest: 90 },
      { exerciseId: "bent_over_row", defaultSets: 3, defaultReps: "8-12", defaultRest: 90 },
      { exerciseId: "dumbbell_flyes", defaultSets: 3, defaultReps: "10-15", defaultRest: 60 },
      { exerciseId: "face_pulls", defaultSets: 3, defaultReps: "15-20", defaultRest: 60 },
      { exerciseId: "bicep_curls", defaultSets: 3, defaultReps: "10-15", defaultRest: 60 },
      { exerciseId: "hammer_curls", defaultSets: 3, defaultReps: "10-15", defaultRest: 60 }
    ]
  },
  {
    id: "template_lower_body",
    name: "Lower Body",
    category: "strength",
    difficulty: "intermediate",
    estimatedDuration: 75,
    exercises: [
      { exerciseId: "squat", defaultSets: 3, defaultReps: "8-12", defaultRest: 120 },
      { exerciseId: "romanian_deadlifts", defaultSets: 3, defaultReps: "8-12", defaultRest: 90 },
      { exerciseId: "lunges", defaultSets: 3, defaultReps: "10-12", defaultRest: 90 },
      { exerciseId: "leg_press", defaultSets: 3, defaultReps: "12-15", defaultRest: 90 },
      { exerciseId: "leg_curls", defaultSets: 3, defaultReps: "10-15", defaultRest: 60 },
      { exerciseId: "calf_raises", defaultSets: 4, defaultReps: "15-20", defaultRest: 45 }
    ]
  },
  {
    id: "template_full_body",
    name: "Full Body",
    category: "strength",
    difficulty: "beginner",
    estimatedDuration: 45,
    exercises: [
      { exerciseId: "squat", defaultSets: 3, defaultReps: "10-15", defaultRest: 90 },
      { exerciseId: "bench_press", defaultSets: 3, defaultReps: "8-12", defaultRest: 90 },
      { exerciseId: "bent_over_row", defaultSets: 3, defaultReps: "8-12", defaultRest: 90 },
      { exerciseId: "overhead_press", defaultSets: 2, defaultReps: "10-12", defaultRest: 60 },
      { exerciseId: "bicep_curls", defaultSets: 2, defaultReps: "10-15", defaultRest: 60 },
      { exerciseId: "tricep_pushdowns", defaultSets: 2, defaultReps: "10-15", defaultRest: 60 }
    ]
  },
  {
    id: "template_cardio_core",
    name: "Cardio + Core",
    category: "cardio",
    difficulty: "intermediate",
    estimatedDuration: 30,
    exercises: [
      { exerciseId: "mountain_climbers", defaultSets: 3, defaultReps: "30-45 seconds", defaultRest: 30 },
      { exerciseId: "burpees", defaultSets: 3, defaultReps: "8-15", defaultRest: 60 },
      { exerciseId: "jumping_jacks", defaultSets: 3, defaultReps: "30-45 seconds", defaultRest: 30 },
      { exerciseId: "plank", defaultSets: 3, defaultReps: "30-60 seconds", defaultRest: 45 },
      { exerciseId: "crunches", defaultSets: 3, defaultReps: "15-25", defaultRest: 45 },
      { exerciseId: "russian_twists", defaultSets: 3, defaultReps: "15-25", defaultRest: 45 }
    ]
  }
];

export const weeklyWorkoutSplits = [
  {
    id: "split_3_day_full",
    name: "3 Day Full Body",
    description: "Full body workout 3 times per week, great for beginners",
    schedule: ["Monday", "Wednesday", "Friday"],
    templates: ["template_full_body", "template_full_body", "template_full_body"]
  },
  {
    id: "split_4_day_upper_lower",
    name: "4 Day Upper/Lower",
    description: "Alternate upper and lower body days",
    schedule: ["Monday", "Tuesday", "Thursday", "Friday"],
    templates: ["template_upper_push", "template_lower_body", "template_upper_pull", "template_lower_body"]
  },
  {
    id: "split_5_day_body_part",
    name: "5 Day Body Part Split",
    description: "Focus on specific muscle groups each day",
    schedule: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    templates: ["template_upper_push", "template_upper_pull", "template_lower_body", "template_upper_push", "template_cardio_core"]
  },
  {
    id: "split_3_day_cardio",
    name: "3 Day Cardio Focus",
    description: "Cardio and core workouts with light strength training",
    schedule: ["Monday", "Wednesday", "Friday"],
    templates: ["template_cardio_core", "template_full_body", "template_cardio_core"]
  }
];