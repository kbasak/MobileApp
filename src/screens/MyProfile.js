import { View, TextInput, StyleSheet, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useState } from "react";

const Profile = () => {
    const [email, setEmail] = useState("Karthik@gmail.com");
    const [phone, setPhone] = useState("9962964559");
    const [dob, setDob] = useState("07/Feb/1990");
    const [address, setAddress] = useState("My address");

    const [emailEditable,setEmailEditable] = useState(false);
    const [phoneEditable,setPhoneEditable] = useState(false);
    const [dobEditable,setDobEditable] = useState(false);
    const [addressEditable,setAdressEditable] = useState(false);

    //Email............
    const editEmail = () => {
        setEmailEditable(!emailEditable);
    }
    var emailEditOption = <Feather
        style={styles.searchIcon}
        name="edit-2" size={26} color='#ff8800'
        onPress={editEmail} />;
    if (emailEditable) {
        emailEditOption = <Feather style={styles.searchIcon}
            name="check-circle" size={24} color="#16007a" onPress={editEmail} />;
    }

    //Phone............
    const editPhone = () => {
        setPhoneEditable(!phoneEditable);
    }
    var phoneEditOption = <Feather
        style={styles.searchIcon}
        name="edit-2" size={26} color='#ff8800'
        onPress={editPhone} />;
    if (phoneEditable) {
        phoneEditOption = <Feather style={styles.searchIcon}
            name="check-circle" size={24} color="#16007a" onPress={editPhone} />;
    }

    //DOB............
    const editDOB = () => {
        setDobEditable(!dobEditable);
    }
    var dobEditOption = <Feather
        style={styles.searchIcon}
        name="edit-2" size={26} color='#ff8800'
        onPress={editDOB} />;
    if (dobEditable) {
        dobEditOption = <Feather style={styles.searchIcon}
            name="check-circle" size={24} color="#16007a" onPress={editDOB} />;
    }

    //Address........
    const editAddress = () => {
        setAdressEditable(!addressEditable);
    }
    var addressEditOption = <Feather
        style={styles.searchIcon}
        name="edit-2" size={26} color='#ff8800'
        onPress={editAddress} />;
    if (addressEditable) {
        addressEditOption = <Feather style={styles.searchIcon}
            name="check-circle" size={24} color="#16007a" onPress={editAddress} />;
    }
    

    return (
        <>
            <View style={styles.containerText}>
                <Text style={styles.textFormat}>Email Id: </Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={[styles.textStyle, { borderColor: emailEditable ? '#ffa600' : 'gray' },
                    {color: emailEditable ? '#000000' : '#00000094'}]}
                    value={email}
                    editable={(emailEditable)}
                    onChangeText={(text) => { setEmail(text) }}
                    placeholder="Enter Email!!!"
                />
                <View>
                    {emailEditOption}
                </View>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.textFormat}>Phone Number: </Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={[styles.textStyle, { borderColor: phoneEditable ? '#ffa600' : 'gray' },
                    {color: phoneEditable ? '#000000' : '#00000094'}]}
                    value={phone}
                    editable={(phoneEditable)}
                    onChangeText={(text) => { setPhone(text) }}
                    placeholder="Enter Phone!!!"
                />
                <View>
                    {phoneEditOption}
                </View>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.textFormat}>DOB:</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={[styles.textStyle, { 
                        borderColor: dobEditable ? '#ffa600' : 'gray'
                    },{color: dobEditable ? '#000000' : '#00000094'}]}
                    value={dob}
                    editable={(dobEditable)}
                    onChangeText={(text) => { setDob(text) }}
                    placeholder="Enter DOB!!!"
                />
                <View>
                    {dobEditOption}
                </View>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.textFormat}>Address: </Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={[styles.textStyle, { borderColor: addressEditable ? '#ffa600' : 'gray' },
                    {color: addressEditable ? '#000000' : '#00000094'}]}
                    value={address}
                    editable={(addressEditable)}
                    onChangeText={(text) => { setAddress(text) }}
                    placeholder="Enter Address!!!"
                // onFocus={editAddress}
                />
                <View>
                    {addressEditOption}
                </View>
            </View >
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        marginLeft:10,
        marginBottom:10,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    containerText: {
        margin:12,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    textFormat:{
        fontSize: 22,
        fontWeight:"600",
        color:'#00006d',
        fontFamily:'notoserif'
    },
    searchIcon: {
        marginTop: -12,
        marginLeft: -35,
        width:27,
        height:27,
        position: 'absolute',
    },
    textStyle: {
        fontSize: 21,
        minHeight: 60, 
        marginLeft: 0,
        minWidth: '100%',
        maxWidth: '100%',
        paddingTop: 10,
        paddingRight: 35,
        paddingBottom: 10,
        paddingLeft: 35,
        borderWidth:1,
        borderRadius: 10,
        //color: '#ff2f00ea',
        fontFamily:'serif',
        fontWeight:'700'
    }
});
export default Profile;