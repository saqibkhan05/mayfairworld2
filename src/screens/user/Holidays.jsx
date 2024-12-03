import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userData from '../../utility/getUserData';

const Holidays = ({ navigation }) => {
    const [HolidayData, setHolidayData] = useState([])

    const [isRefreshing, setRefreshing] = useState(false);


    const initializeData = async () => {
        try {
            const UserData = await AsyncStorage.getItem('holidays_chart');
            if (UserData) {
                setHolidayData(JSON.parse(UserData)); // Load saved user data from storage
                console.log(Object.values(HolidayData));

            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        initializeData();
    }, [])

    const usedHoliday = ({ item }) => {
        return (
            <View style={styles.rowred}>
                <Text style={styles.usedHolidaycell}>{item.lenght_of_holidays} Nights  - ( {item.location} )</Text>
                <Text style={styles.usedHolidaycell}>{item.valid_from} - {item.valid_to}</Text>
                <Text style={styles.usedHolidaycell}>{item.avilable_or_not}</Text>
            </View>
        );
    }

    const renderItem = ({ item }) => {
        if (Array.isArray(item.used_holidays)) {
            return (
                <>
                    <View style={styles.row}>
                        <Text style={styles.cell}>{item.lenght_of_holidays} Nights </Text>
                        <Text style={styles.cell}>{item.valid_from}</Text>
                        <Text style={styles.cell}>{item.valid_to}</Text>
                        <Text style={styles.cell}>{item.avilable_or_not}</Text>
                    </View>
                    <FlatList
                        data={item.used_holidays}
                        renderItem={usedHoliday}
                    />
                </>
            );
        }
        else {
            return (
                <>
                    <View style={styles.row}>
                        <Text style={styles.cell}>{item.lenght_of_holidays} Nights </Text>
                        <Text style={styles.cell}>{item.valid_from}</Text>
                        <Text style={styles.cell}>{item.valid_to}</Text>
                        <Text style={styles.cell}>{item.avilable_or_not}</Text>
                    </View>

                </>

            );
        }

    }

    const refreshDataHandel = async () => {
        setRefreshing(true)

        const token = await AsyncStorage.getItem('token');

        const userdata = userData(token)

        initializeData();
        setRefreshing(false)
    }

    return (
        <View style={styles.container}>
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={refreshDataHandel}
                />
            }>
                <View style={styles.toph}>
                    <Text style={styles.title}>Holiday Chart</Text>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Booking') }}>
                        <Text style={styles.buttonText}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tableHeader}>
                    <Text style={[styles.cell, styles.header]}>Nights</Text>
                    <Text style={[styles.cell, styles.header]}>From</Text>
                    <Text style={[styles.cell, styles.header]}>To</Text>
                    <Text style={[styles.cell, styles.header]}>Status</Text>
                </View>
                <FlatList
                    data={Object.values(HolidayData)}
                    renderItem={renderItem}
                />
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
});

export default Holidays