// import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

// function HelpAndSupportScreen({navigation}) {

//     const list = [
//         'Contact Us',
//         'Accessibilty Services',
//         'Nondiscrimination Notice',
//         'SIGIS User Agreement',
//         'Disclaimers',
//         'Help'
//     ]

//     return (
//         < View style={{ backgroundColor: '#DDDDDD' }}>
//             <View style={{ backgroundColor: 'white' }}>
//                 {list.map((option, index) => (
//                     <View key={index} style={{
//                         borderBottomWidth: 3,
//                         borderBottomColor: '#DDDDDD', padding: 10
//                     }}>
//                         <TouchableOpacity>
//                             <Text style={styles.text}>{option}</Text>
//                         </TouchableOpacity>
//                     </View>

//                 ))}
//             </View>
//         </View >
//     )
// }

// export default HelpAndSupportScreen;

// const styles = StyleSheet.create({
//     text: {
//         margin: 10,
//         fontSize: 18,
//         color: '#2b2bcd',
//         fontSize: 24,
//         fontWeight: 'bold'
//     },
// });


import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
 
function HelpAndSupportScreen() {
  const navigation = useNavigation();
 
  const list = [
    'Contact Us',
    'Accessibility Services',
    'Nondiscrimination Notice',
    'SIGIS User Agreement',
    'Disclaimers',
    'Help'
  ];
 
  const handleOptionPress = (option) => {
    if (option === 'Help') {
      navigation.navigate('Help');
    } else {
      // Handle other options as needed
    }
  };
 
  return (
    <SafeAreaView>
    <View style={{ backgroundColor: '#DDDDDD', padding:16 }}>
      
        {list.map((option, index) => (
          <View key={index} style={{
            borderBottomWidth: 3,
            borderBottomColor: '#DDDDDD', padding: 10,

            backgroundColor: 'white', 
          }}>
            <TouchableOpacity onPress={() => handleOptionPress(option)}>
              <Text style={styles.text}>{option}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    
    </SafeAreaView>
  );
}
 
export default HelpAndSupportScreen;
 
const styles = StyleSheet.create({
  text: {
    marginVertical: 8,
    fontSize: 18,
    color: '#2b2bcd',
    fontWeight: 'bold'
  },
});