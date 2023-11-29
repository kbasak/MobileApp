import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function FundDetails({ setScreen, fund }) {
    function back() {
        setScreen(false);
    }
    return (
        <View style={styles.outerContainer}>
            <View style={[styles.fundInfo, { height: 80, backgroundColor: '#0a0072' }]}>
                {
                    (fund.id === 1) ?
                        <View style={{ marginLeft: '-20%', marginTop: '5%' }}>
                            <Ionicons name="arrow-back-outline" size={36} color="#ffffff" onPress={back} />
                        </View> :
                        <View style={{ marginLeft: '-30%', marginTop: '5%' }}>
                            <Ionicons name="arrow-back-outline" size={36} color="#ffffff" onPress={back} />
                        </View>
                }                
                <View style={{ marginTop: 8, marginLeft: '4%' }}>
                    <Text style={{ fontSize: 24, fontWeight: '700', color: '#ffffff', paddingBottom: 3, fontFamily: 'sans-serif-condensed' }}>{fund.fundName}</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', color: '#fff' }}>{fund.EmpName}</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.title, { marginTop: 5, backgroundColor: '#f3f3f3' }]}>
                    <Text style={{ fontSize: 19, fontWeight: '500', fontFamily: 'sans-serif-condensed', }}>Funds</Text>
                </View>
                <View style={[styles.fundInfo, { marginTop: 0 }]}>
                    <View style={{ marginTop: 15, paddingLeft: '6%' }}>
                        <Text style={{ fontSize: 16, paddingBottom: 3, fontFamily: 'sans-serif-condensed', marginLeft: -36 }}>Total Account Value</Text>
                        <Text style={{ fontSize: 25, fontFamily: 'sans-serif-condensed', fontWeight: '700', marginLeft: -36 }}>{fund.accValue}</Text>
                    </View>
                    <View style={{ marginTop: 24, marginLeft: '50%' }}>
                        <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View>
                </View>
                <View style={[styles.title, { marginTop: 10, backgroundColor: '#f3f3f3' }]}>
                    <Text style={{ fontSize: 19, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Contributions</Text>
                </View>
                <View style={[styles.fundInfo, { marginTop: 0.5, height: 65 }]}>
                    <View style={{ marginTop: 20, paddingLeft: '6%' }}>
                        <Text style={{ fontSize: 18, paddingBottom: 3, fontFamily: 'sans-serif-condensed', marginLeft: 10, marginRight: 30 }}>Employee Contributions</Text>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 30, marginRight: 50, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, paddingBottom: 3, marginTop: 10, fontFamily: 'sans-serif-condensed', paddingLeft: 20 }}>{fund.empCont}</Text>
                        <Ionicons style={{ paddingLeft: 15 }} name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View>
                </View>
                <View style={[styles.fundInfo, { marginTop: 4, height: 65 }]}>
                    <View style={{ marginTop: 20, paddingLeft: '6%' }}>
                        <Text style={{ fontSize: 18, paddingBottom: 3, fontFamily: 'sans-serif-condensed', marginLeft: 10, marginRight: 6 }}>Employer Contributions</Text>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 30, marginRight: 50, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, paddingBottom: 3, marginTop: 10, fontFamily: 'sans-serif-condensed', paddingLeft: 20 }}>{fund.employerCont}</Text>
                        <Ionicons style={{ paddingLeft: 15 }} name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View>
                </View>
                <View style={[styles.todoitem, { backgroundColor: '#f3f3f3', marginTop: 10 }]}>
                    <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>TO DO</Text>
                </View>
                <View style={styles.todoInfo}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: 'bold', fontFamily: 'sans-serif-condensed' }}>You are all set!</Text>
                    <Text style={{ fontSize: 18, paddingTop: 5, fontFamily: 'sans-serif-condensed' }}>You have nothing on your to do list.</Text>
                </View>
                <View style={[styles.todoitem, { backgroundColor: '#f3f3f3', height: 65, marginTop: 8 }]}>
                    <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Account Activity</Text>
                </View>
                <View style={[styles.todoitem, { height: 65, marginTop: 0 }]}>
                    <Text style={{ color: '#34348f', fontSize: 20, fontWeight: '600', fontFamily: 'sans-serif-condensed' }}>Transactions</Text>
                </View>
                <View style={[styles.todoitem, { backgroundColor: '#f3f3f3', height: 65, marginTop: 8 }]}>
                    <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Interest Rate Summary</Text>
                </View>
                <View style={[styles.todoitem, { height: 75, marginTop: 0, borderBottomColor:'black', borderBottomWidth:1.5 }]}>
                    <Text style={{ fontSize: 15, fontWeight: '600', fontFamily: 'sans-serif-condensed' }}>Your Emergency Savings Fund balance determine the interest we apply.</Text>
                </View>
                <View style={[styles.fundInfo, { marginTop:0, height: 75 }]}>
                    <View style={{ marginTop: 10, paddingLeft: '3%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed', marginLeft: 1, marginRight: '50%' }}>Interest Rate</Text>
                        <Text style={{ fontSize: 24, marginTop: 5, fontFamily: 'sans-serif-condensed', fontWeight:'700' }}>{fund.intRate}</Text>
                    </View>
                    <View style={{ marginTop: 18, marginLeft: 30, marginRight: 25, }}>
                        <Ionicons style={{ paddingLeft: 25 }} name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View>
                </View>
                <View style={[styles.fundInfo, { marginTop: 2.5, height: 75, borderBottomColor:'black', borderBottomWidth:1.5 }]}>
                    <View style={{ marginTop: 10, paddingLeft: '3%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed', marginLeft: 1, marginRight: '32%' }}>Interest Earned(Year to date)</Text>
                        <Text style={{ fontSize: 24, marginTop: 5, fontFamily: 'sans-serif-condensed', fontWeight:'700' }}>{fund.intEarned}</Text>
                    </View>
                    <View style={{ marginTop: 18, marginLeft: 0, marginRight: 30, }}>
                        <Ionicons style={{ paddingLeft: 20 }} name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View>
                </View>
                <View style={[styles.fundInfo, { marginTop: 1, height: 75 }]}>
                    <View style={{ marginTop: 10, paddingLeft: '10%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed', marginLeft: 1, marginRight: '30%' }}>Annual Percentage Yield(APY)</Text>
                        <Text style={{ fontSize: 24, marginTop: 5, fontFamily: 'sans-serif-condensed', fontWeight:'700' }}>{fund.apy}</Text>
                    </View>
                    <View style={{ marginTop: 18, marginLeft: 15, marginRight: 58, }}>
                        <Ionicons style={{ paddingLeft: 12 }} name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View>
                </View>
                <View>
                    <Text style={styles.conclusion}>We calculate interest daily based on the interest rate associated with the account balance ranges shown above. The daily interest is stored banking day of the next month. If you close your account mid-month, you won't receive interest for that month</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default FundDetails;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#d4d4d4',
        paddingBottom:10,
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
    },
    conclusion:{
        paddingTop:25,
        paddingLeft:16,
        paddingRight:16,
        paddingBottom:8,
        justifyContent: 'flex-start',
        fontSize:15
    }
});