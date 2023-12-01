// Boilerplate social media profile page
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.profileImage}
      />
      <Text style={styles.username}>John Doe</Text>
      <Text style={styles.bio}>This is my bio</Text>
      <View style={styles.stats}>
        <Text>Followers: 100</Text>
        <Text>Following: 50</Text>
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    marginVertical: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default Profile;
