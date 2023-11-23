import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const Footer = ()=>{
  return(
    <View style={styles.footer}>
        <Text>This footer will be pushed to the bottom</Text>  
      </View>)
  
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "blue",
        padding: 40
      }  
})
export default Footer;