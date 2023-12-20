import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Pressable } from 'react-native';
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import PrimaryButton from '../components/PrimaryButton';
import AdmissionDate from './AdmissionDate';
import DischargeDate from './DischargeDate';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Claims = () => {
  const [claim, setClaim] = useState("");
  const [amount, setAmount] = useState("");
  const [popupVisible, setpopupVisible] = useState(false);
  const [value, setValue] = useState(null);
  const [treatment, setTreatment] = useState('');
  const [addDate, setAddDate] = useState(new Date());
  const [disDate, setDisDate] = useState(new Date());

  const [isFocus, setIsFocus] = useState(false);
  const [isTextFocus, setIsTextFocus] = useState(false);
  const [isClaimFocus, setIsClaimFocus] = useState(false);
  const [AdmissionDateKey, setAdmissionDateKey] = useState(Date.now().toString());
  const [DischargeDateKey, setDischargeDateKey] = useState(Date.now().toString());

  const hideModal = () => {
    setpopupVisible(() => !popupVisible)
    clear();
  };
  const clear = () => {
    setClaim("");
    setAmount("");
    setValue(null);
    setAddDate("");
    setDisDate(null);
    setAdmissionDateKey(Date.now().toString());
    setDischargeDateKey(Date.now().toString());
  }
  const submit = () => {
    setpopupVisible(true);
  }
  const onSubmitEditing = () => {
    console.log("check")
    Keyboard.dismiss();
  }
  const saveForLater = () => {
    const claimDetails=new Map();
    claimDetails.set("treatmentName",treatment)
    claimDetails.set("addDate",addDate.toLocaleDateString())
    claimDetails.set("disDate",disDate.toLocaleDateString())
    claimDetails.set("claimDetails",claim)
    claimDetails.set("amount",amount)
    // claimDetails.push(treatment)
    // claimDetails.push(addDate.toLocaleDateString());
    // claimDetails.push(disDate.toLocaleDateString());
    // claimDetails.push(claim);
    // claimDetails.push(amount);
    console.log(claimDetails)
  }
  const data = [
    { label: 'Cough', value: '1' },
    { label: 'Covid-19', value: '2' },
    { label: 'Delivery', value: '3' },
    { label: 'Hypertension', value: '4' },
    { label: 'Infectious Diseases', value: '5' },
    { label: 'IVF', value: '6' },
    { label: 'Yellow Fever', value: '7' },
    { label: 'Others', value: '8' },
  ];

  const renderLabel = () => {
    if (isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'orange' }]}>
          Treatment Name
        </Text>
      );
    }
    return null;
  };

  return (
    <TouchableWithoutFeedback onPress={onSubmitEditing}>
      <KeyboardAvoidingView behavior='position' style={{ flex: 1, padding: 12 }}>

        <View style={styles.itemDesign}>
          <View style={styles.containerText}>
            <Text style={styles.textFormat}>Choose Treatment Name: </Text>
          </View>
          <View style={styles.container}>
            {renderLabel()}
            <Dropdown
              style={[styles.dropdown, (isFocus) ? { borderColor: 'orange' } : { borderColor: 'grey' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Treatment Name' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setTreatment(item.label);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={isFocus ? 'blue' : 'black'}
                  name="Safety"
                  size={20}
                />
              )}
            />
          </View>
        </View>

        <View style={styles.itemDesign}>

          <View style={styles.containerText}>
            <Text style={styles.textFormat}>Admission Date: </Text>
          </View>
          <AdmissionDate key={AdmissionDateKey} addDate={setAddDate} />
        </View>

        <View style={styles.itemDesign}>

          <View style={styles.containerText}>
            <Text style={styles.textFormat}>Discharge Date: </Text>
          </View>
          <DischargeDate key={DischargeDateKey} disDate={setDisDate} />
        </View>

        <View style={styles.itemDesign}>

          <View style={styles.containerText}>
            <Text style={styles.textFormat}>Claim Details: </Text>
          </View>
          <TextInput placeholder='Enter Claim Details' value={claim}
            onChangeText={(text) => { setClaim(text) }}
            onFocus={() => setIsClaimFocus(true)}
            onBlur={() => setIsClaimFocus(false)}
            style={[styles.textInput, (isClaimFocus) ? { borderColor: 'orange' } : { borderColor: 'grey' }]}
          />
        </View>


        <View style={styles.itemDesign}>
          <View style={styles.containerText}>
            <Text style={styles.textFormat}>Claim Amount: </Text>
          </View>

          <TextInput placeholder='Enter Claim Amount $' value={amount}
            onChangeText={(text) => { setAmount(text) }}
            onFocus={() => setIsTextFocus(true)}
            onBlur={() => setIsTextFocus(false)}
            keyboardType='number-pad'
            style={[styles.textInput, (isTextFocus) ? { borderColor: 'orange' } : { borderColor: 'grey' }]}
          />
        </View>
        <View style={[styles.buttonsContainer, { maxWidth: '50%', alignSelf: 'center' }]}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={saveForLater}>Save For Later</PrimaryButton>
          </View>
        </View>
        <View style={[styles.buttonsContainer, { marginTop: 0 }]}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={clear}>Clear</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={submit}>Submit</PrimaryButton>
          </View>
        </View>
        

        <View style={styles.centeredView}>
        
          <Modal
            animationType="slide"
            transparent={true}
            isVisible={popupVisible} >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Feather name="check-circle" size={75} color="#26c248" onPress={hideModal} style={{marginBottom:20, marginTop:15}}/>
              {/* <Ionicons name="checkmark-sharp" size={75} color="#26c248" onPress={hideModal} style={{marginBottom:20, marginTop:15}}/> */}
              <Text style={{ 
                fontSize: 22, 
                paddingBottom: 10,  
                fontFamily: 'sans-serif',
                }}> 
                  <Text style={{ color: '#13b213', fontWeight: 'bold', fontSize: 24, fontFamily: 'sans-serif' }}>Congrats!</Text> You have Submitted Your Claim Successfully for <Text style={{ color: '#ff7300ff', fontWeight: 'bold' }}>${amount}</Text></Text>
              <PrimaryButton onPress={hideModal}>OK</PrimaryButton>             
              </View>
            </View>
          </Modal>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderWidth: 1,
    paddingLeft: 10,
    padding: 5,
    marginLeft:15,
    marginBottom:5,
    minHeight: 40,
    fontSize: 18,
    maxWidth:'90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { height: 100, borderWidth: .5 },
  container: {
    backgroundColor: 'white',
    padding: 0,
    margin: 2,
    maxWidth: '98%',
    justifyContent: 'center',
    marginLeft: '1%',
    marginTop: 5
  },
  dropdown: {
    minHeight: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginLeft:15,
    marginBottom:5,
    maxWidth:'90%'
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop:20
  },
  buttonContainer: {
    flex: 1
  },
  containerText: {
    margin: 8,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
  },
  textFormat: {
    fontSize: 18,
    fontWeight: "700",
    color: '#00006d',
    fontFamily: 'notoserif',
    marginLeft:10
  },
  itemDesign:{
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    maxHeight: 125, 
    backgroundColor: 'white',
    borderRadius:12,
    overflow:'hidden'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    minWidth:'90%',
    minHeight:'35%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent:'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
});

export default Claims;