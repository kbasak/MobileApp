import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
//import config from '';
import { useNavigation } from "@react-navigation/native";
import config from '../../auth0-configuration';
import Secure_items from '../Constants/Secure_items';
import { TextInput } from 'react-native-gesture-handler';
import { authenticationMember } from '../util/Authentication';


const Login = () => {
  const {authorize, clearSession, user, error, getCredentials, isLoading} = useAuth0();
  const navigation = useNavigation();

  const onLogin = async () => {
    try {
      await authorize();
      let credentials = await getCredentials();
      const accessToken = credentials.accessToken;
      Alert.alert(accessToken);
      var errorLog='1';
      if (accessToken !== '') {
        try {
          errorLog='2';
          const userData = {
            "UserName": "MILLYHSATEST",
            "Password": "Test@123",
            "Referer": ""
          }
          errorLog='3';
          let jwtToken = await authenticationMember(userData);
          errorLog='4';
          Alert.alert(jwtToken);
          Alert.alert(Secure_items.token);
          navigation.navigate('BottomTabStack');
        } catch (e) {
          Alert.alert(errorLog+" Authentication Problem ");
        }
      } else {
        Alert.alert("Access Token Problem");
      }
      //Alert.alert('AccessToken: ' + credentials.accessToken);
    } catch (e) {
      console.log("Okta Login Issues");
    }
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  if (isLoading) {
    return <View style={styles.container}><Text>Loading</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      {user && <Text>You are logged in as {user.name}</Text>}
      {!user && <Text>You are not logged in</Text>}
      {error && <Text>{error.message}</Text>}
      <TextInput value={Secure_items.token} style={{ flex: 1 }} />
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
    </View>
  );
};

const App1 = () => {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <Login />
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
});

export default App1;