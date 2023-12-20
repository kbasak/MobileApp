import React from "react";
import { Text, View,TouchableOpacity, StyleSheet, Linking, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

function HelpScreen() {
    const navigation = useNavigation();
   
    const contentList = [
      'FAQ',
      'Privacy Policy',
      'Terms and Conditions',
    ];
   
    const handleContentPress = (content) => {
      switch (content) {
        case 'FAQ':
          navigation.navigate('FAQ');
          //Linking.openURL("")
          break;
        case 'Privacy Policy':
          navigation.navigate('PrivacyPolicy');
          break;
        case 'Terms and Conditions':
          navigation.navigate('TermsConditions');
          break;
        // Add more cases for additional content
        default:
          break;
      }
    };
   
    return (
      
      <SafeAreaView >
      <View style={{ backgroundColor: '#DDDDDD', padding: 16 }}>
        <View style={{ backgroundColor: 'white' }}>
          {contentList.map((content, index) => (
            <View key={index} style={{
              borderBottomWidth: 3,
              borderBottomColor: '#DDDDDD', padding: 10
            }}>
              <TouchableOpacity onPress={() => handleContentPress(content)}>
                <Text style={styles.text}>{content}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      </SafeAreaView>
    );
  }
   
  const styles = StyleSheet.create({
    text: {
      marginVertical: 8,
      fontSize: 18,
      color: '#2b2bcd',
      fontWeight: 'bold'
    },
  });

  
   
  export default HelpScreen;
  