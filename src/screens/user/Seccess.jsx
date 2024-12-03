import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef } from 'react';

const Seccess = ({ navigation }) => {
    const successSound = useRef(null);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Booking Request Sent!</Text>

            {/* Lottie animation for the success tick */}
            <Image
                source={require('../../assets/success.gif')}  // Add your Lottie tick animation here
                style={styles.animation}
            />
            {/* <LottieView
                autoPlay
                loop={false}
            /> */}

            {/* Back to Home Button */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Seccess

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#28a745',  // Success green color
        marginBottom: 20,
    },
    animation: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});