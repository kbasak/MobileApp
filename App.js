import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View,Image } from 'react-native';
import DashboardScreen from './src/screens/DashboardScreen';
import HomeScreen from './src/screens/HomeScreen';
import InfoScreen from './src/screens/InfoScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ClaimScreen from './src/screens/SubmitClaim';
import ProfileScreen from './src/screens/MyProfile';
import CardsScreen from './src/screens/MyCards';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons,Ionicons,Feather,FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';

//Import native-stack navigator like this
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';

//Create Native-Stack Navigator like this
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = props=>{
  return(
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
      <View style={{flexDirection:'row', justifyContent:'space-between', padding:20
    , alignItems:'center',backgroundColor:'#f4511e', marginBottom:20}}>
        <View>
          <Text style={{color:'#fff'}}>Karthik</Text>
          <Text style={{color:'#fff'}}>Karthik@gmail.com</Text>
        </View>
        <Image source={{uri:'https://www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg'}}
         style={{width:60,height:60, borderRadius:30}}/>
      </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
    <TouchableOpacity style={{height:60, backgroundColor:'#f4511e', alignItems:'center',justifyContent:'center'}}>
<Text style={{color:'white'}}>Logout</Text>
    </TouchableOpacity>
    </View>
  );
}

const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabStack" component={MyTabs} />
    </Stack.Navigator>
  );
};

const SettingScreenStack = () => {
  return (
    <Stack.Navigator      
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const SubmitClaimStack = () => {
  return (
    <Stack.Navigator      
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Claims" component={ClaimScreen} />
    </Stack.Navigator>
  );
};

const MyProfileStack = () => {
  return (
    <Stack.Navigator      
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyProfile" component={ProfileScreen} />
    </Stack.Navigator>
  ); 
};
const MyCardsStack = () => {
  return (
    <Stack.Navigator      
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyCards" component={CardsScreen} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="DashBoard"
      activeColor="#e91e63"
      inactiveColor='blue'
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons  name="home" size={26} color={color} />       
          ),
        }}
      />
      <Tab.Screen
        name="Manage"
        component={InfoScreen}
        options={{
          tabBarLabel: 'Manage',
          tabBarIcon: ({ color }) => (
            <FontAwesome  name="dollar" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color }) => (
            <Feather  name="info" size={26} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons  name="settings-outline" size={26} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer(){  
  return(
    <NavigationContainer>
     <Drawer.Navigator drawerContent={(props)=> <CustomDrawer{...props}/>}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{
            drawerLabel: 'Home Screen Option',
            title: 'Home Screen',
          }}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="SettingScreenStack"
          options={{
            drawerLabel: 'Setting Screen Option',
            title: 'Setting Screen',
          }}
          component={SettingScreenStack}
        />
         <Drawer.Screen
          name="Submit Claim"
          options={{
            drawerLabel: 'Submit Claim',
            title: 'Submit Claim',
          }}
          component={SubmitClaimStack}
        />
          <Drawer.Screen
          name="My Profile"
          options={{
            drawerLabel: 'My Profile',
            title: 'My Profile',
          }}
          component={MyProfileStack}
        />
         <Drawer.Screen
          name="My Cards"
          options={{
            drawerLabel: 'My Cards',
            title: 'My Cards',
          }}
          component={MyCardsStack}
        />
      </Drawer.Navigator>  
      </NavigationContainer>  
  );
     
}
/* function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
} */

export default MyDrawer;