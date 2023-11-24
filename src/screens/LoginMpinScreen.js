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
        <ImageBackground source={{uri: 'data:image/jpeg;base64,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'}} 
            style={styles.backgroundColor}>
        <View style={styles.container}>
            
            <Image source={{uri: 'data:image/jpeg;base64,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'}} style={styles.logo} />
            
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
