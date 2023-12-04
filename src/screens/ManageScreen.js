import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';

const Manage = () => {
    const [expandedElement, setExpandedElement] = useState(null);
    const [expandedSubElement, setExpandedSubElement] = useState(null);

    const data = [
        {
            heading: 'Product Offerings',
            description: [
                {
                    subHeading: 'Self_Ditected IRAs',
                    subDescription: [
                        'Invest beyond stocks and bonds - hold real estate, private equity even gold within your retirement savings. (Description: Diversify your IRA and potentially achieve higher returns.)'
                    ],
                },
                {
                    subHeading: 'Rollover IRAs',
                    subDescription: [
                        'Seamlessly consolidate retirement savings from multiple employers or plans into one, easy-to-manage account. (Description: Simplify your retirement and gain a clearer financial picture.)'
                    ],
                },
                {
                    subHeading: 'Uncashed Check Services',
                    subDescription: [
                        'Breathe easy knowing unclaimed checks and forgotten funds are securely held and tracked, ready for you when you need them. (Description: Never lose track of money again - Millennium Trust safeguards your forgotten funds.)'
                    ],
                },
                {
                    subHeading: 'Plan Termination Service',
                    subDescription: [
                        'Efficiently close out old retirement plans, ensuring compliance and minimizing administrative burdens. (Description: Move on with confidence - let Millennium Trust handle the complexities of plan closure.)'
                    ],
                },
            ],
        },
        {
            heading: 'Investment Opportunities',
            description: [
                {
                    subHeading: 'Ride the wave of alternative investment',
                    subDescription: [
                        'The demand for real estate, private equity, and other non-traditional assets is skyrocketing. Millennium Trust is at the forefront, providing the secure custody solutions investors need.'
                    ],
                },
                {
                    subHeading: 'Recurring revenue, predictable growth',
                    subDescription: [
                        'Unlike cyclical businesses, Millennium Trust thrives on predictable account fees and transaction volumes, ensuring consistent income and stable financial performance.'
                    ],
                },
                {
                    subHeading: 'Profitable and cash-rich',
                    subDescription: [
                        'The company consistently generates healthy profits and maintains a strong cash flow position, fueling future investments and acquisitions.'
                    ],
                },
                {
                    subHeading: 'Leadership you can trust',
                    subDescription: [
                        'Seasoned executives with a deep understanding of the financial services landscape guide Millennium Trust\'s strategic direction.'
                    ],
                },
                {
                    subHeading: 'Expanding horizons through acquisitions',
                    subDescription: [
                        'Smartly chosen acquisitions broaden Millennium Trust\'s service offerings and client base, solidifying its market leadership.'
                    ],
                },
                {
                    subHeading: 'Tech-powered efficiency',
                    subDescription: [
                        'A state-of-the-art platform ensures seamless account management, secure transactions, and real-time data access for clients and advisors alike.'
                    ],
                },
            ],
        },
        {
            heading: 'Performance Metrics',
            description: [

                { subHeading: 'Financial Performance' },
                { subHeading: 'Client growth' },
                { subHeading: 'Operational Efficiency' },
                { subHeading: 'Market Recognition' }
            ],
        },
        {
            heading: 'Inductry Insights',
            description: [

                { subHeading: 'Growing Appetite for Alternative Investments' },
                { subHeading: 'Shift towards Technology and Automation' },
                { subHeading: 'Regulatory Landscape Evolution' },
                { subHeading: 'Focus on ESG and Impact Investing' }
            ],
        },
        {
            heading: 'Customer Support',
            description: [

                { subHeading: 'Live Chat' },
                { subHeading: 'Phone Support' },
                { subHeading: 'Email Support' }
            ],
        }
    ];

    const toggleElement = (index) => {
        if (expandedElement === index) {
            setExpandedElement(null);
            setExpandedSubElement(null);
        }

        else {
            setExpandedElement(index);
            setExpandedSubElement(null);
        }
    };

    const toggleSubElement = (subIndex) => {
        if (expandedSubElement === subIndex) {
            setExpandedSubElement(null);
        } else {
            setExpandedSubElement(subIndex);
        }
    };
    return (

        <SafeAreaView>
            <View style={styles.container}>
                {data.map((item, index) => (
                    <View key={index} style={styles.conatiner2}>
                        <TouchableOpacity onPress={() => { toggleElement(index) }}>
                            <Text style={styles.heading}>{item.heading}</Text>
                        </TouchableOpacity>
                        {expandedElement === index && (
                            <ScrollView>
                                {Array.isArray(item.description) ? (
                                    item.description.map((subItem, subIndex) => (
                                        <View key={subIndex} style={styles.container3}>
                                            <TouchableOpacity onPress={() => toggleSubElement(subIndex)}  >
                                                <Text style={styles.subHeading} onPress={() => { toggleSubElement(subIndex) }}>{subItem.subHeading}</Text>
                                            </TouchableOpacity>
                                            {/* <View>
                      <Text style={styles.service} >{subItem.subService} </Text>
                    </View> */}
                                            {index === 2 ? '' : expandedSubElement === subIndex && (
                                                <View style={styles.subDescriptionContainer}>
                                                    {subItem.subDescription.map((line, lineIndex) => (
                                                        <Text key={lineIndex} style={styles.subDescription}>
                                                            {line}
                                                        </Text>
                                                    ))}
                                                </View>

                                            )}
                                        </View>
                                    ))
                                ) : (
                                    <Text style={styles.description}>{item.description}</Text>
                                )}
                            </ScrollView>
                        )}
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#DDDDDD',

    },
    conatiner2: {
        backgroundColor: 'white',borderBottomWidth: 3,
        borderBottomColor: '#DDDDDD',
        padding: 10
    },
    container3: {
        backgroundColor: 'white', 
        borderWidth: 3,
        borderColor: '#DDDDDD',
        padding: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
        color: '#2b2bcd',

    },
    subHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
        marginLeft: 16,
    },
    service: {
        fontSize: 18,
        marginTop: -30,
        marginVertical: -15,
        marginLeft: 16,
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
        marginLeft: 13,
        textAlign: 'justify'
    },
    subDescription: {
        fontSize: 14,
        marginLeft: 16,
        marginBottom: 16,
    },
    subDescriptionContainer: {
        marginLeft: 26,

    },
    subDescription: {
        fontSize: 16,
        marginBottom: 8,

    },
});

export default Manage;