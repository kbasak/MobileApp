import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView, SafeAreaView, FlatList } from 'react-native';
 
const Info = () => {
  const [expandedElement, setExpandedElement] = useState(null);
  const [expandedSubElement, setExpandedSubElement] = useState(null);
 
  const data = [
    {
      heading: 'Company Overview',
      description:
        'Millennium Trust Company is a leading financial institution committed to providing ' +
        'innovative solutions for managing investment accounts. Our focus is on empowering ' +
        'individuals to make informed financial decisions and achieve their financial goals.',
    },
    {
      heading: 'Contact Information',
      description: [
        {
          subHeading: 'Automatic Rollover Accounts',
          subDescription: [
            'If your account rolled over from a previous employer or terminated plan:',
            'Phone: 877.682.4727',
            'Email: arp@mtrustcompany.com',
            'Client service hours: Mon - Fri, 7am - 7pm CT',
          ],
        },
        {
          subHeading: 'Self-Directed Accounts',
          subDescription: [
            'Phone: 800.258.7878',
            'Email: alternatives@mtrustcompany.com',
            'Client service hours: Mon - Fri, 7am - 6pm CT',
          ],
        },
        {
          subHeading: 'PayFlex',
          subDescription: [
            'Phone: 844.729.3539',
            'Client service hours: Mon - Fri, 7am - 7pm CT',
            'Sat, 9am – 2pm CT'
          ],
        },
      ],
    },
    {
      heading: 'Services',
      description: [
        
        {subHeading: 'Custody Solutions'},
        {subHeading:'Investment Management'},
        {subHeading:'Tailored Retirement Planning'},
        {subHeading:'Wealth Preservation Solutions'}
        //   subDescription: [
        // 'Custody Solutions',
        // 'Investment Management',
        // 'Tailored Retirement Planning',
        // 'Wealth Preservation Solutions',]}
        // {service: 'Custody Solutions'},
        // {service: "Investment Management"},
        // {service:'Tailored Retirement Planning'},
        // {service: 'Wealth Preservation Solutions'},
      ],
    },
    {
      heading: 'FAQs',
      description: [
        {
          subHeading: 'How do I transfer my account to another Custodian?',
          subDescription: ['1.Call your new provider to obtain the paperwork to transfer your funds.',
          "2.Complete the new provider’s IRA Transfer paperwork.",
           'Please make sure to include the following:',
          
          '(i)Your signature',
          '(ii)Millennium Trust Company listed as the current custodian',
          '(iii)Account type at Millennium Trust',
          '(iv)Account type at the new provider',
          '(v)Delivery instructions for the new provider, including payee name',
          '(vi)Signed letter of acceptance from an authorized representative of the new provider',
          '(vii)At least two of the following identifying items:',
          '(a)Millennium account number',
          '(b)Social security number',
          '(c)Date of birth',
          '(d)Current address',
          'If you choose to transfer securities, such as stocks or mutual funds, instead of liquidating your holdings and transferring cash, and the value of the securities is over $200,000, an Original signature and Original Signature Guarantee stamp on the transfer form is required.',
          'If transferring mutual funds “in-kind” or re-registering the assets, please ensure the receiving custodian includes their mutual fund account numbers for those assets, otherwise the transfer request may be rejected.',
          '3.Submit the completed paperwork to the new provider.',
          '4.Your new provider will then review your request, and if accepted, will sign and submit to Millennium Trust to process the transfer in the following manner:',
          '    Any forms requiring a Notary stamp or Original Signature Guarantee must be mailed back to:',
          'Millennium Trust Company',
          '2001 Spring Road, Suite 700',
          'Oak Brook, IL 60523',
          'Fax: 630.368.5697',
          
        ]
        },
        {
          subHeading: 'How do I request a distribution on an account rolled over from a previous employer?',
          subDescription: ['It’s easy. Once you claim your account, simply login to the MTC Investment Portal to complete and submit the distribution request form. View our video for more information about taking a distribution.']
        },
        {
          subHeading: 'What tax forms does Millennium Trust send out?',
          subDescription: ['MTC sends out 1099Rs to IRA owners by January 30 for the previous tax year. IRA tax form 5498 is generated and mailed out to account owners typically by May 31. For taxable accounts 1099-DIVs, and 1099-INTs are sent by January 30 for the previous tax year.'],
        },
        // Add more questions and answers as needed
      ],
    },
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
        <View key={index} style={{ backgroundColor: 'white',borderBottomWidth: 3,
        borderBottomColor: '#DDDDDD',
        padding: 10, }}>
          <TouchableOpacity onPress={() =>
            { toggleElement(index)}}>
            <Text style={styles.heading}>{item.heading}</Text>
          </TouchableOpacity>
          {expandedElement === index && (
            <ScrollView>
              {Array.isArray(item.description) ? (
                item.description.map((subItem, subIndex) => (
                  <View key={subIndex} style={{ backgroundColor: 'white',borderWidth: 3,
                  borderColor: '#DDDDDD',
                  padding: 10, }}>
                    <TouchableOpacity onPress={() => toggleSubElement(subIndex)}  >
                      <Text style={styles.subHeading} onPress={() =>{toggleSubElement(subIndex)}}>{subItem.subHeading}</Text>
                    </TouchableOpacity>
                    {/* <View>
                      <Text style={styles.service} >{subItem.subService} </Text>
                    </View> */}
                    {index===2?'':expandedSubElement === subIndex && (
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
};



const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#DDDDDD',
    
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
 
export default Info;