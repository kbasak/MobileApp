import { useEffect } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import Secure_items from "../Constants/Secure_items";


function HomeItem({ setScreen, setFund }) {

    const funds = [
        {
            id: 1, fundName: 'Emergency Savings Fund', EmpName: 'ESFM_Deepak',
            accValue: '$981.95', empCont: '$0.00', employerCont: '$1000.00',
            intRate: '0.05%', intEarned: '$0.08', apy: '0.05%'
        },
        {
            id: 2, fundName: 'Health Savings Fund', EmpName: 'ESFM_Deepak',
            accValue: '$1265.55', empCont: '$0.00', employerCont: '$1000.00',
            intRate: '0.05%', intEarned: '$0.08', apy: '0.05%'
        },
    ];

    function fundDetails(id) {
        setScreen(true)
        console.log(Secure_items.token)
        funds.filter(fund => fund.id === id).map(filteredCard => (
            setFund(filteredCard)
        ))
    }

    return (
        <View style={styles.outerContainer}>
            <View style={[styles.title, { backgroundColor: '#f3f3f3' }]}>
                <Text style={{ fontSize: 19, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Your Accounts</Text>
            </View>
            <View style={[styles.fundInfo, { marginTop: 0 }]}>
                <Pressable android_ripple={{ color: '#a9fcf7ff' }} onPressOut={fundDetails.bind(this, funds[0].id)} >
                    <View style={styles.fundName}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#2020ba', fontFamily: 'sans-serif-condensed', padding:0 }}>{funds[0].fundName}</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', paddingVertical:5 }}>{funds[0].EmpName}</Text>
                    </View>
                </Pressable>
                <View style={styles.fundName}>
                    <Text style={{ fontSize: 20, fontFamily: 'sans-serif-condensed', fontWeight: 'bold' }}>{funds[0].accValue}</Text>
                </View>
            </View>
            <View style={styles.fundInfo}>
                <Pressable android_ripple={{ color: '#a9fcf7ff' }} onPressOut={fundDetails.bind(this, funds[1].id)}>
                    <View style={styles.fundName}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#2020ba', fontFamily: 'sans-serif-condensed', padding:0 }}>{funds[1].fundName}</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', paddingVertical:5 }}>{funds[1].EmpName}</Text>
                    </View>
                </Pressable>
                <View style={styles.fundName}>
                    <Text style={{ fontSize: 20, fontFamily: 'sans-serif-condensed', fontWeight: 'bold' }}>{funds[1].accValue}</Text>
                </View>
            </View>
            <View style={styles.todoitem}>
                <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>TO DO</Text>
            </View>
            <View style={styles.todoInfo}>
                <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: 'bold', fontFamily: 'sans-serif-condensed' }}>You are all set!</Text>
                <Text style={{ fontSize: 18, paddingTop: 5, fontFamily: 'sans-serif-condensed' }}>You have nothing on your to do list.</Text>
            </View>
        </View>
    );
}

export default HomeItem;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#d4d4d4',
        paddingTop: 10
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
        elevation: 10
    },
    fundInfo: {
        minHeight:90,
        maxHeight: 90,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: 'white',
        marginTop: 2.5,
        marginLeft: 10,
        marginRight: 10,
        elevation: 5
    },
    fundName:{
        marginHorizontal:10,
        marginVertical:15,
    },
    todoitem: {
        minHeight: 60,
        backgroundColor: '#f3f3f3',
        marginTop: 15,
        marginHorizontal:10,
        alignItem: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        elevation: 5
    },
    todoInfo: {
        minHeight: 90,
        backgroundColor: 'white',
        marginHorizontal: 10,
        alignItem: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        elevation: 5
    }
})