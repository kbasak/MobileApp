import React from "react";
import { Text, View,StyleSheet, ProgressBarAndroid  } from "react-native";
import Secure_items from "../Constants/Secure_items";
//import {ProgressBarAndroid} from '@react-native-community/progress-bar-android';




const MyCart = () => {
  
    return (
        <><View><Text style={{ paddingVertical: '10%', fontSize: 18, textAlign: 'center' }}>My cart work in progress...</Text>
            <Text style={{ paddingBottom: '20%' }}>{Secure_items.token}</Text>
            <Text style={{ paddingBottom: '20%' }}>{Secure_items.token.toString()}</Text>
            <Text style={{color:'#1da1f2',fontSize:50, paddingVertical:"10%",paddingHorizontal:"30%"}}>hello</Text>
            <Text style={{color:'#1E90FF',fontSize:50, paddingVertical:5,paddingHorizontal:"30%"}}>hello</Text>
            <Text style={{color:'#1F75FE',fontSize:50, paddingVertical:5,paddingHorizontal:"30%"}}>hello</Text>

        </View>
        <View style={styles.example}>
                <Text>Fixed Progress Value</Text>
                <ProgressBarAndroid
                    styleAttr="Horizontal" style={{borderRadius:10,transform: [{ scaleX: 1.0 }, { scaleY: 4.5 }],}}
                    indeterminate={false} color="blue" height='40'
                    progress={Math.max(0,Math.min(1,(500-70)/500))} />
            </View></>

    )
}
export default MyCart;


 
const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    color: 'blue',
    padding: 10,
    fontSize: 18,
    marginTop: 20,
  },
  example: {
    marginVertical: 24,
    width:'80%',
    paddingHorizontal:20,
    
  },
});
 
