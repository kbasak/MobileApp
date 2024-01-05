import { Entypo, Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Secure_items from "../Constants/Secure_items";
import { latestAccountDetails } from "../util/Accounts";
import { hsaAccountDetails } from "../util/HSAAccount";
import { reimAccountDetails } from "../util/ReAccounts";


function HomeItem({ setScreen, setFund, setAccount }) {

    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{      
        async function fetchData() {
            try {
                const response = await latestAccountDetails();
                setIsLoading(true);
                return response;
            }
            catch (error) {
                console.log("Invalid Token")
            }
        }
        fetchData();
    },[])
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

    const fundDetails = async (id, emp_id, employer_id, account) => {
    //async function fundDetails(id) {
        try {
            //await latestAccountDetails();
            // funds.filter(fund => fund.id === id).map(filteredCard => (
            //     setFund(filteredCard)
            // ))
            await hsaAccountDetails(id, emp_id, employer_id);
            setFund("HSAAccount")
            setAccount(account);
            setScreen(true);
        } catch (error) {
            console.log(error);
        }    
    }

    const reimFundDetails = async (id, emp_id, employer_id, account) => {
        //async function fundDetails(id) {
        try {
            //await latestAccountDetails();
            // funds.filter(fund => fund.id === id).map(filteredCard => (
            //     setFund(filteredCard)
            // ))
            await reimAccountDetails(id, emp_id, employer_id);
            setFund("ReimbursementAccount");
            setAccount(account);
            setScreen(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        (isLoading) ?
        (<View style={styles.outerContainer}>
            <View style={[styles.title, { backgroundColor: '#f3f3f3' }]}>
                <Text style={{ fontSize: 19, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Your Accounts</Text>
            </View>
            {Secure_items.hsaHasAccount &&
            <>
                    {Secure_items.accountType[0].map((account) => (
                        <View style={[styles.fundInfo, { marginTop: 2 }]} key={account.AccountType}>
                            <Pressable key={account.AccountType} android_ripple={{ color: '#a9fcf7ff' }} onPressOut={fundDetails.bind(this, account.ID, account.EmployeeId, account.EmployerId, account)} >
                                {/* {console.log(account)} */}
                                <View style={styles.fundName}>
                                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#2020ba', fontFamily: 'sans-serif-condensed', padding: 0 }}>
                                        {/* {funds[0].fundName} */}
                                        {account.Description}
                                    </Text>
                                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', paddingVertical: 5 }}>
                                        {/* {funds[0].EmpName} */}
                                        {account.EmployerName}
                                    </Text>
                                </View>
                            </Pressable>
                            <View style={styles.fundName}>
                                <Text style={{ fontSize: 22, fontFamily: 'sans-serif-condensed', fontWeight: 'bold' }}>
                                    {/* {funds[0].accValue} */}
                                    ${account.Balance}
                                </Text>
                            </View>
                        </View>
                    ))}
            </>}
            {Secure_items.reimbursementHasAccount && 
            <>
                {Secure_items.reAccountType[0].map((account) => (
                        <View style={[styles.fundInfo, { marginTop: 2 }]} key={account.AccountType}>
                            <Pressable key={account.AccountType} android_ripple={{ color: '#a9fcf7ff' }} onPressOut={reimFundDetails.bind(this, account.ID, account.EmployeeId, account.EmployerId, account)} >
                                <View style={styles.fundName}>
                                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#2020ba', fontFamily: 'sans-serif-condensed', padding: 0 }}>
                                        {/* {funds[0].fundName} */}
                                        {account.Description}
                                    </Text>
                                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', paddingVertical: 5 }}>
                                        {/* {funds[0].EmpName} */}
                                        {account.EmployerName}
                                    </Text>
                                </View>
                            </Pressable>
                            <View style={styles.fundName}>
                                <Text style={{ fontSize: 22, fontFamily: 'sans-serif-condensed', fontWeight: 'bold' }}>
                                    {/* {funds[0].accValue} */}
                                    ${account.Balance}
                                </Text>
                            </View>
                        </View>
                    ))}
            </>} 
            <View style={styles.todoitem}>
                <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>TO DO</Text>
            </View>
            <View style={styles.todoInfo}>
                <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: 'bold', fontFamily: 'sans-serif-condensed' }}>You are all set!</Text>
                <Text style={{ fontSize: 18, paddingTop: 5, fontFamily: 'sans-serif-condensed' }}>You have nothing on your to do list.</Text>
            </View>
        </View>):
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Feather name="loader" size={50} color="#000000" style={{ marginBottom: 16, marginTop: 25 }} />
                    <Text style={{
                        fontSize: 20,
                        paddingBottom: 0,
                        fontFamily: 'sans-serif-medium',
                        textAlign: 'center'
                    }}>
                        Loading ...
                    </Text>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    modalView: {
        maxWidth: '60%',
        maxHeight: '30%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        paddingTop:0,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 100,
    },
})