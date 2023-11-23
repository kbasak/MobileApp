import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import { MaterialCommunityIcons,Ionicons,Feather,FontAwesome } from '@expo/vector-icons';

const Home = () => {
  return (

    <View>
      <View style={styles.dynamiccontainer}>
        <View style={{ flex: 3, fontSize: 25, fontFamily: 'sans-serif' }}><Text style={styles.dc1}>Health Savings Account</Text>
          <Text style={{ paddingLeft: 10, textAlign: 'left' }}>Employer Name</Text>
        </View>
        <View style={{ flex: 1.5, fontSize: 25, fontFamily: 'sans-serif' }}><Text style={styles.dc2}>5000</Text></View>
        <View style={{ flex: 0.5, paddingTop: 6 }}><MaterialCommunityIcons style={styles.dc3} name="greater-than" size={20} color="orange" /></View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
dc1:{ paddingTop:15,textAlign:'center',color:'blue',fontSize:20,fontFamily:'sans-serif',borderWidth:2,borderColor:'red'},
  dc2:{ paddingTop:15,textAlign:'left',color:'blue',fontSize:20,fontFamily:'sans-serif',borderWidth:2,borderColor:'red'},
  dc3:{ alignItems:'flex-end', paddingTop:15,borderWidth:2,borderColor:'red'},
    dynamiccontainer:{height:100,flexDirection:'row',borderBottomColor:'#E1D8D8', borderBottomWidth:5},

});

export default Home;