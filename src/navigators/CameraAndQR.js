import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BarCodeScan from '../screens/cameraAndqr/BarCodeScan';
import CameraAndScan from '../screens/cameraAndqr/CameraAndScan';
import CameraView from '../screens/cameraAndqr/CameraView';


const Stack = createNativeStackNavigator();

const CameraAndScanStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#000455', //Set Header color
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="CameraAndScan" component={CameraAndScan} />
        <Stack.Screen name="Camera" component={CameraView}
          options={{
            headerShown: true,
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20,
              marginLeft:-16
            }
          }} />
        <Stack.Screen name="Scanner" component={BarCodeScan} options={{headerShown: true}}/>
      </Stack.Navigator>
    );
  }

  export default CameraAndScanStack;