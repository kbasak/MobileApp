import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
//import config from '';
import { useNavigation } from "@react-navigation/native";
import config from '../../auth0-configuration';
import Secure_items from '../Constants/Secure_items';
import { AntDesign, Feather } from '@expo/vector-icons';
import PrimaryButton from '../components/PrimaryButton';


const Login = ({ logout }) => {
  const { authorize, clearSession, user, error, getCredentials, isLoading } = useAuth0();
  const navigation = useNavigation();
    

  const onLogin = async () => {
    try {
      await authorize();
      let credentials = await getCredentials();
      const accessToken = credentials.accessToken;
      try {
        if (user) Secure_items.credentialsOkta = user.pfx_username;
      } catch (e) {
        Alert.alert("New Try error");
      }
    } catch (e) {
      console.log("Okta Login Issues");
    }
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      console.log("Hello")
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  const onCancel = () => {
      console.log("Hello123")
      navigation.navigate('BottomTabStack');  
  };

  if (isLoading) {
    return <View style={styles.container}><Text>Loading</Text></View>;
  }
  

  return (

    (loggedIn) ?
      (
        (logout) ?
          (
            <View style={styles.centeredView}>
              <View style={styles.centeredView}>
                <AntDesign name="logout" size={65} color="#000000" style={{ marginBottom: 40, marginTop: 15 }} />
                <Text style={{
                  fontSize: 22,
                  paddingBottom: 10,
                  fontFamily: 'sans-serif',
                }}>
                  Please Confirm To LogOut </Text>
                <View style={{ flexDirection: 'row' }}>
                  {console.log(logout)}
                  <PrimaryButton onPress={onCancel}>Cancel</PrimaryButton>
                  <PrimaryButton onPress={onLogout}>Confirm</PrimaryButton>
                </View>
              </View>
            </View >
          )
          :
          <>
            {user && <Text>{Secure_items.credentialsOkta = user.pfx_username}</Text>}
            {user && <Text>{Secure_items.token = user["https://pfxmobile.access.token"]}</Text>}
            {navigation.navigate('BottomTabStack')}
          </>
      )
      :
      (
        loggedIn  ?
          (
            <View style={styles.centeredView}>
              <View style={[styles.modalView]}>
                <Feather name="loader" size={50} color="#000000" style={{ marginBottom: 16, marginTop: 25 }} />
                <Text style={{
                  fontSize: 20,
                  paddingBottom: 0,
                  fontFamily: 'sans-serif-medium',
                  textAlign: 'center'
                }}>
                  Loading ...
                </Text>
              </View>
            </View>
          )
          :
          (
            <View style={[styles.centeredView, { marginTop: 0 }]}>
              <View style={styles.centeredView}>
                <Text style={styles.header}> Mobile.App Login </Text>
                {user && <Text>You are logged in as {user.name}</Text>}
                {user && <Text>You are logged in as {user.pfx_username}</Text>}
                {error && <Text>{error.message}</Text>}
                <AntDesign name="login" size={65} color="#000000" style={{ marginBottom: 5, marginTop: 50 }} />
                <PrimaryButton onPress={onLogin}>LOGIN</PrimaryButton>
              </View>
            </View >
          )
      )
  );
};

const App1 = ({ route }) => {
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    if (route.params) {
      const logoutStatus = route.params.isLogout;
      setLogout(logoutStatus);
      Alert.alert(logout);
      console.log(logout + '2');
    }
  })
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <Login logout={logout}/>
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
    fontSize: 27,
    textAlign: 'center',
    margin: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  modalView: {
    maxWidth: '60%',
    maxHeight: '30%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 100,
  },
});

export default App1;