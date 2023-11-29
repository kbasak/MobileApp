import 'react-native-gesture-handler';
import * as React from 'react';

import { StatusBar, StyleSheet} from 'react-native';
import LoginMpinScreen from './src/screens/LoginMpinScreen';
import MyTabs from './src/navigators/navigation'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Import native-stack navigator like this
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Create Native-Stack Navigator like this
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();




const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#000c5b'/>
    <Stack.Navigator
      initialRouteName="LoginMpin" style={styles.container}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginMpin" component={LoginMpinScreen} options={{headerShown: false}} />
      <Stack.Screen name="BottomTabStack" component={MyTabs} options={{headerShown: false}} />

    </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;