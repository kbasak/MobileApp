import { Pressable, StyleSheet, Text, View } from "react-native";
function PrimaryButton({ children, onPress }) {
    
    return (

        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{ color: '#080033' }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
        margin:10
    },
    buttonInnerContainer: {
        backgroundColor: '#2c0085',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize:18,
        fontWeight:'600',
        fontFamily:'serif'
    }
})