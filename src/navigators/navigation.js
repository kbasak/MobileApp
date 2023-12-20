import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import ManageScreen from '../screens/ManageScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ClaimScreen from '../screens/SubmitClaim';
import ProfileScreen from '../screens/MyProfile';
import CardsScreen from '../screens/MyCards';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

//Import native-stack navigator like this
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import HelpAndSupportScreen from '../screens/settings menu/HelpAndSupportScreen';
import MyCart from '../screens/MyCart';
import HelpScreen from '../screens/settings menu/HelpScreen';
import HelpAndSupportStack from './HelpAndSupportNavigation';
import CameraAndScan from '../screens/cameraAndqr/CameraAndScan';
import CameraAndScanStack from './CameraAndQR';



//Create Native-Stack Navigator like this
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();


const CustomDrawer = props => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('LoginMpin');
  }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', padding: 20
          , alignItems: 'center', backgroundColor: '#000455', marginTop:-4
        }}>
          <View>
            <Text style={{ color: '#fff',fontFamily: 'Roboto', fontWeight: '600', fontSize: 16, }}>Karthik</Text>
            <Text style={{ color: '#fff',fontFamily: 'Roboto', fontWeight: '600', fontSize: 16, }}>Karthik@gmail.com</Text>
          </View>
          <Image source={{ uri: 'https://www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg' }}
            style={{ width: 60, height: 60, borderRadius: 30 }} />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={{ height: 60, backgroundColor: '#000455', alignItems: 'center', justifyContent: 'center' }}
        onPress={handleLogout} >
        <Text style={{
          color: 'white', fontFamily: 'sans-serif-condensed', fontWeight: '600', fontSize: 18,
        }} >Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

// const HomeScreenStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="HomeScreen"
//       screenOptions={{headerShown: false}}>
//       <Stack.Screen name="BottomTabStack" component={MyTabs} />
//     </Stack.Navigator>
//   );
// };

const SettingScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

// const HelpAndSupportStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{ headerShown: true }}>
//       <Stack.Screen name="HelpAndSupport" component={HelpAndSupportScreen} />
//       <Stack.Screen name="Help" component={HelpScreen} />

//     </Stack.Navigator>
//   );
// };

const SubmitClaimStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Claims" component={ClaimScreen} />
    </Stack.Navigator>
  );
};

const MyProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyProfile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const MyCardsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyCards" component={CardsScreen} />
    </Stack.Navigator>
  );
}

// const CameraAndScanStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="CameraAndScan" component={CameraAndScan} />
//     </Stack.Navigator>
//   );
// }

function MyTabs() {
  return (
    <Tab.Navigator
      // initialRouteName="DashBoard"
      initialRouteName="Home"
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
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Manage"
        component={ManageScreen}
        options={{
          tabBarLabel: 'Manage',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="dollar" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color }) => (
            <Feather name="info" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (

    <Drawer.Navigator drawerContent={(props) => <CustomDrawer{...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000455', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
      }}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{
          drawerLabel: 'Home',
          title: 'inspira',
          headerTitleStyle: {
            color: '#ffd620ff',
            fontWeight: 'bold',
            fontSize: 24,
            marginLeft: -16,
            textDecorationLine: 'underline',
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={MyTabs}
      />
      <Drawer.Screen
        name="SettingScreenStack"
        options={{
          drawerLabel: 'Settings',
          title: 'Settings',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={SettingScreenStack}
      />
      <Drawer.Screen
        name="Submit Claim"
        options={{
          drawerLabel: 'Submit Claim',
          title: 'Submit Claim',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={SubmitClaimStack}
      />
      <Drawer.Screen
        name="My Profile"
        options={{
          drawerLabel: 'My Profile',
          title: 'My Profile',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={MyProfileStack}
      />
       <Drawer.Screen
        name="Camera & Scan"
        options={{
          drawerLabel: 'Photo/QR',
          title: 'Photo/QR',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={CameraAndScanStack}
      />
      <Drawer.Screen
        name="My Cards"
        options={{
          drawerLabel: 'My Cards',
          title: 'My Cards',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={MyCardsStack}
      />
      <Drawer.Screen
          name="My Cart"
          options={{
            drawerLabel: 'My Cart',
            title: 'My Cart',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: '700',
              fontSize: 22,
              marginLeft: -16,
              fontFamily: 'sans-serif-condensed'
            },
          }}
          component={MyCart}
      />  
      <Drawer.Screen
        name="Help & Support"
        options={{
          drawerLabel: 'Help & Support',
          title: 'Help & Support',
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
            fontSize: 22,
            marginLeft: -16,
            fontFamily: 'sans-serif-condensed'
          },
        }}
        component={HelpAndSupportStack}
      />
    </Drawer.Navigator>

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