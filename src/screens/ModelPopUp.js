import react from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { Modal } from 'react-native-paper';

const PopUpModel =()=>{

    return(
        <View>
            <Modal transparent={true}>
                <View>
                    <Text>Pop up Model</Text>
                </View>
            </Modal>
        </View>
    );
}


const style = StyleSheet.create({

});

export default PopUpModel;