import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userData from '../../utility/getUserData';

const Profile = () => {

    const [UserData, setUserData] = useState({})

    const [isRefreshing, setRefreshing] = useState(false);

    const initializeData = async () => {
        try {

            const UserData = await AsyncStorage.getItem('user_data');
            if (UserData) {
                setUserData(JSON.parse(UserData)); // Load saved user data from storage
                console.log(UserData);

            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        initializeData();
    }, [])

    const refreshDataHandel = async () => {
        setRefreshing(true)

        const token = await AsyncStorage.getItem('token');

        const userdata = userData(token)

        initializeData();
        setRefreshing(false)
    }

    return (
        <ImageBackground
            source={require('../../assets/img/login.jpg')}
            style={styles.background}
        >
            <ScrollView
                style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={refreshDataHandel}
                    />
                }>

                <View className="flex-1 items-center justify-center mb-4">
                    <ImageBackground
                        source={require('../../assets/img/card_bg.jpg')}
                        style={styles.cardBackground} // Custom styling
                        imageStyle={{ borderRadius: 15 }} // Optional: round corners
                        className="w-80 h-48 overflow-hidden shadow-lg"
                    >
                        {/* Card Content */}
                        <View className="flex-1 p-4 justify-between">
                            {/* Bank Name */}
                            <Text className="text-white font-bold text-lg">Mayfair World Wide Vacations</Text>

                            {/* Card Number */}
                            <Text className="text-white font-semibold text-xl tracking-widest">
                                {UserData.card_no}
                            </Text>

                            {/* Card Holder & Expiry */}
                            <View className="flex-row justify-between items-center">
                                <Text className="text-white font-semibold">{UserData.name}</Text>
                                {/* <Text className="text-white font-semibold">12/24</Text> */}
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.detailsSection}>
                    <Text style={styles.sectionTitle}>Package Information</Text>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Name:</Text>
                        <Text style={styles.value}>{UserData.name}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Spouse:</Text>
                        <Text style={styles.value}>{UserData.spouse}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.value}>{UserData.email}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Phone:</Text>
                        <Text style={styles.value}>{UserData.mobile_number_1}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Address:</Text>
                        <Text style={styles.value}>{UserData.address_1}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>AMC:</Text>
                        <Text style={styles.value}>{UserData.amc_amount}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Total Cost:</Text>
                        <Text style={styles.value}>{UserData.total_amount}</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Profile

const styles = StyleSheet.create({
    background: {
        flex: 1,          // Fullscreen Image
        width: '100%',     // Ensures 100% width
        height: '100%',    // Ensures 100% height (including header area)
    },
    container: {
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    jobTitle: {
        fontSize: 18,
        color: '#888',
        marginBottom: 20,
    },
    detailsSection: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        borderWidth: 0.3
    },
    sectionTitle: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 5,
    },
    detailRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        color: '#333',
        width: 80,
    },
    value: {
        color: '#555',
        flex: 1,
    },
    cardBackground: {
        width: 320, // 80w
        height: 192, // 48h
        borderRadius: 15,
        // Platform-specific shadows
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5, // Android shadow equivalent
            },
        }),
        backgroundColor: '#ffffff', // Fallback background for loading state
    },
});
