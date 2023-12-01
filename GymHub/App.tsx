import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import config from './auth0-configuration';
import { Image } from 'react-native';

const Home = () => {
  const {authorize, clearSession, user, getCredentials, error, isLoading} = useAuth0();

  const handleLogin = async () => {
    await authorize({}, {});
    const credentials = await getCredentials();
    Alert.alert('AccessToken: ' + credentials?.accessToken);
  };

  const isLoggedIn = user !== undefined && user !== null;

  const handleLogout = async () => {
    await clearSession({}, {});
  };

  if (isLoading) {
    return <View style={styles.container}><Text>Loading</Text></View>;
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      {user && <Text>You are logged in as {user.name}</Text>}
      {!user && <Text>You are not logged in</Text>}
      {user && <Image source={{uri: 'https://cataas.com/cat'}} style={{width: 200, height: 200}} />}
      {!user && 
        <Button
          onPress={handleLogin}
          title='Log In'
        />
      }
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
};

const App = () => {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <Home />
    </Auth0Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  error: {
    margin: 20,
    textAlign: 'center',
    color: '#D8000C'
  }
});

export default App;