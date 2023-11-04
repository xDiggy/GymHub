// import React from 'react';
// import {Alert, Button, StyleSheet, Text, View} from 'react-native';
// import {useAuth0, Auth0Provider} from 'react-native-auth0';
// import config from './auth0-configuration';

// const Home = () => {
//   const {authorize, clearSession, user, getCredentials, error, isLoading} = useAuth0();

//   const onLogin = async () => {
//     await authorize({}, {});
//     const credentials = await getCredentials();
//     Alert.alert('AccessToken: ' + credentials?.accessToken);
//   };

//   const loggedIn = user !== undefined && user !== null;

//   const onLogout = async () => {
//     await clearSession({}, {});
//   };


//   if (isLoading) {
//     return <View style={styles.container}><Text>Loading</Text></View>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}> Auth0Sample - Login </Text>
//       {user && <Text>You are logged in as {user.name}</Text>}
//       {!user && <Text>You are not logged in</Text>}
//       <Button
//         onPress={loggedIn ? onLogout : onLogin}
//         title={loggedIn ? 'Log Out' : 'Log In'}
//       />
//       {error && <Text style={styles.error}>{error.message}</Text>}
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <Auth0Provider domain={config.domain} clientId={config.clientId}>
//       <Home />
//     </Auth0Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   header: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   error: {
//     margin: 20,
//     textAlign: 'center',
//     color: '#D8000C'
//   }
// });

// export default App;

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type User = FirebaseAuthTypes.User | null;

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}