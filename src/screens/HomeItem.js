import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'

const HomeItem = ({ setScreen }) => {
    function fundDetails() {
        setScreen(true);
    }
    return (
        <View style={styles.outerContainer}>
            <View style={[styles.title, { backgroundColor: '#f3f3f3' }]}>
                <Text style={{ fontSize: 19, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Your Accounts</Text>
            </View>            
            <View style={styles.fundInfo}>
                <Pressable android_ripple={{color: '#a9fcf7ff'}} onPress={fundDetails}>
                    <View style={{ marginTop: 15, marginRight: '24%' }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#2020ba', paddingBottom: 3, fontFamily: 'sans-serif-condensed' }}>Emergency Savings Fund</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed' }}>ESFM_Deepak</Text>
                    </View>
                </Pressable>
                <View>
                    <Text style={{ marginTop: 20, fontSize: 20, marginRight: 10, fontFamily: 'sans-serif-condensed', fontWeight: 'bold' }}>$981.95</Text>
                </View>
            </View> 
            <View style={styles.fundInfo}>
                <Pressable android_ripple={{color: '#a9fcf7ff'}} onPress={fundDetails}>
                    <View style={{ marginTop: 15, marginRight: '31%' }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#2020ba', paddingBottom: 3, fontFamily: 'sans-serif-condensed' }}>Health Savings Fund</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed' }}>ESFM_Deepak</Text>
                    </View>
                </Pressable>
                <View>
                    <Text style={{ marginTop: 20, fontSize: 20, marginRight: 10, fontFamily: 'sans-serif-condensed', fontWeight: 'bold' }}>$1265.55</Text>
                </View>
            </View>               
            <View style={[styles.todoitem, { backgroundColor: '#f3f3f3' }]}>
                <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>TO DO</Text>
            </View>
            <View style={styles.todoInfo}>
                <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: 'bold', fontFamily: 'sans-serif-condensed' }}>You are all set!</Text>
                <Text style={{ fontSize: 18, paddingTop: 5, fontFamily: 'sans-serif-condensed' }}>You have nothing on your to do list.</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#d4d4d4',
        paddingTop:10
    },
    title: {
        height: 60,
        backgroundColor: 'white',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        alignItem: 'center',
        justifyContent: 'center',
        padding: 10,
        elevation: 5
    },
    title: {
        height: 60,
        backgroundColor: 'white',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        alignItem: 'center',
        justifyContent: 'center',
        padding: 10,
        elevation: 5
    },
    fundInfo: {
        height: 100,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        alignItem: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        elevation: 5
    },
    todoitem: {
        height: 60,
        backgroundColor: 'white',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        alignItem: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingTop: 12,
        paddingBottom: 12,
        elevation: 5
    },
    todoInfo: {
        height: 105,
        backgroundColor: 'white',
        marginTop: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItem: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        elevation: 5
    }
});

export default HomeItem;