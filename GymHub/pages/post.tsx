// More detailed boilerplate workout log page with workout details
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const WorkoutLog = () => {
  const [workoutsDone, setWorkoutsDone] = React.useState(0);
  const [workoutName, setWorkoutName] = React.useState('');
  const [workoutWeight, setWorkoutWeight] = React.useState('');
  const [workoutReps, setWorkoutReps] = React.useState('');

  const renderWorkouts = () => {
    const workoutList = [];
    for (let i = 0; i < workoutsDone; i++) {
      workoutList.push(
        <View key={i}>
          <Text>Workout {i + 1}</Text>
          <TextInput
            value={workoutName}
            onChangeText={(text) => setWorkoutName(text)}
            placeholder="Workout Name"
          />
          <TextInput
            value={workoutWeight}
            onChangeText={(text) => setWorkoutWeight(text)}
            keyboardType="numeric"
            placeholder="Weight (lbs)"
          />
          <TextInput
            value={workoutReps}
            onChangeText={(text) => setWorkoutReps(text)}
            keyboardType="numeric"
            placeholder="Reps"
          />
        </View>
      );
    }
    return workoutList;
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to your workout log!</Text>
      <Text>Track your progress here.</Text>
      <View>
        <TextInput
          value={workoutsDone.toString()}
          onChangeText={(text) => setWorkoutsDone(parseInt(text) || 0)}
          keyboardType="numeric"
          placeholder="Workouts Done"
        />
        {renderWorkouts()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WorkoutLog;