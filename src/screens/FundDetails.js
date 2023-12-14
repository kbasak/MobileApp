import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, ScrollView } from "react-native";

function FundDetails({ setScreen, fund }) {

    function back() {
        setScreen(false);
    }

    return (
        <View style={styles.outerContainer}>
            <View style={[styles.fundInfo, { minHeight: 80, maxHeight: 80, backgroundColor: '#0a0072' }]}>
                <View style={{ paddingHorizontal: 5, paddingVertical: 20 }}>
                    <Ionicons name="arrow-back-outline" size={32} color="#ffffff" onPress={back} />
                </View>
                <View style={styles.fundName}>
                    <Text style={{ fontSize: 24, fontWeight: '700', color: '#ffffff', fontFamily: 'sans-serif-condensed' }}>{fund.fundName}</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', color: '#fff', paddingVertical: 8 }}>{fund.EmpName}</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'sans-serif-condensed', }}>Funds</Text>
                </View>
                <View style={styles.fundAmount}>
                    <View>
                        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed' }}>Total Account Value</Text>
                        <Text style={{ fontSize: 25, fontFamily: 'sans-serif-condensed', fontWeight: '700', paddingVertical: 8 }}>{fund.accValue}</Text>
                    </View>
                    <View style={{ paddingVertical: 12 }}>
                        <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View>
                </View>
                <View style={[styles.title, { marginTop: 10, backgroundColor: '#f3f3f3' }]}>
                    <Text style={{ fontSize: 19, fontWeight: '500', fontFamily: 'sans-serif-condensed', paddingVertical: 8 }}>Contributions</Text>
                </View>
                <View style={[styles.fundInterest, { minHeight: 60, marginTop: 0 }]}>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: 'sans-serif-condensed', paddingVertical:15 }}>Employee Contributions</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 18, fontFamily: 'sans-serif-condensed', paddingHorizontal:10, paddingVertical:15 }}>{fund.empCont}</Text>
                        <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" style={{paddingVertical:5}} />
                    </View>
                </View>
                <View style={[styles.fundInterest, {minHeight:60, marginTop: 2.5 }]}>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: 'sans-serif-condensed', paddingVertical:15 }}>Employer Contributions</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 18, fontFamily: 'sans-serif-condensed', paddingHorizontal:10, paddingVertical:15 }}>{fund.employerCont}</Text>
                        <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" style={{paddingVertical:5}} />
                    </View>
                </View>

                <View style={styles.todoitem}>
                    <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>TO DO</Text>
                </View>
                <View style={styles.todoInfo}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: 'bold', fontFamily: 'sans-serif-condensed' }}>You are all set!</Text>
                    <Text style={{ fontSize: 18, paddingTop: 5, fontFamily: 'sans-serif-condensed' }}>You have nothing on your to do list.</Text>
                </View>
                <View style={[styles.todoitem, { backgroundColor: '#ebebeb', height: 65, marginTop: 8 }]}>
                    <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Account Activity</Text>
                </View>
                <View style={[styles.todoitem, { minHeight: 65, marginTop: 0 }]}>
                    <Text style={{ color: '#34348f', fontSize: 20, fontWeight: '600', fontFamily: 'sans-serif-condensed' }}>Transactions</Text>
                </View>

                <View style={[styles.todoitem, { backgroundColor: '#ebebeb', minHeight: 65, marginTop: 8 }]}>
                    <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Interest Rate Summary</Text>
                </View>
                <View style={[styles.todoitem, { minHeight: 75, marginTop: 0, borderBottomColor:'black', borderBottomWidth:1.5 }]}>
                    <Text style={{ fontSize: 16, fontWeight: '600', fontFamily: 'sans-serif-condensed' }}>Your Emergency Savings Fund balance determine the interest we apply.</Text>
                </View>

                <View style={[styles.fundInterest, {marginTop:0, maxHeight:80}]}>
                    <View>
                        <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed' }}>Interest Rate</Text>
                        <Text style={{ fontSize: 24, fontFamily: 'sans-serif-condensed', fontWeight: '700', paddingVertical: 8 }}>{fund.intRate}</Text>
                    </View>
                    <View style={{ paddingVertical: 8 }}>
                        <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View>
                </View>


                <View style={[styles.fundInterest, { borderBottomColor: '#969696', borderBottomWidth: 3, marginTop:2.5, maxHeight:80 }]}>
                    <View>
                        <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed' }}>Interest Earned(Year to date)</Text>
                        <Text style={{ fontSize: 24, fontFamily: 'sans-serif-condensed', fontWeight: '700', paddingVertical: 8 }}>{fund.intEarned}</Text>
                    </View>
                    <View style={{ paddingVertical: 8 }}>
                        <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View>
                </View>

                <View style={[styles.fundInterest, { marginTop:0, maxHeight:80 }]}>
                    <View>
                        <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed' }}>Annual Percentage Yield(APY)</Text>
                        <Text style={{ fontSize: 24, fontFamily: 'sans-serif-condensed', fontWeight: '700', paddingVertical: 8 }}>{fund.apy}</Text>
                    </View>
                    <View style={{ paddingVertical: 8 }}>
                        <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" />
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
        paddingTop: 10
    },
    fundInfo: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 5,
        marginHorizontal: 10,
        paddingLeft: 10,
        elevation: 5
    },
    fundName: {
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    title: {
        minHeight: 60,
        backgroundColor: '#f3f3f3',
        marginTop: 5,
        marginHorizontal: 10,
        alignItem: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        elevation: 5
    },
    fundAmount: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        minHeight: 90,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 12,
        elevation: 5
    },
    fundInterest: {
        flex: 1,
        minHeight: 75,
        maxHeight: 75,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginTop: 5,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 5
    },
    todoitem: {
        minHeight: 60,
        backgroundColor: '#f3f3f3',
        marginTop: 15,
        marginHorizontal:10,
        alignItem: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        elevation: 5
    },
    todoInfo: {
        minHeight: 90,
        backgroundColor: 'white',
        marginTop: 1,
        marginHorizontal: 10,
        alignItem: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        elevation: 5
    },
    conclusion:{
        paddingHorizontal:15,
        paddingVertical:20,
        justifyContent: 'flex-start',
        fontSize:15
    }
})