import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // optional for adding gradient

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {

    console.log('splashscreen');

    const navigation = useNavigation();

    const getStartedHandel = async () => {

        const sstoken = await AsyncStorage.setItem('hasLaunched', 'true');
        navigation.navigate('BottomTabNavigation');
    }
    return (
        <ImageBackground
            source={require('../assets/img/splash.jpg')}  // Your image here
            style={styles.background}
            resizeMode="cover" // Ensures image covers the whole screen
        >
            <StatusBar
                hidden={true}
            />
            <View style={styles.overlay}>
                <View style={styles.messageArera}>
                    <Text style={styles.message}>Easy Way To Book You Holidays</Text>
                    <Text style={{ color: 'black', paddingTop: 5, }}>We understand that luxury means different things to different people.</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={getStartedHandel} // Assuming you're navigating to Home
                >
                    <LinearGradient
                        colors={['#38A57C', '#248560']}
                        style={styles.gradient}
                    >
                        <Text style={styles.buttonText}>Getting Started</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,          // Fullscreen Image
        width: '100%',     // Ensures 100% width
        height: '100%',    // Ensures 100% height (including header area)
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    messageArera: {
        marginBottom: 40,  // Spacing between message and button
        padding: 25
    },
    message: {
        fontSize: 34,      // Large font size
        color: '#248560',     // Message text color
        fontWeight: 'bold',
    },
    button: {
        bottom: 40,        // Positioning button to bottom middle
        width: '80%',      // Button width
    },
    gradient: {
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',     // Button text color
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default SplashScreen
