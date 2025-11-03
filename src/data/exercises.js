export const exercises = [
  {
    id: "bench_press",
    name: "Bench Press",
    category: "chest",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "Lie on a flat bench, grip the barbell with hands slightly wider than shoulder-width. Lower the bar to your chest, then press it back up until your arms are fully extended.",
    muscleGroups: ["chest", "triceps", "shoulders"],
    defaultRestTime: 90,
    progressionMultiplier: 1.025
  },
  {
    id: "squat",
    name: "Barbell Squat",
    category: "legs",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "Stand with feet shoulder-width apart, barbell across your upper back. Lower your body by bending your knees and hips, keeping your back straight. Go as low as comfortable, then push back up.",
    muscleGroups: ["quadriceps", "glutes", "hamstrings", "calves"],
    defaultRestTime: 120,
    progressionMultiplier: 1.03
  },
  {
    id: "deadlift",
    name: "Deadlift",
    category: "back",
    equipment: "barbell",
    difficulty: "advanced",
    instructions: "Stand with feet hip-width apart, bend at hips and knees to grip the barbell. Keep your back straight as you lift the bar by extending your hips and knees. Stand up straight, then lower the bar back to the ground.",
    muscleGroups: ["back", "glutes", "hamstrings", "core"],
    defaultRestTime: 180,
    progressionMultiplier: 1.03
  },
  {
    id: "pull_up",
    name: "Pull-up",
    category: "back",
    equipment: "bodyweight",
    difficulty: "intermediate",
    instructions: "Hang from a pull-up bar with palms facing away, hands slightly wider than shoulder-width. Pull your body up until your chin is above the bar, then lower yourself back down with control.",
    muscleGroups: ["back", "biceps", "shoulders"],
    defaultRestTime: 90,
    progressionMultiplier: 1.02
  },
  {
    id: "overhead_press",
    name: "Overhead Press",
    category: "shoulders",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "Stand with feet shoulder-width apart, hold barbell at shoulder height. Press the bar directly overhead until your arms are fully extended. Lower the bar back to shoulder height.",
    muscleGroups: ["shoulders", "triceps", "core"],
    defaultRestTime: 90,
    progressionMultiplier: 1.025
  },
  {
    id: "bent_over_row",
    name: "Bent Over Row",
    category: "back",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "Stand with feet shoulder-width apart, bend at hips keeping back straight. Hold barbell with arms extended. Pull the bar toward your lower chest, keeping elbows close to body.",
    muscleGroups: ["back", "biceps", "shoulders"],
    defaultRestTime: 90,
    progressionMultiplier: 1.025
  },
  {
    id: "incline_dumbbell_press",
    name: "Incline Dumbbell Press",
    category: "chest",
    equipment: "dumbbells",
    difficulty: "intermediate",
    instructions: "Lie on an incline bench (30-45 degrees) with dumbbells in each hand. Press the dumbbells up until your arms are fully extended, then lower them back down with control.",
    muscleGroups: ["chest", "shoulders", "triceps"],
    defaultRestTime: 90,
    progressionMultiplier: 1.02
  },
  {
    id: "dumbbell_flyes",
    name: "Dumbbell Flyes",
    category: "chest",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "Lie on a flat bench with dumbbells in each hand, palms facing each other. Lower the dumbbells out to the sides in a wide arc, then bring them back together over your chest.",
    muscleGroups: ["chest", "shoulders"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "dips",
    name: "Dips",
    category: "chest",
    equipment: "bodyweight",
    difficulty: "intermediate",
    instructions: "Grip parallel bars with arms straight, body upright. Lower your body by bending elbows until shoulders are below elbows. Push back up to starting position.",
    muscleGroups: ["chest", "triceps", "shoulders"],
    defaultRestTime: 90,
    progressionMultiplier: 1.025
  },
  {
    id: "lateral_raises",
    name: "Dumbbell Lateral Raises",
    category: "shoulders",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "Stand with dumbbells at your sides, palms facing inward. Raise arms out to the sides until they're parallel to the floor, then lower with control.",
    muscleGroups: ["shoulders"],
    defaultRestTime: 60,
    progressionMultiplier: 1.015
  },
  {
    id: "front_raises",
    name: "Dumbbell Front Raises",
    category: "shoulders",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "Stand with dumbbells in front of thighs, palms facing thighs. Raise one arm straight in front until parallel to floor, lower and repeat with other arm.",
    muscleGroups: ["shoulders", "chest"],
    defaultRestTime: 60,
    progressionMultiplier: 1.015
  },
  {
    id: "face_pulls",
    name: "Face Pulls",
    category: "shoulders",
    equipment: "cable",
    difficulty: "beginner",
    instructions: "Attach rope to cable at chest height. Grasp rope with both hands, pull toward face, separating hands at the end. Focus on squeezing shoulder blades together.",
    muscleGroups: ["shoulders", "upper_back"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "bicep_curls",
    name: "Dumbbell Bicep Curls",
    category: "arms",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "Stand with dumbbells at your sides, palms facing forward. Curl one dumbbell toward shoulder, keeping upper arm stationary. Lower and repeat with other arm.",
    muscleGroups: ["biceps", "forearms"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "hammer_curls",
    name: "Hammer Curls",
    category: "arms",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "Stand with dumbbells at your sides, palms facing each other. Curl dumbbells toward shoulders, keeping palms facing inward throughout movement.",
    muscleGroups: ["biceps", "brachialis", "forearms"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "tricep_pushdowns",
    name: "Tricep Pushdowns",
    category: "arms",
    equipment: "cable",
    difficulty: "beginner",
    instructions: "Attach straight bar to cable at high position. Grip bar with palms down, elbows tucked at sides. Push bar down until arms fully extended, then slowly return to start.",
    muscleGroups: ["triceps"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "tricep_dips",
    name: "Bench Dips",
    category: "arms",
    equipment: "bodyweight",
    difficulty: "beginner",
    instructions: "Sit on edge of bench, hands gripping edge next to hips. Slide hips off bench, supporting weight with arms. Lower body by bending elbows, then push back up.",
    muscleGroups: ["triceps", "chest", "shoulders"],
    defaultRestTime: 60,
    progressionMultiplier: 1.025
  },
  {
    id: "leg_press",
    name: "Leg Press",
    category: "legs",
    equipment: "machine",
    difficulty: "beginner",
    instructions: "Sit in leg press machine with feet shoulder-width apart on platform. Push platform away by extending legs, then slowly return to start position.",
    muscleGroups: ["quadriceps", "glutes", "hamstrings"],
    defaultRestTime: 90,
    progressionMultiplier: 1.025
  },
  {
    id: "lunges",
    name: "Dumbbell Lunges",
    category: "legs",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "Stand with dumbbells at sides. Step forward with one leg, lowering hips until both knees are bent at 90 degrees. Push back to start and repeat with other leg.",
    muscleGroups: ["quadriceps", "glutes", "hamstrings", "calves"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "leg_curls",
    name: "Leg Curls",
    category: "legs",
    equipment: "machine",
    difficulty: "beginner",
    instructions: "Lie face down on leg curl machine, hook heels under padded lever. Curl legs upward as far as possible, then slowly lower back to start position.",
    muscleGroups: ["hamstrings", "calves"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "calf_raises",
    name: "Calf Raises",
    category: "legs",
    equipment: "bodyweight",
    difficulty: "beginner",
    instructions: "Stand with feet shoulder-width apart. Rise up onto toes as high as possible, then slowly lower heels back to ground. Can be done on step for greater range of motion.",
    muscleGroups: ["calves"],
    defaultRestTime: 45,
    progressionMultiplier: 1.015
  },
  {
    id: "plank",
    name: "Plank",
    category: "core",
    equipment: "bodyweight",
    difficulty: "beginner",
    instructions: "Place forearms on ground with elbows under shoulders. Extend legs back, supporting weight on forearms and toes. Keep body in straight line from head to heels.",
    muscleGroups: ["core", "shoulders", "back"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "crunches",
    name: "Crunches",
    category: "core",
    equipment: "bodyweight",
    difficulty: "beginner",
    instructions: "Lie on back with knees bent, feet flat on floor. Place hands behind head or across chest. Curl shoulders off floor, focusing on contracting abdominal muscles.",
    muscleGroups: ["abs", "core"],
    defaultRestTime: 45,
    progressionMultiplier: 1.015
  },
  {
    id: "russian_twists",
    name: "Russian Twists",
    category: "core",
    equipment: "bodyweight",
    difficulty: "intermediate",
    instructions: "Sit on floor with knees bent, lean back slightly. Lift feet off ground (optional). Twist torso from side to side, touching hands to floor beside hips.",
    muscleGroups: ["obliques", "core", "abs"],
    defaultRestTime: 45,
    progressionMultiplier: 1.02
  },
  {
    id: "mountain_climbers",
    name: "Mountain Climbers",
    category: "cardio",
    equipment: "bodyweight",
    difficulty: "intermediate",
    instructions: "Start in push-up position. Bring one knee toward chest, then quickly switch legs. Continue alternating legs rapidly while maintaining plank position.",
    muscleGroups: ["core", "shoulders", "legs", "cardio"],
    defaultRestTime: 30,
    progressionMultiplier: 1.02
  },
  {
    id: "burpees",
    name: "Burpees",
    category: "cardio",
    equipment: "bodyweight",
    difficulty: "advanced",
    instructions: "Start standing, drop to squat position, place hands on ground. Kick feet back to push-up position, perform push-up. Jump feet back to squat, then jump up with arms overhead.",
    muscleGroups: ["full_body", "cardio", "core"],
    defaultRestTime: 60,
    progressionMultiplier: 1.025
  },
  {
    id: "jumping_jacks",
    name: "Jumping Jacks",
    category: "cardio",
    equipment: "bodyweight",
    difficulty: "beginner",
    instructions: "Stand with feet together, arms at sides. Jump while spreading legs shoulder-width apart and raising arms overhead. Jump back to starting position.",
    muscleGroups: ["cardio", "legs", "shoulders"],
    defaultRestTime: 30,
    progressionMultiplier: 1.015
  },
  {
    id: "push_ups",
    name: "Push-ups",
    category: "chest",
    equipment: "bodyweight",
    difficulty: "beginner",
    instructions: "Start in push-up position with hands slightly wider than shoulders. Lower body until chest nearly touches floor, then push back up to starting position.",
    muscleGroups: ["chest", "triceps", "shoulders", "core"],
    defaultRestTime: 60,
    progressionMultiplier: 1.025
  },
  {
    id: "romanian_deadlifts",
    name: "Romanian Deadlifts",
    category: "legs",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "Stand with feet hip-width apart, holding barbell in front of thighs. Hinge at hips, keeping legs straight, lowering bar toward shins. Keep back straight, then return to start.",
    muscleGroups: ["hamstrings", "glutes", "lower_back"],
    defaultRestTime: 90,
    progressionMultiplier: 1.025
  },
  {
    id: "good_mornings",
    name: "Good Mornings",
    category: "legs",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "Place barbell across upper back. Hinge at hips, keeping legs slightly bent and back straight. Lower torso until nearly parallel to floor, then return to start.",
    muscleGroups: ["hamstrings", "glutes", "lower_back"],
    defaultRestTime: 90,
    progressionMultiplier: 1.02
  },
  {
    id: "hip_thrusts",
    name: "Barbell Hip Thrusts",
    category: "legs",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "Sit on ground with upper back against bench, barbell across hips. Drive hips upward until body forms straight line from shoulders to knees. Lower and repeat.",
    muscleGroups: ["glutes", "hamstrings", "lower_back"],
    defaultRestTime: 90,
    progressionMultiplier: 1.025
  },
  {
    id: "leg_extensions",
    name: "Leg Extensions",
    category: "legs",
    equipment: "machine",
    difficulty: "beginner",
    instructions: "Sit on leg extension machine with back supported and legs under padded lever. Extend legs until straight, then slowly lower back to start position.",
    muscleGroups: ["quadriceps"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "seated_calf_raises",
    name: "Seated Calf Raises",
    category: "legs",
    equipment: "machine",
    difficulty: "beginner",
    instructions: "Sit on calf raise machine with pads on thighs. Push up onto toes as high as possible, then slowly lower heels back down.",
    muscleGroups: ["calves"],
    defaultRestTime: 45,
    progressionMultiplier: 1.015
  },
  {
    id: "shrugs",
    name: "Dumbbell Shrugs",
    category: "shoulders",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "Stand with dumbbells at sides, arms straight. Shrug shoulders upward toward ears, then lower back down. Keep arms straight throughout movement.",
    muscleGroups: ["traps", "shoulders"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "upright_rows",
    name: "Dumbbell Upright Rows",
    category: "shoulders",
    equipment: "dumbbells",
    difficulty: "intermediate",
    instructions: "Stand with dumbbells in front of thighs, palms facing body. Pull dumbbells up to chest level, keeping them close to body. Lead with elbows.",
    muscleGroups: ["shoulders", "traps", "biceps"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "concentration_curls",
    name: "Concentration Curls",
    category: "arms",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "Sit on bench, lean forward with elbow resting on inner thigh. Hold dumbbell with arm extended. Curl dumbbell toward shoulder, focusing on bicep contraction.",
    muscleGroups: ["biceps", "forearms"],
    defaultRestTime: 60,
    progressionMultiplier: 1.015
  },
  {
    id: "preacher_curls",
    name: "Preacher Curls",
    category: "arms",
    equipment: "machine",
    difficulty: "intermediate",
    instructions: "Sit at preacher curl bench, arms resting on pad. Grip barbell with underhand grip. Curl bar toward shoulders, then slowly lower back to start.",
    muscleGroups: ["biceps", "forearms"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "skullcrushers",
    name: "Skull Crushers",
    category: "arms",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "Lie on bench with barbell held above chest, arms straight. Lower bar toward forehead by bending elbows. Extend arms back to start position.",
    muscleGroups: ["triceps"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "close_grip_bench_press",
    name: "Close Grip Bench Press",
    category: "arms",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions: "Lie on bench, grip barbell with hands shoulder-width apart. Lower bar to lower chest, keeping elbows tucked close to body. Press back up to start.",
    muscleGroups: ["triceps", "chest", "shoulders"],
    defaultRestTime: 90,
    progressionMultiplier: 1.025
  },
  {
    id: "side_bends",
    name: "Side Bends",
    category: "core",
    equipment: "dumbbells",
    difficulty: "beginner",
    instructions: "Stand with dumbbell in one hand. Bend sideways at waist, lowering dumbbell toward knee. Return to upright position and repeat on both sides.",
    muscleGroups: ["obliques", "core"],
    defaultRestTime: 45,
    progressionMultiplier: 1.015
  },
  {
    id: "hanging_leg_raises",
    name: "Hanging Leg Raises",
    category: "core",
    equipment: "bodyweight",
    difficulty: "intermediate",
    instructions: "Hang from pull-up bar with arms straight. Raise legs straight up until parallel to floor, then slowly lower back down with control.",
    muscleGroups: ["abs", "hip_flexors", "core"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "cable_crunches",
    name: "Cable Crunches",
    category: "core",
    equipment: "cable",
    difficulty: "intermediate",
    instructions: "Kneel in front of cable machine with rope attachment. Hold rope behind head. Crunch forward, bringing elbows toward knees. Focus on abdominal contraction.",
    muscleGroups: ["abs", "core"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "box_jumps",
    name: "Box Jumps",
    category: "cardio",
    equipment: "bodyweight",
    difficulty: "intermediate",
    instructions: "Stand in front of sturdy box or platform. Jump onto box, landing softly with both feet. Step back down and repeat.",
    muscleGroups: ["legs", "glutes", "cardio", "core"],
    defaultRestTime: 90,
    progressionMultiplier: 1.025
  },
  {
    id: "battle_ropes",
    name: "Battle Ropes",
    category: "cardio",
    equipment: "battle_ropes",
    difficulty: "intermediate",
    instructions: "Hold ends of battle ropes, stand with feet shoulder-width apart. Alternate raising and lowering arms to create waves in the ropes.",
    muscleGroups: ["full_body", "cardio", "shoulders", "core"],
    defaultRestTime: 60,
    progressionMultiplier: 1.02
  },
  {
    id: "kettlebell_swings",
    name: "Kettlebell Swings",
    category: "cardio",
    equipment: "kettlebell",
    difficulty: "intermediate",
    instructions: "Stand with feet shoulder-width apart, holding kettlebell with both hands. Hinge at hips, swinging kettlebell back between legs. Drive hips forward to swing kettlebell to shoulder height.",
    muscleGroups: ["glutes", "hamstrings", "core", "cardio"],
    defaultRestTime: 90,
    progressionMultiplier: 1.025
  }
];

export const exerciseCategories = [
  { value: 'chest', label: 'Chest' },
  { value: 'back', label: 'Back' },
  { value: 'shoulders', label: 'Shoulders' },
  { value: 'arms', label: 'Arms' },
  { value: 'legs', label: 'Legs' },
  { value: 'core', label: 'Core' },
  { value: 'cardio', label: 'Cardio' }
];

export const equipmentTypes = [
  { value: 'barbell', label: 'Barbell' },
  { value: 'dumbbells', label: 'Dumbbells' },
  { value: 'bodyweight', label: 'Bodyweight' },
  { value: 'cable', label: 'Cable Machine' },
  { value: 'machine', label: 'Machine' },
  { value: 'kettlebell', label: 'Kettlebell' },
  { value: 'battle_ropes', label: 'Battle Ropes' }
];

export const difficultyLevels = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' }
];