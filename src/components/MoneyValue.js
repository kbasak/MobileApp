import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoneyValue = ({ balance, style, baseTextFontSize, superScriptTextFontSize }) => {
    const isValidBalance = typeof balance === 'number' && !isNaN(balance);
    const [baseText, decimal] = isValidBalance ? balance.toFixed(2).split('.') : ['00', '00'];

    return (
        <View style={styles.container}>
            <Text style={[styles.baseText, { fontSize: baseTextFontSize }, style]}>{baseText}</Text>
            {decimal && (
                <Text style={[styles.superscript, { fontSize: superScriptTextFontSize }, style]}>
                    {decimal}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    baseText: {
        // fontSize: 20,
        // fontFamily: 'sans-serif-condensed',
        // fontWeight: 'bold',
        lineHeight: 30
    },
    superscript: {
        // fontSize: 16,
        marginLeft: 2,
        lineHeight: 20,
        // fontFamily: 'sans-serif-condensed',
        // fontWeight: 'bold'
    },
});

export default MoneyValue;