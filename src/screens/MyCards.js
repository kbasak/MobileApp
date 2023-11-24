import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native';
import ProgressBar from './ProgressBar';

const Cards = () => {
    const [cards, setCards] = useState([
        {
            id: 1, number: '2376 9847 5467 1234', holder: 'Kausik Basak',
            expiration: '03/28',
            logo: 'https://img.icons8.com/color/70/000000/visa.png',
            background: 'https://cdn.dribbble.com/users/387195/screenshots/2260293/attachments/423582/preview3.png?compress=1&resize=400x300&vertical=top',
            limit: 100000,
            expenditure: 20000

        },
        {
            id: 2, number: '9876 9876 4563 5678', holder: 'Aniket Jha',
            expiration: '09/26', logo: 'https://img.icons8.com/color/70/000000/mastercard.png',
            background: 'https://www.dhresource.com/0x0s/f2-albu-g8-M00-E3-84-rBVaVF5q-d-AGEvcAACOeQl6wTQ367.jpg/grey-wallpapers-3d-stereo-geometric-abstract.jpg',
            limit: 100000,
            expenditure: 80000
        },
        {
            id: 3, number: '7654 9845 8709 9008', holder: 'Hema Priya',
            expiration: '01/27', logo: 'https://img.icons8.com/color/70/000000/visa.png',
            background: 'https://s3.envato.com/files/223757883/590Dark%20Blue%20Abstract%20Low%20Poly%20Background.jpg',
            limit: 100000,
            expenditure: 60000
        },
    ]);

    var progressDetails = <Text style={CardStyle.progressDefaultText}>Click On a Credit Card to View Total Outstanding & Balance Report!!!</Text>;

    const [progressData, setProgressData] = useState(progressDetails);
    function cardExpenseHandler(id) {
        {
            cards.filter(card => card.id === id).map(filteredCard => (
                setProgressData(<>
                    <ProgressBar limit={filteredCard.limit} expenditure={filteredCard.expenditure} cardNumber={filteredCard.number} />
                    <TouchableOpacity style={CardStyle.paymentButton} onPress={cardExpenseRemover}>
                        <Text style={CardStyle.buttonText}>Close</Text>
                    </TouchableOpacity></>)
            ))
        }
    }

    function cardExpenseRemover() {
        setProgressData(progressDetails);
    }

    return (
        <View style={CardStyle.container}>
            <Text style={CardStyle.title}>Credit Cards Info</Text>

            <ScrollView
                horizontal
                contentContainerStyle={CardStyle.carouselContainer}
                showsHorizontalScrollIndicator={false}
            >

                {cards.map((card) => (
                    <Pressable key={card.id} style={({ pressed }) => pressed && CardStyle.pressedItem} onPress={cardExpenseHandler.bind(this, card.id)}>
                        <View style={CardStyle.cardContainer}>
                            <ImageBackground source={{ uri: card.background }} resizeMode="cover" style={CardStyle.image}>
                                <Image source={{ uri: card.logo }} style={CardStyle.logo} />
                                <Text style={CardStyle.cardNumber}>{card.number}</Text>
                                <View style={CardStyle.cardInfoContainer}>
                                    <View style={CardStyle.cardInfoItem}>
                                        <Text style={CardStyle.cardInfoLabel}>Card Holder</Text>
                                        <Text style={CardStyle.cardInfoValue}>{card.holder}</Text>
                                    </View>
                                    <View style={CardStyle.cardInfoItem}>
                                        <Text style={CardStyle.cardInfoLabel}>Expiration</Text>
                                        <Text style={CardStyle.cardInfoValue}>{card.expiration}</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </Pressable>

                ))}
            </ScrollView>
            <View style={CardStyle.progressBar}>
                {progressData}
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    cardStyle: { backgroundColor: 'blue', height: 200, width: 390, margin: 20, borderRadius: 20 },
    textStyle: { color: 'white' }
});

export default Cards;

//Credit Card style 
const CardStyle = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#58f6ee',
        flex:1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000063',
        marginTop:50,
        fontFamily:'serif'
    },
    cardContainer: {
        marginHorizontal: 10,
        width: 300,
        height: 180,
        backgroundColor: 'white',
        borderBottomEndRadius: 10,
        justifyContent: 'space-between',
        elevation: 50,
        borderWidth: 2,
        borderColor: '#401abc',
        borderBottomWidth: 6,
        borderBottomColor: '#ccc',
    },
    pressedItem: {
        opacity: .75
    },
    cardNumber: {
        fontSize: 19,
        letterSpacing: 4,
        marginBottom: 10,
        paddingLeft: 20,
        paddingTop: 25,
        color: '#ffffff',
        fontWeight: '900',
        fontFamily:'serif'
    },
    cardInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20
    },
    cardInfoItem: {
        minWidth: '65%',
        flex: 1,
        paddingLeft: 4
    },
    cardInfoLabel: {
        fontSize: 12,
        color: '#ffffff',
        fontFamily:'sans-serif',
        textTransform:'uppercase'
    },
    cardInfoValue: {
        fontSize: 16,
        fontWeight: '700',
        color: '#ffffff',
        fontFamily:'serif',
        textTransform:'uppercase'
    },
    carouselContainer: {
        marginVertical: 40,
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 30,
        marginLeft: 20,
        marginBottom: 10
    },
    paymentButton: {
        backgroundColor: '#00008B',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 18,
        maxHeight: 40,
        maxWidth: 80,
        marginLeft: '75%'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    progressBar: {
        backgroundColor: '#feddab',
        minHeight: 180,
        maxWidth: '95%',
        marginLeft: 5,
        marginRight: 10,
        borderRadius: 20,
    },
    progressDefaultText: {
        padding: 30,
        margin: 20,
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'monospace',
        color: '#000000'
    }
});

