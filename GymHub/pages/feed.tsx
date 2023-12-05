// Boilerplate social media feed page
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { workouts } from '../dummy/workouts';

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Feed</Text>
      {workouts.map((workout, index) => (
        <View key={index}>
          <Text>{workout.workoutName}</Text>
          <Text>{workout.workoutWeight}</Text>
          <Text>{workout.workoutReps}</Text>
          <Text>User ID: {workout.userID}</Text>
        </View>
      ))}
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

export default Feed;
