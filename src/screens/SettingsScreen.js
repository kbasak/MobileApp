import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

function SettingsScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const your_account = [
        'Account',
        'Privacy'
    ]

    const app_control = [
        'Notifications',
        'Language',
        'Order and Payments'
    ]

    const more_info = [
        'Help & Support',
        'About'
    ]

    const filteredYourAccount = your_account.filter((option) =>
        option.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    const filteredAppControl = app_control.filter((option) =>
        option.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    const filteredMoreInfo = more_info.filter((option) =>
        option.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );

    return (
        <ScrollView>
            <View style={styles.preContainer}>
                <View style={styles.searchContainer}>
                    <Ionicons name="ios-search" size={20} color="#3E3F3F" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="search"
                        value={searchQuery}
                        onChangeText={text => setSearchQuery(text)}
                    />
                </View>
            </View>
            <View style={styles.container}>
                {!!filteredYourAccount.length && (
                    <View style={[styles.blocks, styles.firstBlock]}>
                        {searchQuery === '' && (
                            <View>
                                <Text style={styles.title}>Your Account</Text>
                            </View>
                        )}
                        <View style={styles.list}>
                            {filteredYourAccount.map((option, index) => (
                                <TouchableOpacity key={index}>
                                    <Text style={styles.text}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}
                {!!filteredAppControl.length && (
                    <View style={styles.blocks}>
                        {searchQuery === '' && (
                            <View>
                                <Text style={styles.title}>App Controls</Text>
                            </View>
                        )}
                        <View style={styles.list}>
                            {filteredAppControl.map((option, index) => (
                                <TouchableOpacity key={index}>
                                    <Text style={styles.text}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}
                {!!filteredMoreInfo.length && (
                    <View style={styles.blocks}>
                        {searchQuery === '' && (
                            <View>
                                <Text style={styles.title}>More Info</Text>
                            </View>
                        )}
                        <View style={styles.list}>
                            {filteredMoreInfo.map((option, index) => (
                                <TouchableOpacity key={index}>
                                    <Text style={styles.text}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    )

}

export default SettingsScreen;

const styles = StyleSheet.create({
    preContainer: {
        marginTop: 10,
        marginBottom: -1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 5,
    },
    container: {
        flex: 1,
        marginTop: '5%',
        marginLeft:'5%',
        marginRight:'5%',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#d3d1d1',
        elevation:1,
        borderRadius:12,
        overflow:'hidden'
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
        marginBottom: -3,
        height: 40,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: '#DDDDDD'
    },
    searchIcon: {
        marginLeft: 10
    },
    searchInput: {
        paddingLeft: 10,
        minWidth: '75%'
    },
    firstBlock: {
        marginTop: 0
    },
    blocks: {
        marginTop: 6,
        backgroundColor: 'white'
    },
    list: {
        marginLeft: 20,
        marginTop: 10
    },
    text: {
        margin: 10,
        fontSize: 18
    },
    title: {
        color: '#3E3F3F',
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10
    }

})

// test comment for checking some changes in github