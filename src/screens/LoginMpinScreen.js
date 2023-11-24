import React, { useState } from 'react';
import { View, TextInput, Text, Button,Image , Alert, StyleSheet, ImageBackground } from 'react-native';

const LoginMpinScreen = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [mpin, setMpin] = useState('');
    const [isMpinMode, setIsMpinMode] = useState(false);

    const staticUserData = {
        userName: 'staticUser',
        password: 'staticPassword',
        staticMpin: '123456',
    };

    //   const handleLogin = () => {
    //     if (isMpinMode) {
    //       if (mpin === staticUserData.staticMpin) {
    //         navigation.navigate('Home');
    //       } else {
    //         Alert.alert('Invalid MPIN');
    //       }
    //     } else {
    //       if (userName === staticUserData.userName && password === staticUserData.password) {
    //         navigation.navigate('Home');
    //       } else {
    //         Alert.alert('Invalid credentials');
    //       }
    //     }
    //   };       -------------this above code will allow user to navigate back to login without pressing logout button just by clicking on topleft side backward arrow. ----------------

    const handleLogin = () => {
        if (isMpinMode) {
            if (mpin === staticUserData.staticMpin) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'BottomTabStack' }],
                }
                );
            } else {
                Alert.alert('Invalid MPIN');
            }
        } else {
            if (userName === staticUserData.userName && password === staticUserData.password) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'BottomTabStack' }],
                });
            } else {
                Alert.alert('Invalid credentials');
            }
        }
    }; //------ the above code ensures that a logged in user won't be able to go back to login screen without logging out.

    return (
        <ImageBackground source={require('../images/Login_bg.jpg')} 
            style={styles.backgroundColor}>
        <View style={styles.container}>
            
            <Image source={require('../images/Login_logo.jpg')} style={styles.logo} />
            
            <View style={styles.box}>   
            <View>
                <Text style={styles.text}>Welcome to MTC </Text>
            </View>
            {isMpinMode ? (
                <View>
                    <TextInput
                        placeholder="Enter 6-digit MPIN"
                        value={mpin}
                        onChangeText={setMpin}
                        keyboardType="numeric"
                        maxLength={6}
                        secureTextEntry
                        style={styles.input}
                    />
                    <View style={styles.button}>
                        <Button title="Submit MPIN" onPress={handleLogin} />
                    </View>
                </View>
            ) : (
                <View>
                    <TextInput
                        placeholder="Username"
                        value={userName}
                        onChangeText={setUserName}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                    />
                    <View style={styles.button}>
                        <Button style={styles.button} title="Login" onPress={handleLogin} />
                    </View>
                </View>
            )}
            <View style={styles.button}>
                <Button color='orange' title={isMpinMode ? "Switch to Username/Password" : "Switch to MPIN"} onPress={() => setIsMpinMode(!isMpinMode)} />
            </View>
            </View>
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundColor:{
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        //padding: 16,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height:70,
        marginBottom: 20,
        
    },
    box: { width: '80%',
     maxWidth: 400, 
     padding: 20, 
     backgroundColor: '#fff', 
     borderRadius: 10, 
     elevation: 2,
     shadowColor: '#000', 
     shadowOffset: { width: 0, height: 2 }, 
     shadowOpacity: 0.2, 
     shadowRadius: 2, 
     },
     text: {
         color: 'orange',
         fontSize: 30,
         marginBottom: 5
     },
    input: {
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
    },
    button: {
        margin: 6,
        alignItems: 'center',
    }
});

export default LoginMpinScreen;
