import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, ScrollView, Animated } from "react-native";
import MoneyValue from "../components/MoneyValue";
import Secure_items from "../Constants/Secure_items";

function ReimbursementFundDetails({ setScreen, account }) {
    function back() {
        setScreen(false);
    }
    const customTextStyle = {
        fontFamily: 'sans-serif-condensed',
        fontWeight: '700',
        textAlign: 'right'
    };
    var fundProgress=((Secure_items.accountDetails[0].FundsAvailable/Secure_items.accountDetails[0].AnnualElection)*100)+'%';
    return (
        <View style={styles.outerContainer}>
            {/* {console.log(account)} */}
            <View style={[styles.fundInfo, { minHeight: 80, maxHeight: 80, backgroundColor: '#0a0072' }]}>
                <View style={{ paddingHorizontal: 5, paddingVertical: 20 }}>
                    <Ionicons name="arrow-back-outline" size={32} color="#ffffff" onPress={back} />
                </View>
                <View style={styles.fundName}>
                    <Text style={{ fontSize: 24, fontWeight: '700', color: '#ffffff', fontFamily: 'sans-serif-condensed' }}>{Secure_items.accountDetails[0].AccountName}</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', color: '#fff', paddingVertical: 8, textTransform: 'uppercase' }}>{Secure_items.accountDetails[0].EmployerName}</Text>
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
                <View style={styles.title}>
                    <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'sans-serif-condensed', }}>Funds</Text>
                </View>
                <View style={[styles.fundAmount, { height: 210, flexDirection: 'column' }]}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', paddingTop: 8, flex: 1 }}>Available Funds</Text>
                        <Text style={{ fontSize: 27, fontFamily: 'sans-serif-condensed', fontWeight: '700', textAlign: 'right', flex: 1 }}>$</Text>
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
                                <Text style={{ fontSize: 17, fontFamily: 'sans-serif-condensed', paddingVertical: 10 }}>Available Funds</Text>
                                <Ionicons name="ios-information-circle-outline" size={30} color="#00806b" style={{ paddingVertical: 5, paddingLeft:5, lineHeight: 35 }} />

                            </View>
                            <View style={{ flexDirection: 'row', marginTop:5 }}>
                                <Text style={{ fontSize: 24, lineHeight: 30, fontFamily: 'sans-serif-condensed',}}>$</Text>

                                <MoneyValue
                                    balance={Secure_items.accountDetails[0].FundsAvailable}
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
                                <Text style={{ fontSize: 24, lineHeight: 30, fontFamily: 'sans-serif-condensed', }}>$</Text>

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
                <View style={styles.todoitem}>
                    <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>To Do</Text>
                </View>
                <View style={styles.todoInfo}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: 'bold', fontFamily: 'sans-serif-condensed', color: '#1F75FE' }}>You are all set!</Text>
                    <Text style={{ fontSize: 18, paddingTop: 5, fontFamily: 'sans-serif-condensed' }}>You have nothing on your to do list.</Text>
                </View>
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
    }
})