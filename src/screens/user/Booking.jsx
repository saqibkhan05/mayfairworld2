import React, { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import userData from '../../utility/getUserData';

const Booking = () => {
    const navigation = useNavigation();

    const [location, setLocation] = useState('');
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [persons, setPersons] = useState('');
    const [children, setChildren] = useState('');
    const [showCheckInPicker, setShowCheckInPicker] = useState(false);
    const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
    const [UserData, setUserData] = useState({})

    const handleCheckInChange = (event, selectedDate) => {
        const currentDate = selectedDate || checkInDate;
        setCheckInDate(currentDate);
        setShowCheckInPicker(false);

    };

    const handleCheckOutChange = (event, selectedDate) => {
        const currentDate = selectedDate || checkOutDate;
        setCheckOutDate(currentDate);
        setShowCheckOutPicker(false);
    };

    const submitHandel = async () => {
        // console.log(location);
        // console.log(checkInDate);
        // console.log(checkOutDate);
        // console.log(persons);
        // console.log(children);

        // getuser data
        const x = await AsyncStorage.getItem('user_data');
        if (UserData) {
            setUserData(JSON.parse(x)); // Load saved user data from storage
            // console.log(UserData.card_no);

        }

        // API request
        const response = await axios.post('https://mayfairworldwidevacations.com/api/request.php', {
            userdata: UserData.card_no,
            location: location,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            persons: persons,
            children: children,
        });
        // 
        console.log(response.data);

        // if API response is correct
        if (response.data.status) {
            navigation.navigate('Seccess')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Location</Text>
            <TextInput
                placeholder="Enter location"
                value={location}
                onChangeText={setLocation}
                style={styles.input}
            />

            {/* Check-in Date Input */}
            <Text style={styles.label}>Check-in Date</Text>
            <TouchableOpacity style={styles.dateInput} onPress={() => setShowCheckInPicker(true)}>
                <Text style={styles.dateText}>
                    {checkInDate.toDateString() || 'Select Check-in Date'}
                </Text>
            </TouchableOpacity>
            {showCheckInPicker && (
                <View>
                    <DateTimePicker
                        value={checkInDate}  // Ensure checkInDate is defined
                        mode="date"
                        display="default"
                        minimumDate={new Date()}  // Disable past dates
                        onChange={(event, date) => handleCheckInChange(event, date, 'checkin')}
                    />
                </View>
            )}

            <Text style={styles.label}>Check-out Date</Text>
            {/* Check-out Date Input */}
            <TouchableOpacity style={styles.dateInput} onPress={() => setShowCheckOutPicker(true)}>
                <Text style={styles.dateText}>
                    {checkOutDate.toDateString() || 'Select Check-out Date'}
                </Text>
            </TouchableOpacity>
            {showCheckOutPicker && (
                <DateTimePicker
                    value={checkOutDate}
                    mode="date"
                    display="default"
                    minimumDate={checkInDate}
                    onChange={(event, date) => handleCheckOutChange(event, date, 'checkout')}
                />
            )}

            <Text style={styles.label}>Number of Persons</Text>
            <TextInput
                keyboardType="numeric"
                value={persons}
                onChangeText={setPersons}
                style={styles.input}
            />

            <Text style={styles.label}>Number of Children</Text>
            <TextInput
                keyboardType="numeric"
                value={children}
                onChangeText={setChildren}
                style={styles.input}
            />

            <TouchableOpacity style={styles.buttonContainer} onPress={submitHandel}>
                <Text style={styles.buttonText}>Submit Request</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Booking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',  // White background for a clean look
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',  // Dark gray text for labels
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',  // Light gray border for input fields
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#f9f9f9',  // Light background for inputs
    },
    datePicker: {
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 30,
        backgroundColor: '#007BFF',  // Primary button color (blue)
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',  // White text for button
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',  // Error message color
        fontSize: 14,
        marginBottom: 10,
    },
    datePickerContainer: {
        marginBottom: 20,  // Adds some spacing below the picker
    },
    dateInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 15,
        alignItems: 'center',
    },
});