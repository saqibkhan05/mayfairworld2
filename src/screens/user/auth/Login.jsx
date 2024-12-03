
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import LinearGradient from 'react-native-linear-gradient'; // optional for adding gradient
import userData from '../../../utility/getUserData';

const { width, height } = Dimensions.get('window');


const Login = ({ navigation }) => {
    // variables
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // API request
        const response = await axios.post('https://mayfairworldwidevacations.com/api/login.php', {
            username: username,
            password: password
        });
        // if API response is correct
        if (response.data.statu) {
            // set user Token in async storage
            AsyncStorage.setItem('token', response.data.token);
            // it update the async storage
            const result = await userData(response.data.token);
            if (result) {
                // Navigate 
                navigation.navigate('ProfileNavigation')
            }
        }
    };

    

    return (
        <ImageBackground
            source={require('../../../assets/img/login.jpg')}  // Your image here
            style={styles.background}
            resizeMode="cover" // Ensures image covers the whole screen
        >
            <View style={styles.overlay}>
                {/* Company Logo */}
                <View style={styles.messageArera}>
                    <Text style={styles.message}>Login</Text>
                    <Text style={{ color: 'black', paddingTop: 5, }}> Each time we travel, we see the world with new eyes.</Text>
                </View>
                {/* Email Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    placeholderTextColor="#888"
                    value={username}
                    onChangeText={setUsername}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                {/* Password Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize="none"
                />

                {/* Login Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin} // Assuming you're navigating to Home
                >
                    <LinearGradient
                        colors={['#38A57C', '#248560']}
                        style={styles.gradient}
                    >
                        <Text style={styles.buttonText}>Login</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: width * 0.8,   // Adjust width of your logo
        height: 100,    // Adjust height of your logo
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: 'white'
    },
    button: {
        bottom: 0,        // Positioning button to bottom middle
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
    messageArera: {
        marginBottom: 40,  // Spacing between message and button
    },
    message: {
        fontSize: 34,      // Large font size
        color: '#248560',     // Message text color
        fontWeight: 'bold',
    },
});

export default Login
