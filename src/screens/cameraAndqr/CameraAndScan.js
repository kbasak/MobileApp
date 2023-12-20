import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
function CameraAndScan() {
    const navigation = useNavigation();

    const handleOptionPress = (content) => {
        switch (content) {
          case 'TakePhoto':
            navigation.navigate('Camera');
            break;
          case 'ScanQR':
            navigation.navigate('Scanner');
            break;
          default:
            break;
        }
      };

    return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            //onPress={__startCamera}
            onPress={() => handleOptionPress('TakePhoto')}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: '#14274e',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Take picture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            //onPress={scanBarcode}
            onPress={() => handleOptionPress('ScanQR')}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: '#14274e',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              marginTop:20
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Scan QR
            </Text>
          </TouchableOpacity>
        </View>
    );
}
export default CameraAndScan;