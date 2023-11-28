import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'

const HomeItem = ({ setScreen, setFund }) => {

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
            funds.filter(fund => fund.id === id).map(filteredCard => (
                setFund(filteredCard)
            ))
    }
    
    return (
        <View style={styles.outerContainer}>
            <View style={[styles.title, { backgroundColor: '#f3f3f3' }]}>
                <Text style={{ fontSize: 19, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Your Accounts</Text>
            </View>            
            <View style={styles.fundInfo}>
                <Pressable android_ripple={{color: '#a9fcf7ff'}} onPress={fundDetails.bind(this, funds[0].id)}>
                    <View style={{ marginTop: 15, marginRight: '24%' }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#2020ba', paddingBottom: 3, fontFamily: 'sans-serif-condensed' }}>{funds[0].fundName}</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed' }}>{funds[0].EmpName}</Text>
                    </View>
                </Pressable>
                <View>
                    <Text style={{ marginTop: 20, fontSize: 20, marginRight: 10, fontFamily: 'sans-serif-condensed', fontWeight: 'bold' }}>$981.95</Text>
                </View>
            </View> 
            <View style={styles.fundInfo}>
                <Pressable android_ripple={{color: '#a9fcf7ff'}} onPress={fundDetails.bind(this, funds[1].id)}>
                    <View style={{ marginTop: 15, marginRight: '31%' }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#2020ba', paddingBottom: 3, fontFamily: 'sans-serif-condensed' }}>{funds[1].fundName}</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed' }}>{funds[1].EmpName}</Text>
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