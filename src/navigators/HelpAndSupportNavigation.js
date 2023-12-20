import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FAQ from '../screens/settings menu/FAQScreen';

import HelpAndSupportScreen from '../screens/settings menu/HelpAndSupportScreen';
import HelpScreen from '../screens/settings menu/HelpScreen';
import PrivacyPolicy from '../screens/settings menu/PrivacyPolicyScreen';
import TermsAndConditions from '../screens/settings menu/TermsConditionsScreen';

const Stack = createNativeStackNavigator();

const HelpAndSupportStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HelpAndSupport" component={HelpAndSupportScreen} />
        <Stack.Screen name="Help" component={HelpScreen} options={{headerShown: true}}/>
        <Stack.Screen name="FAQ" component={FAQ} options={{headerShown: true}}/>
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{headerShown: true}}/>
        <Stack.Screen name="TermsConditions" component={TermsAndConditions} options={{headerShown: true}}/>

      </Stack.Navigator>
    );
  };

  export default HelpAndSupportStack;