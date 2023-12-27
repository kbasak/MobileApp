import React, { useState } from 'react';
import { View, TextInput, Text, Button, Image, Alert, StyleSheet, ImageBackground } from 'react-native';
import Modal from "react-native-modal";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import PrimaryButton from '../components/PrimaryButton';
import { loginUser, authenticationMember } from '../util/Authentication';

const LoginMpinScreen = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [mpin, setMpin] = useState('');
    const [isMpinMode, setIsMpinMode] = useState(false);

    const [popupVisible, setpopupVisible] = useState(false);

    const hideModal = () => {
        setpopupVisible(() => !popupVisible)
    };

    const staticpin = '12345';
    const userData = {
        UserName: userName,
        Password: password,
        Referer: '',
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

    const handleLogin = async () => {
        if (isMpinMode) {
            if (mpin === staticpin) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'BottomTabStack' }],
                }
                );
            } else {
                setpopupVisible(true);
            }
        } else {
            try {
                await authenticationMember(userData);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'BottomTabStack' }],
                });
            } catch (error) {
                setpopupVisible(true);
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
                                <Button color='blue' title="Submit MPIN" onPress={handleLogin} />
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
                                <Button style={styles.button} color='blue' title="Login" onPress={handleLogin} />
                            </View>
                        </View>
                    )}
                    <View style={styles.button}>
                        <Button color='#ff6200' title={isMpinMode ? "Switch to Username/Password" : "Switch to MPIN"} onPress={() => setIsMpinMode(!isMpinMode)} />
                    </View>
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            isVisible={popupVisible} >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Entypo name="circle-with-cross" size={105} color="#ff0000" onPress={hideModal} style={{ marginBottom: 30, marginTop: 5 }} />
                                    <Text style={{
                                        fontSize: 22,
                                        paddingBottom: 10,
                                        fontFamily: 'serif',
                                        textAlign: 'center'
                                    }}>
                                        {!isMpinMode ? "Invalid UserName or Password" : "OOPSS... Invalid MPIN!!!"}
                                    </Text>
                                    <PrimaryButton onPress={hideModal}>Try Again</PrimaryButton>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundColor: {
        flex: 1,
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
        height: 70,
        marginBottom: 20,

    },
    box: {
        width: '80%',
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
        color: '#ff6200',
        fontSize: 30,
        marginBottom: 5,
        fontWeight: '500',
        textAlign: 'center'
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
    },
    button: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
        margin: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        minWidth: '90%',
        minHeight: '35%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
});

export default LoginMpinScreen;
