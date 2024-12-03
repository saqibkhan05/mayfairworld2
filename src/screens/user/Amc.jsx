import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Amc = () => {
    const [AmcData, setAmcData] = useState([])

    useEffect(() => {
        const initializeData = async () => {
            try {

                const UserData = await AsyncStorage.getItem('amc_chart');
                if (UserData) {
                    setAmcData(JSON.parse(UserData)); // Load saved user data from storage
                    console.log(Object.values(AmcData));
                }
            } catch (error) {
                console.log(error);
            }
        };

        initializeData();
    }, [])


    const renderItem = ({ item }) => {
        return (
            <>
                <View style={styles.row}>
                    <Text style={styles.cell}>{item.year}</Text>
                    <Text style={styles.cell}>{item.amc_amount}</Text>
                    <Text style={styles.cell}>{item.resiving_status}</Text>
                </View>

            </>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.toph}>
                    <Text style={styles.title}>AMC Chart</Text>

                </View>
                <View style={styles.tableHeader}>
                    <Text style={[styles.cell, styles.header]}>Year</Text>
                    <Text style={[styles.cell, styles.header]}>AMC</Text>
                    <Text style={[styles.cell, styles.header]}>Status</Text>
                </View>
                <FlatList
                    data={Object.values(AmcData)}
                    renderItem={renderItem}
                />
                <View style={styles.extraspace}>
                    <Text>---</Text>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    toph: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },

    cell: {
        flex: 1,
        textAlign: 'center',
        paddingHorizontal: 5,
    },
    header: {
        fontWeight: 'bold',
    },
    rowred: {
        borderColor: 'gray',
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 15,
        marginTop: 5,
        backgroundColor: 'white',
    },

    usedHolidaycell: {
        flex: 1,
        textAlign: 'center',
        paddingHorizontal: 5,
        fontSize: 14,
    },
    button: {
        backgroundColor: '#4CAF50', // Button color
        paddingVertical: 15,        // Vertical padding
        paddingHorizontal: 30,      // Horizontal padding
        borderRadius: 10,           // Rounded corners
        shadowColor: '#000',        // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,               // Shadow for Android
    },
    buttonText: {
        color: '#fff',              // Text color
        fontSize: 16,               // Text size
        fontWeight: 'bold',         // Text weight
        textAlign: 'center',
    },
    extraspace: {
        marginTop: 100
    }
});

export default Amc