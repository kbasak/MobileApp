import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
//Date Picker
function DischargeDate() {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    onFocus={showDatepicker}
                    placeholder="useless placeholder"
                    value={date.toLocaleDateString()} />
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}
                <AntDesign onPress={showDatepicker} name="calendar" size={40} color="#ff4400" style={{paddingLeft:10}} />
            </View>
    );
}

export default DischargeDate;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderWidth: 1,
        paddingLeft: 10,
        padding: 5,
        marginLeft: 15,
        marginBottom: 5,
        minHeight: 40,
        fontSize: 18,
        minWidth: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'gray'
      }
})