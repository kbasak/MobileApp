import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const Info = ()=>
{
return (

    <View > 
        <Text style={{color: "blue",marginBottom:"10%"}}>This is my info screen</Text>
        <Text>Company OverView</Text>
        <Text>Contact Information</Text>
        <Text>Services Provided</Text>
        <Text>Educational Resources</Text>
        <Text>Client Testimonials</Text>
        <Text>News and updates</Text>
        <Text>FAQs</Text>
        <Text>Partnerships and Affiliations</Text>
    </View>
);

}

const styles = StyleSheet.create({});

export default Info;