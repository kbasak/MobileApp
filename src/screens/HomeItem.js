import { Entypo, Feather, Foundation } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import MoneyValue from "../components/MoneyValue";
import Secure_items from "../Constants/Secure_items";
import { latestAccountDetails } from "../util/Accounts";
import { esaAccountDetails } from "../util/ESAAccount";
import { hiaAccountDetails } from "../util/HIAAccount";
import { hsaAccountDetails } from "../util/HSAAccount";
import { reimAccountDetails } from "../util/ReAccounts";


function HomeItem({ setScreen, setFund, setAccount }) {

    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
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
    }, [])
    
    const fundDetails = async (id, emp_id, employer_id, account) => {
        //async function fundDetails(id) {
        try {
            //await latestAccountDetails();
            // funds.filter(fund => fund.id === id).map(filteredCard => (
            //     setFund(filteredCard)
            // ))
            if (account.AccountType === "HSA") {
                console.log(account.AccountType)
                await hsaAccountDetails(id, emp_id, employer_id);
                setFund("HSAAccount")
                setAccount(account);
                setScreen(true);
            } else if (account.AccountType === "HIA") {
                console.log(account.AccountType)
                await hiaAccountDetails(id, emp_id, employer_id);
                setFund("HIAAccount")
                setAccount(account);
                setScreen(true);
            } else if (account.AccountType === "ESA") {
                console.log(account.AccountType)
                await esaAccountDetails(id, emp_id, employer_id);
                setFund("ESAAccount")
                setAccount(account);
                setScreen(true);
            }
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
        }//#87CEFA
        //#89CFF0
    }

    const customTextStyle = {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        color: '#000080'
    };

    let totalBalance = 0;
    HSA = ['Health Savings Account', 'Health Investment Account'];

    Secure_items.accountType[0].forEach(account => {
        if (HSA.includes(account.Description)) {
            totalBalance += parseFloat(account.Balance);
        }
    })

    return (
        (isLoading) ?
            (<View style={styles.outerContainer}>
                <View style={[styles.title, { backgroundColor: '#f3f3f3' }]}>
                    <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>Your Accounts</Text>
                </View>
                {Secure_items.hsaHasAccount &&
                    <>
                        <View style={[styles.fundInfo, { marginTop: 0 }]}>

                            {/* {console.log(account)} */}
                            <View style={styles.fundName}>
                                <Text style={{ fontSize: 19, fontWeight: '700', fontFamily: 'sans-serif-condensed', color: 'black', padding: 0 }}>
                                    {/* {funds[0].fundName} */}
                                    {/* {account.Description} */}
                                    Health Savings Account
                                </Text>
                                <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed', paddingVertical: 5, textTransform: 'uppercase' }}>
                                    {/* {funds[0].EmpName} */}
                                    {/* {account.EmployerName} */}
                                    {Secure_items.accountType[0][0].EmployerName}
                                </Text>
                            </View>

                            <View>
                                <View style={{ fontFamily: 'sans-serif-condensed', marginHorizontal: 10, marginTop: 15 }}>
                                    <Text>Total Account Value</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: 2, justifyContent: 'flex-end', marginHorizontal: 10 }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', fontWeight: 'bold', lineHeight: 25}}>
                                        $
                                    </Text>
                                    {/* <Text style={{ fontSize: 20, fontFamily: 'sans-serif-condensed', fontWeight: 'bold',lineHeight: 30 }}>
        {account.Balance}
    </Text> */}
                                    <MoneyValue
                                        balance={totalBalance}
                                        style={customTextStyle}
                                        baseTextFontSize={20}
                                        superScriptTextFontSize={12}
                                    />
                                </View>
                            </View>
                        </View>
                        {Secure_items.accountType[0].map((account) => (
                            HSA.includes(account.Description) &&
                            <View style={[styles.fundInfo, { marginTop: 0, backgroundColor: '#f3f3f3', alignItems: 'center' }]} key={account.AccountType}>
                                <Pressable key={account.AccountType} android_ripple={{ color: '#89CFF0' }} onPressOut={fundDetails.bind(this, account.ID, account.EmployeeId, account.EmployerId, account)} >
                                    {/* {console.log(account)} */}
                                    <View style={styles.fundName}>
                                        <Text style={{ fontSize: 19, fontWeight: '700', color: '#1F75FE', fontFamily: 'sans-serif-condensed', padding: 0, marginLeft: 20 }}>
                                            {/* {funds[0].fundName} */}
                                            {account.Description === 'Health Savings Account' ? 'Deposite Account' : 'Invenstment Account'}
                                        </Text>
                                    </View>
                                </Pressable>
                                <View style={[styles.fundName, { flexDirection: 'row' }]}>
                                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', fontWeight: 'bold', lineHeight: 25 }}>
                                        $
                                    </Text>
                                    {/* <Text style={{ fontSize: 20, fontFamily: 'sans-serif-condensed', fontWeight: 'bold',lineHeight: 30 }}>
                                    {account.Balance}
                                </Text> */}
                                    <MoneyValue
                                        balance={account.Balance}
                                        style={customTextStyle}
                                        baseTextFontSize={20}
                                        superScriptTextFontSize={12}
                                    />
                                </View>
                            </View>
                        ))}

                        {Secure_items.accountType[0].map((account) => (
                            !HSA.includes(account.Description) &&
                            <View style={[styles.fundInfo, { marginTop: 1 }]} key={account.AccountType}>
                                <Pressable key={account.AccountType} android_ripple={{ color: '#89CFF0' }} onPressOut={fundDetails.bind(this, account.ID, account.EmployeeId, account.EmployerId, account)} >
                                    {/* {console.log(account)} */}
                                    <View style={styles.fundName}>
                                        <Text style={{ fontSize: 19, fontWeight: '700', color: '#1F75FE', fontFamily: 'sans-serif-condensed', padding: 0 }}>
                                            {/* {funds[0].fundName} */}
                                            {account.Description}
                                        </Text>
                                        <Text style={{ fontSize: 15, fontFamily: 'sans-serif-condensed', paddingVertical: 5, textTransform: 'uppercase' }}>
                                            {/* {funds[0].EmpName} */}
                                            {account.EmployerName}
                                        </Text>
                                    </View>
                                </Pressable>
                                <View style={[styles.fundName, { flexDirection: 'row' }]}>
                                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', fontWeight: 'bold', lineHeight: 25 }}>
                                        $
                                    </Text>
                                    {/* <Text style={{ fontSize: 20, fontFamily: 'sans-serif-condensed', fontWeight: 'bold',lineHeight: 30 }}>
                                    {account.Balance}
                                </Text> */}
                                    <MoneyValue
                                        balance={account.Balance}
                                        style={customTextStyle}
                                        baseTextFontSize={20}
                                        superScriptTextFontSize={12}
                                    />
                                </View>
                            </View>
                        ))}
                    </>}
                {Secure_items.reimbursementHasAccount &&
                    <>
                        {Secure_items.reAccountType[0].map((account) => (
                            <View style={[styles.fundInfo, { marginTop: 2 }]} key={account.AccountType}>
                                <Pressable key={account.AccountType} android_ripple={{ color: '#89CFF0' }} onPressOut={reimFundDetails.bind(this, account.ID, account.EmployeeId, account.EmployerId, account)} >
                                    <View style={styles.fundName}>
                                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#1F75FE', fontFamily: 'sans-serif-condensed', padding: 0 }}>
                                            {/* {funds[0].fundName} */}
                                            {account.Description}
                                        </Text>
                                        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-condensed', paddingVertical: 5, textTransform: 'uppercase' }}>
                                            {/* {funds[0].EmpName} */}
                                            {account.EmployerName}
                                        </Text>
                                    </View>
                                </Pressable>
                                <View style={[styles.fundName, { flexDirection: 'row' }]}>
                                    <Text style={{ fontSize: 20, fontFamily: 'sans-serif-condensed', fontWeight: 'bold', lineHeight: 20 }}>
                                        <Foundation name="dollar" size={24} color="#000080" />
                                    </Text>
                                    {/* <Text style={{ fontSize: 20, fontFamily: 'sans-serif-condensed', fontWeight: 'bold',lineHeight: 30 }}>
                                    {account.Balance}
                                </Text> */}
                                    <MoneyValue
                                        balance={account.Balance}
                                        style={customTextStyle}
                                        baseTextFontSize={20}
                                        superScriptTextFontSize={16}
                                    />
                                </View>
                            </View>
                        ))}
                    </>}
                <View style={styles.todoitem}>
                    <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'sans-serif-condensed' }}>To Do</Text>
                </View>
                <View style={styles.todoInfo}>
                    <Text style={{ fontSize: 20, paddingBottom: 10, fontWeight: 'bold', fontFamily: 'sans-serif-condensed', color: '#1F75FE' }}>You are all set!</Text>
                    <Text style={{ fontSize: 18, paddingTop: 5, fontFamily: 'sans-serif-condensed' }}>You have nothing on your to do list.</Text>
                </View>
            </View>) :
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
        minHeight: 70,
        maxHeight: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 2.5,
        marginLeft: 10,
        marginRight: 10,
        elevation: 5
    },
    fundName: {
        marginHorizontal: 10,
        marginVertical: 15,
    },
    todoitem: {
        minHeight: 60,
        backgroundColor: '#f3f3f3',
        marginTop: 15,
        marginHorizontal: 10,
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
        elevation: 5,
        borderLeftWidth: 6,
        borderLeftColor: 'yellow',


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
        paddingTop: 0,
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