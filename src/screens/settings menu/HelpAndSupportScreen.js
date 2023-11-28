import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

function HelpAndSupportScreen() {

    const list = [
        'Contact Us',
        'Accessibilty Services',
        'Nondiscrimination Notice',
        'SIGIS User Agreement',
        'Disclaimers'
    ]

    return (
        < View style={{ backgroundColor: '#DDDDDD' }}>
            <View style={{ backgroundColor: 'white' }}>
                {list.map((option, index) => (
                    <View key={index} style={{
                        borderBottomWidth: 3,
                        borderBottomColor: '#DDDDDD', padding: 10
                    }}>
                        <TouchableOpacity>
                            <Text style={styles.text}>{option}</Text>
                        </TouchableOpacity>
                    </View>

                ))}
            </View>
        </View >
    )
}

export default HelpAndSupportScreen;

const styles = StyleSheet.create({
    text: {
        margin: 10,
        fontSize: 18,
        color: '#2b2bcd',
        fontSize: 24,
        fontWeight: 'bold'
    },
});