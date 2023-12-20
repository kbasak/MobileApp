import { Animated, StyleSheet, Text, View } from "react-native";
//progress bar component
function ProgressBar({ limit, expenditure, cardNumber }) {
    var creditCardNumber=cardNumber.slice(-4);
    var totalOunstandings=expenditure;
    var remainingBalance=limit-expenditure;
    var ounstandingsPercentage=Math.floor((expenditure/limit)*100)+'%';
    return (
        <View style={styles.container}>
            <Text style={{ paddingBottom: 12, color:'#05001c', fontSize: 22, fontWeight: '700', fontFamily:'sans-serif' }}>
                Credit Card Report of XX<Text style={{color:'#000750'}}>{creditCardNumber}</Text>
            </Text>
            <View style={styles.progressBar}>
                <Animated.View style={{
                    backgroundColor: "#fffb00",
                    width: ounstandingsPercentage, borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10, borderEndColor: 'black',
                    borderEndWidth: 2
                }} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ minWidth: 300, marginLeft: 5 }}>
                    <Text style={{
                        minWidth: 140, marginLeft: 50,
                        marginTop: 5, fontSize: 15,
                        fontWeight: 'bold',
                        color:'#170080',
                    }}>
                        Total Outstandings:{totalOunstandings}
                    </Text>
                </View>
                <View style={{paddingBottom:5}}>
                    <Text style={{
                        width: 139, marginRight: 25,
                        marginTop: 5, fontSize: 15,
                        fontWeight: 'bold',
                        color:'#170080',
                    }}>
                        Available Credit Limit:{remainingBalance}
                    </Text>
                </View>
            </View>
        </View >
    );
}
export default ProgressBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column", //column direction
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '12%',
        padding: 8,
    },
    progressBar: {
        height: 25,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#00ff44',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 10
    }
});