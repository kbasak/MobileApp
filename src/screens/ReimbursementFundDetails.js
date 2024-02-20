import { Foundation, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text, ScrollView, Animated } from "react-native";
import MoneyValue from "../components/MoneyValue";
import Secure_items from "../Constants/Secure_items";

function ReimbursementFundDetails({ setScreen, account }) {
    function back() {
        setScreen(false);
    }
    const customTextStyle = {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#191970'
    };
    var fundProgress=((Secure_items.accountDetails[0].FundsAvailable/Secure_items.accountDetails[0].AnnualElection)*100)+'%';
    return (
        <View style={styles.outerContainer}>
            {console.log(account)}
            <View style={[styles.fundInfo, { minHeight: 80, maxHeight: 80, backgroundColor: '#0a0072' }]}>
                <View style={{ paddingHorizontal: 5, paddingVertical: 20 }}>
                    <Ionicons name="arrow-back-outline" size={32} color="#ffffff" onPress={back} />
                </View>
                <View style={styles.fundName}>
                    <Text style={{ fontSize: 24, fontWeight: '600', color: '#ffffff', fontFamily: 'sans-serif-condensed' }}>{Secure_items.accountDetails[0].AccountName}</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', color: '#fff', paddingVertical: 8, textTransform: 'uppercase' }}>{account.EmployerName}</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={[styles.title, { flexDirection: 'row' }]}>
                    <View style={[styles.fundInterest, { marginTop: 2 }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'sans-serif-condensed', paddingVertical: 14 }}>Plan Year</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, lineHeight: 30, fontFamily: 'sans-serif-condensed', paddingVertical: 10 }}>Jan 01, 2024 - Dec 31, 2024</Text>
                        </View>
                    </View>
                </View>
                {/* {Funds} */}
                <View style={styles.title}>
                    <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'sans-serif-condensed', }}>Funds</Text>
                </View>
                <View style={[styles.fundAmount, { height: 210, flexDirection: 'column' }]}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', paddingTop: 8, flex: 1 }}>Available Funds</Text>
                        <Foundation name="dollar" size={24} color="#000080" style={{ lineHeight: 30 }} />
                        <MoneyValue
                            balance={Secure_items.accountDetails[0].FundsAvailable}
                            style={[customTextStyle, { marginTop: 5 }]}
                            baseTextFontSize={25}
                            superScriptTextFontSize={18}
                        />
                    </View>
                    {/* <View style={{ paddingVertical: 12 }}>
                        <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View> */}
                    <View style={[styles.progressBar, { marginBottom: 10 }]}>
                        <Animated.View style={{
                            backgroundColor: "#14005f",
                            width: fundProgress, borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5, borderEndColor: 'black',
                            borderEndWidth: 2
                        }} />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={[styles.progressBar, { marginTop: 8, width: 30, height: 30, marginRight:10 }]}>
                            <Animated.View style={{
                                backgroundColor: "#14005f",
                                width: '100%', borderEndColor: 'black'
                            }} />
                        </View>
                        <View style={[styles.fundInterest, { marginTop: 2}]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 17, fontFamily: 'sans-serif-condensed', paddingVertical: 10 }}>Remaining Election</Text>
                                <Ionicons name="ios-information-circle-outline" size={30} color="#00806b" style={{ paddingVertical: 5, paddingLeft:5, lineHeight: 35 }} />

                            </View>
                            <View style={{ flexDirection: 'row', marginTop:5 }}>
                            <Text style={{ fontSize: 24, lineHeight: 30, fontFamily: 'sans-serif-condensed', color: '#000080', lineHeight: 32}}>
                            <Foundation name="dollar" size={24} color="#000080" style={{ lineHeight: 25 }} />
                                </Text>

                                <MoneyValue
                                    balance={Secure_items.accountDetails[0].RemainingElection}
                                    style={customTextStyle}
                                    baseTextFontSize={25}
                                    superScriptTextFontSize={18}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={[styles.progressBar, { marginTop: 8, width: 30, height: 30, marginRight:10 }]}>
                            <Animated.View style={{
                                backgroundColor: "#a2a2a2",
                                width: '100%', borderEndColor: 'black'
                            }} />
                        </View>
                        <View style={[styles.fundInterest, { marginTop: 5}]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 17, fontFamily: 'sans-serif-condensed', paddingVertical: 10 }}>Funds Spent</Text>
                                <Ionicons name="ios-information-circle-outline" size={30} color="#00806b" style={{ paddingVertical: 4,paddingLeft:5, lineHeight: 40 }} />

                            </View>
                            <View style={{ flexDirection: 'row', marginTop:5 }}>
                            <Text style={{ fontSize: 24, lineHeight: 30, fontFamily: 'sans-serif-condensed', color: '#000080', lineHeight: 32}}>
                            <Foundation name="dollar" size={24} color="#000080" style={{ lineHeight: 25 }} />
                                </Text>

                                <MoneyValue
                                    balance={Secure_items.accountDetails[0].FundsSpent}
                                    style={customTextStyle}
                                    baseTextFontSize={25}
                                    superScriptTextFontSize={18}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'sans-serif-condensed', }}>Important Reminders</Text>
                </View>
                <View style={[styles.fundAmount, { minHeight: 60, flexDirection: 'column' }]}>

                    {/* <View style={{ paddingVertical: 12 }}>
                        <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View> */}
                    {Secure_items.accountDetails[0].LastDateToFile &&
                    <View style={[styles.fundInterest, { marginTop: 0, maxHeight: 80 }]}>
                        <View style={{paddingVertical:10}}>
                            <MaterialIcons  name="alarm-on" size={36} color="#ff6600" />
                        </View>
                        <View style={{marginLeft:-90}}>
                            <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', fontWeight: '700', }}>Last day to file claims</Text>
                            <Text style={{ fontSize: 18, fontFamily: 'sans-serif-condensed', fontWeight: '600', paddingVertical: 8 }}>{new Date(Secure_items.accountDetails[0].LastDateToFile).toLocaleDateString()}</Text>
                        </View>
                        <View style={{ paddingVertical: 8 }}>
                            <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" />
                        </View>
                    </View>}
                    {Secure_items.accountDetails[0].LastDateToSpend &&
                    <View style={[styles.fundInterest, { marginTop: 15, maxHeight: 80, borderTopColor:'black' }]}>
                        <View style={{paddingVertical:10}}>
                            <MaterialIcons  name="alarm-on" size={36} color="#ff6600" />
                        </View>
                        <View style={{marginLeft:-80}}>
                            <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', fontWeight: '700', }}>Last day to spend funds</Text>
                            <Text style={{ fontSize: 18, fontFamily: 'sans-serif-condensed', fontWeight: '600', paddingVertical: 8 }}>{new Date(Secure_items.accountDetails[0].LastDateToSpend).toLocaleDateString()}</Text>
                        </View>
                        <View style={{ paddingVertical: 8 }}>
                            <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" />
                        </View>
                    </View>}
                </View>
                {/* {TODO ITEMS} */}
                <View style={styles.todoitem}>
                    <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed', color:"#191970" }}>To Do</Text>
                </View>
                <View style={[styles.todoInfo, { marginBottom: 5, elevation: 5, borderBottomColor: '#bcbcbc', borderBottomWidth: 5, borderLeftColor: 'orange', borderLeftWidth: 6 }]}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: 'bold', fontFamily: 'sans-serif-condensed', color: '#1F75FE' }}>You are all set!</Text>
                    <Text style={{ fontSize: 18, paddingTop: 5, fontFamily: 'sans-serif-condensed' }}>You have nothing on your to do list.</Text>
                </View>
                {/* <View style={[styles.conclusionItem, { minHeight: 60, }]}>
                    <Text style={[styles.conclusionInfo]}>We calculate interest daily based on the interest rate associated with the account balance ranges shown above. The daily interest is stored banking day of the next month. If you close your account mid-month, you won't receive interest for that month.</Text>
                </View> */}
            </ScrollView>
        </View>
    );
}
export default ReimbursementFundDetails;

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
        marginTop: 15,
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    todoitem: {
        minHeight: 60,
        backgroundColor: '#f3f3f3',
        marginTop: 15,
        marginHorizontal: 10,
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
    conclusion: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        justifyContent: 'flex-start',
        fontSize: 15
    },
    example: {
        marginVertical: 24,
        width: '80%',
        paddingHorizontal: 20,

    },
    progressBar: {
        height: 25,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#a2a2a2',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5
    },
    conclusionItem: {
        minHeight: 60,
        //backgroundColor: '#f3f3f3',
        marginTop: 15,
        marginHorizontal: 10,
        alignItem: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        elevation: 5,
        backgroundColor: 'white',
        borderLeftWidth: 6,
        borderLeftColor: 'orange',
        borderBottomColor:'#C0C0C0',
        borderBottomWidth:8
    },
    conclusionInfo: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: 'flex-start',
        fontSize: 15
    },
})