// More detailed boilerplate workout log page with workout details
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutLog = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to your workout log!</Text>
      <Text>Track your progress here.</Text>
      <View>
        <Text>Workouts Done: 5</Text>
        <Text>Max Weight: 100 lbs</Text>
      </View>
      {/* Add workout log components here */}
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


