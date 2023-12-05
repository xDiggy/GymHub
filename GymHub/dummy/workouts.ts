function generateUserID() {
  // Generate a unique user ID
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const fillerWorkoutData = [];
for (let i = 0; i < 100; i++) {
  const userID = generateUserID();  // Assuming there's a function to generate a unique user ID
  fillerWorkoutData.push({
    workoutName: `Workout ${i + 1}`,
    workoutWeight: `${Math.floor(Math.random() * 100) + 1} lbs`,
    workoutReps: `${Math.floor(Math.random() * 10) + 1} reps`,
    userID: userID,
  });
}
export const workouts = fillerWorkoutData;