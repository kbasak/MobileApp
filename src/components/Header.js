import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Header = ()=>{
return(
<View style={styles.bottomView}>
    <Text style={styles.textStyle}>Top View</Text>
  </View>);
}
const styles = StyleSheet.create({
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
      },    
})

export default Header;