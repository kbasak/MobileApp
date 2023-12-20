import React from "react";
import { Text, View,TouchableOpacity, StyleSheet, Linking } from "react-native";
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
      <View style={{ backgroundColor: '#DDDDDD' }}>
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
    );
  }
   
  const styles = StyleSheet.create({
    text: {
      margin: 10,
      fontSize: 18,
      color: '#2b2bcd',
      fontSize: 24,
      fontWeight: 'bold'
    },
  });
   
  export default HelpScreen;
  