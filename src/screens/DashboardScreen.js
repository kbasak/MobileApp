import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Footer from '../components/Footer';
import { MaterialCommunityIcons,Ionicons,Feather,FontAwesome } from '@expo/vector-icons';

 const DashBoard = ({navigation}) => {
  return (
       
    <View style={styles.container}>    
      <View style={styles.content}>
        <View style={styles.staticContainer}>
          <Text style={styles.scFont}>LOGIN INFORMATION</Text>
          </View>  
        <View style={styles.dynamiccontainer}>
          <View  style={{flex: 1.5,fontSize:25,fontFamily:'calibri'}}><Text style={styles.dc1}>UserName</Text></View>
          <View  style={{flex: 3,fontSize:25,fontFamily:'calibri'}}><Text style={styles.dc2}>middle text</Text></View>
          <View  style={{flex: 0.5,paddingTop:6}}><MaterialCommunityIcons style={styles.dc3} name="greater-than" size={20} color="orange" /></View>                              
          </View>      
      </View>      
    {/*   <View style={styles.footer}>
      <MaterialCommunityIcons style={styles.f1} name="home" size={50} color="blue" onPress={() => navigation.navigate('Home')} />       
      <FontAwesome style={styles.f2} name="dollar" size={50} color="blue" />
      <Feather style={styles.f3} name="info" size={50} color="blue" onPress={() => navigation.navigate('Info')}/>
      <Ionicons style={styles.f4} name="settings-outline" size={50} color="blue" onPress={() => navigation.navigate('Settings')}/>
      </View> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  scFont:{fontSize:30,fontFamily:'calibri',textAlign:'center'},
  dynamiccontainer:{height:60,flexDirection:'row',borderBottomColor:'#E1D8D8', borderBottomWidth:5},
  staticContainer:{backgroundColor:'#E1D8D8',height:70,},
  f1:{paddingLeft:20, paddingTop:2, width:100},
  f2:{paddingLeft:20, paddingTop:2,width:100},
  f3:{paddingLeft:20, paddingTop:2,width:100},
  f4:{paddingLeft:20, paddingTop:2,width:100},
  dc1:{ paddingTop:10,textAlign:'center',fontSize:20,fontFamily:'calibri',borderwidth:2,borderColor:'red'},
  dc2:{ paddingTop:10,textAlign:'left',fontSize:20,fontFamily:'calibri',borderwidth:2,borderColor:'red'},
  dc3:{ alignItems:'flex-end', paddingTop:12,borderwidth:2,borderColor:'red'},
    header: {
      flex: 1,
    backgroundColor: "blue",
    padding: 40
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    backgroundColor:  '#E1D8D8',
    height: 60,
    flexDirection:'row',
    justifyContent :'center'
  }
});

export default DashBoard;
