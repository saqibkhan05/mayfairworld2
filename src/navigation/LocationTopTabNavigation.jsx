import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import NationalLocations from '../screens/NationalLocations';
import InternationalLocations from '../screens/InternationalLocations';

const LocationTopTabNavigation = () => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name='National' component={NationalLocations} options={{ title: 'National' }} />
            <Tab.Screen name='International' component={InternationalLocations} />
        </Tab.Navigator>
    )
}

export default LocationTopTabNavigation

const styles = StyleSheet.create({})