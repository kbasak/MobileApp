import React from "react";
import { ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Secure_items from "../Constants/Secure_items";

const MyCart = () => {
    const data = {
        "username": "hema",
        "https://abc.user.token": "token123"
    }
    const usertoken = data["https://abc.user.token"];


    return (
        <>
            {(Secure_items.token) &&
            <ScrollView>
                <Text style={{ paddingVertical: '10%', fontSize: 18, textAlign: 'center' }}>My cart work in progress...</Text>
                <Text>Hello {Secure_items.credentialsOkta}</Text>
                <Text>{Secure_items.token}</Text>
                </ScrollView>}
        </>
    )
}
export default MyCart;