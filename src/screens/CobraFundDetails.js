import { Foundation, Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import MoneyValue from "../components/MoneyValue";


function CobraFundDetails({ setScreen, account }) {
    const now = 60;
    function back() {
        setScreen(false);
    }

    const customTextStyle = {
        fontFamily: 'sans-serif-condensed',
        fontWeight: '600',
        textAlign: 'right',
        color: '#000080'
    };

    const amountDue = -962.97;

    return (
        <View style={styles.outerContainer} >
            < View style={[styles.fundInfo, { minHeight: 80, maxHeight: 80, backgroundColor: '#0a0072' }]} >
                <View style={{ paddingHorizontal: 5, paddingVertical: 20 }}>
                    <Ionicons name="arrow-back-outline" size={32} color="#ffffff" onPress={back} />
                </View>
                <View style={styles.fundName}>
                    <Text style={{ fontSize: 24, fontWeight: '700', color: '#ffffff', fontFamily: 'sans-serif-condensed' }}>COBRA</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', color: '#fff', paddingVertical: 8, textTransform: 'uppercase' }}>Employer name</Text>
                </View>
            </View >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'sans-serif-condensed', }}>Funds</Text>
                </View>
                <View style={[styles.fundAmount, { minHeight: 90 }]}>
                    <View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 8 }}>
                            <View style={{ flexDirection: 'row' }}>
                                {/* <Text style={{ lineHeight: 32, fontSize: 32, fontWeight: 'bold', color: 'red', paddingRight: 2 }}>-</Text> */}
                                <Foundation name="dollar" size={27} style={[{ lineHeight: 24 }, amountDue < 0 ? { color: "#ff0000" } : {color: "#000080"}]} />
                                <MoneyValue
                                    balance={amountDue}
                                    style={[customTextStyle, amountDue < 0 && { color: "#ff0000" }]}
                                    baseTextFontSize={25}
                                    superScriptTextFontSize={18}
                                />
                            </View>
                        </View>
                        <View style={{ paddingBottom: 5 }}>
                            <Text style={{ fontSize: 16, fontFamily: 
                                'sans-serif-condensed' }}>Amount Due</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 16 }}>
                        <Ionicons name="ios-information-circle-outline" size={32} color="#00806b" />
                    </View>
                </View>
                <View style={styles.todoInfo}>
                    <Text style={{ fontSize: 18, paddingBottom: 4, fontWeight: '700', fontFamily: 'sans-serif-light', marginTop: -10 }}>Not available</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed' }}>Payment Due</Text>
                </View>
                <View style={styles.todoInfo}>
                    <Text style={{ fontSize: 18, paddingBottom: 4, fontWeight: '700', fontFamily: 'sans-serif-light', marginTop: -10 }}>Not available</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed' }}>Last day to pay</Text>
                </View>
                <View style={styles.todoInfo}>
                    <Text style={{ fontSize: 18, paddingBottom: 4, fontWeight: '700', fontFamily: 'sans-serif-light', marginTop: -10 }}>Dec 31, 2023</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed' }}>Currently paid through</Text>
                </View>
                <View style={styles.todoInfo}>
                    <Text style={{ fontSize: 18, paddingBottom: 4, fontWeight: '700', fontFamily: 'sans-serif-light', marginTop: -10 }}>Not available</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed' }}>Last payment recieved</Text>
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'sans-serif-condensed', }}>COBRA Status</Text>
                </View>
                <View style={styles.todoInfo}>
                    <Text style={{ fontSize: 18, paddingBottom: 4, fontWeight: '700', fontFamily: 'sans-serif-light', marginTop: -10 }}>COBRA Enrolled</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed' }}>Status</Text>
                </View>
                <View style={[styles.todoInfo, { borderBottomWidth: 8, borderColor: '#b4b4b4', elevation: 10 }]}>
                    <Text style={{ fontSize: 18, paddingBottom: 4, fontWeight: '700', fontFamily: 'sans-serif-light', marginTop: -10 }}>Feb 01, 2023</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed' }}>Effective date</Text>
                </View>
            </ScrollView>
        </View >
    );
}
export default CobraFundDetails;

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
        marginTop: 1,
        marginHorizontal: 10,
        alignItem: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        elevation: 5
    },
})