import { Feather, Foundation, Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import MoneyValue from "../components/MoneyValue";
import PieChartComponent from "../components/PieChartComponent";
import Secure_items from "../Constants/Secure_items";
import MyCart from "./MyCart";


function HIAFundDetails({ setScreen, account }) {
    const now = 60;
    function back() {
        setScreen(false);
    }

    const customTextStyle = {
        fontFamily: 'sans-serif-condensed',
        fontWeight: '600',
        textAlign: 'right',
        color:'#000080'
    };

    return (
        <View style={styles.outerContainer} >
            {console.log(account)}
            < View style={[styles.fundInfo, { minHeight: 80, maxHeight: 80, backgroundColor: '#0a0072' }]} >
                <View style={{ paddingHorizontal: 5, paddingVertical: 20 }}>
                    <Ionicons name="arrow-back-outline" size={32} color="#ffffff" onPress={back} />
                </View>
                <View style={styles.fundName}>
                    <Text style={{ fontSize: 24, fontWeight: '700', color: '#ffffff', fontFamily: 'sans-serif-condensed' }}>{Secure_items.accountDetails[0].AccountName}</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', color: '#fff', paddingVertical: 8, textTransform: 'uppercase' }}>{Secure_items.accountDetails[0].EmployerName}</Text>
                </View>
            </View >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed', }}>Summary</Text>
                </View>
                <View style={[styles.fundAmount, { minHeight: 90 }]}>
                    <View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop:10 }}>
                            <View>
                                <Text style={{ fontSize: 25, fontFamily: 'sans-serif-condensed', fontWeight: '400', flex: 1, textAlign: 'right', lineHeight: 30 }}>
                                    <Foundation name="dollar" size={33} color="#000080" />
                                </Text>
                            </View>
                            <View>
                                <MoneyValue
                                    balance={Secure_items.accountDetails[0].FundsAvailableToInvest}
                                    style={[customTextStyle]}
                                    baseTextFontSize={25}
                                    superScriptTextFontSize={18}
                                />
                            </View>
                        </View>
                        <View style={{ paddingBottom: 5 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed' }}>Available to invest</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 16 }}>
                        <Ionicons name="ios-information-circle-outline" size={32} color="#00806b" />
                    </View>
                </View>
                <View style={[styles.fundAmount, { minHeight: 90, marginTop:3 }]}>
                    <View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop:10 }}>
                            <View>
                                <Text style={{ fontSize: 25, fontFamily: 'sans-serif-condensed', fontWeight: '400', flex: 1, textAlign: 'right', lineHeight: 30 }}>
                                    <Foundation name="dollar" size={33} color="#000080" />
                                </Text>
                            </View>
                            <View>
                                <MoneyValue
                                    balance={Secure_items.accountDetails[0].InvestedBalance}
                                    style={[customTextStyle]}
                                    baseTextFontSize={25}
                                    superScriptTextFontSize={18}
                                />
                            </View>
                        </View>
                        <View style={{ paddingBottom: 5 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed' }}>Invested Balance</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 16 }}>
                        <Ionicons name="ios-information-circle-outline" size={32} color="#00806b" />
                    </View>
                </View>
                <View style={[styles.todoitem, { backgroundColor: '#ebebeb', height: 60, marginTop: 15 }]}>
                    <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Investment Snapshot</Text>
                </View>
                <View style={[styles.todoitem, { flexDirection: 'row', minHeight: 120, paddingVertical: 25, marginTop: 0 }]}>
                    <View>
                        <PieChartComponent/>
                    </View>
                </View>
                <View style={styles.todoInfo}>
                    <Text style={{ fontSize: 20, paddingBottom: 2, fontWeight: 'bold', fontFamily: 'sans-serif-condensed', color: '#1F75FE' }}>View Investment Portfolio</Text>
                    <Text style={{ fontSize: 16, paddingTop: 5, fontFamily: 'sans-serif-condensed' }}>Get more detais about your current investment</Text>
                </View>
                <View style={[styles.todoitem, { backgroundColor: '#ebebeb', height: 60, marginTop: 15 }]}>
                    <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Account Actions</Text>
                </View>
                <View style={[styles.todoInfo, { minHeight: 65, marginTop: 0, }]}>
                    <Text style={{ color: '#1F75FE', fontSize: 20, fontWeight: '600', fontFamily: 'sans-serif-condensed' }}>Buy mutual funds</Text>
                </View>
                <View style={[styles.todoInfo, { minHeight: 65, marginTop: 2, }]}>
                    <Text style={{ color: '#1F75FE', fontSize: 20, fontWeight: '600', fontFamily: 'sans-serif-condensed' }}>Sell mutual funds</Text>
                </View>
                <View style={[styles.fundInterest, { borderBottomColor: '#C0C0C0', borderBottomWidth: 3, marginTop: 2.5, minHeight: 65 }]}>
                    <View style={{marginTop:8}}>
                        <Text style={{ color: '#1F75FE', fontSize: 20, fontWeight: '600', fontFamily: 'sans-serif-condensed' }}>View investment options</Text>
                    </View>
                    <View style={{ paddingVertical: 12 }}>
                        <Feather name="external-link" size={20} color="#1F75FE" />
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}
export default HIAFundDetails;

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
        minHeight: 50,
        backgroundColor: '#f3f3f3',
        marginTop: 8,
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
        minHeight: 75,
        maxHeight: 75,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingTop: 10,
        elevation: 5
    },
    fundInterest: {
        flex: 1,
        minHeight: 65,
        maxHeight: 65,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginTop: 5,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 8,
        elevation: 5
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
        minHeight: 80,
        backgroundColor: 'white',
        marginTop: 3,
        marginHorizontal: 10,
        alignItem: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        elevation: 5
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