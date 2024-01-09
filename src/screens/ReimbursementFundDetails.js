import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, ScrollView,ProgressBarAndroid } from "react-native";
import Secure_items from "../Constants/Secure_items";
//import { ProgressBar } from '@react-native-community/progress-bar-android';

function ReimbursementFundDetails({ setScreen, account }) {
    function back() {
        setScreen(false);
    }
    return (
        <View style={styles.outerContainer}>
            {console.log(account)}
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
                <View style={styles.title}>
                    <Text style={{ fontSize: 20, fontWeight: '500', fontFamily: 'sans-serif-condensed', }}>Funds</Text>
                </View>
                <View style={styles.fundAmount}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', flex: 1 }}>Total Account Value</Text>
                        <Text style={{ fontSize: 27, fontFamily: 'sans-serif-condensed', fontWeight: '700', textAlign: 'right', flex: 1 }}>${Secure_items.accountDetails[0].FundsAvailable}</Text>
                    </View>
                    {/* <View style={{ paddingVertical: 12 }}>
                        <Ionicons name="ios-information-circle-outline" size={40} color="#00806b" />
                    </View> */}
                    
                </View>
                <View style={styles.example}>
                        <Text>Progress Value</Text>
                        <ProgressBarAndroid
                            styleAttr="Horizontal" style={{ borderRadius: 10, transform: [{ scaleX: 1.0 }, { scaleY: 4.5 }], }}
                            indeterminate={false} color="blue" height='40'
                            progress={Math.max(0, Math.min(1, (500 - 70) / 500))} />
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
        width:'80%',
        paddingHorizontal:20,
        
      },
})