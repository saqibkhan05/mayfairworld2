import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/user/Profile';
import Holidays from '../screens/user/Holidays';
import Amc from '../screens/user/Amc';
import Booking from '../screens/user/Booking';
import Offer from '../screens/user/Offer';
import Menu from '../screens/user/Menu';
import Login from '../screens/user/auth/Login';
import ProfileNavigation from './ProfileNavigation';

const UserNavigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <>

            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Menu' component={Menu} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='ProfileNavigation' component={ProfileNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    )
}

export default UserNavigation

const styles = StyleSheet.create({

})