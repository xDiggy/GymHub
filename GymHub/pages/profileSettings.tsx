// Settings page for social media app
import React from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';

const ProfileSettings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Bio" />
      <TextInput placeholder="Display Name" />
      <TextInput placeholder="Age" />
      {/* Add more fields as needed */}
      <View style={styles.toggleContainer}>
        <Text>Public Page</Text>
        <Switch />
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
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProfileSettings;

