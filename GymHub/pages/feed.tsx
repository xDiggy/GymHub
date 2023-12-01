// Boilerplate social media feed page
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Feed</Text>
      {/* Add feed content here */}
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
