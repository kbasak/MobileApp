import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import PrimaryButton from '../components/PrimaryButton';

const Claims = () => {
  const [claim, setClaim] = useState("");
  const [amount, setAmount] = useState("");
  const [popupVisible, setpopupVisible] = useState(false);
  const [value, setValue] = useState(null);

  const [isFocus, setIsFocus] = useState(false);
  const [isTextFocus, setIsTextFocus] = useState(false);
  const [isClaimFocus, setIsClaimFocus] = useState(false);
  const hideModal = () => setpopupVisible(() => !popupVisible);
  const clear = () => {
    setClaim("");
    setAmount("");
    setValue(null);
  }
  const submit = () => {
    setpopupVisible(true);
  }
  const onSubmitEditing = () => {
    console.log("check")
    Keyboard.dismiss();
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

  var claimDetails = 'Claim Details';

  return (
    <TouchableWithoutFeedback onPress={onSubmitEditing}>
      <View style={{ flex: 1, padding: 12 }}>

        <View style={{ margin: 20, maxHeight: 135, backgroundColor: 'white' }}>
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
        <View style={{ margin: 20, maxHeight: 125, backgroundColor: 'white' }}>

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


        <View style={{ margin: 20, maxHeight: 125, backgroundColor: 'white' }}>
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

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={clear}>Clear</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={submit}>Submit</PrimaryButton>
          </View>
        </View>

        <View>
          <Modal isVisible={popupVisible}>
            <View style={styles.modal}>
              <Text style={{ fontSize: 26, paddingBottom: 10, paddingTop: 10, fontFamily: 'sans-serif' }}><Text style={{ color: '#00a800', fontWeight: 'bold' }}>Congrats!</Text> You have Submitted Your Claim Successfully for <Text style={{ color: '#ff8800ff', fontWeight: 'bold' }}>${amount}</Text></Text>
              <PrimaryButton onPress={hideModal}>Okay</PrimaryButton>
            </View>
          </Modal>
        </View>
      </View>
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
    minHeight: 55,
    fontSize: 20,

  },
  text: { height: 100, borderWidth: .5 },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    height: 200,
    width: '80%',
    borderRadius: 25,
    borderWidth: 2,
    elevation: 4,
    borderColor: '#313030',
    marginTop: 40,
    marginLeft: 40,
    padding: 8
  },
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
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
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
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  containerText: {
    margin: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  textFormat: {
    fontSize: 22,
    fontWeight: "700",
    color: '#00006d',
    fontFamily: 'notoserif'
  },
});

export default Claims;