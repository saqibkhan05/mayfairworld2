import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = () => {

    const navigation = useNavigation();

    const myfun = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user_data');
        await AsyncStorage.removeItem('holidays_chart');
        await AsyncStorage.removeItem('amc_chart');
        await AsyncStorage.removeItem('offers_chart');
        navigation.navigate('Home')
    }
    myfun()

    return (
        <View>
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({})