import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import React from 'react'
import Profile from '../screens/user/Profile';
import Holidays from '../screens/user/Holidays';
import Amc from '../screens/user/Amc';
import Offer from '../screens/user/Offer';
import Logout from '../screens/user/Logout';
import Booking from '../screens/user/Booking';
import Seccess from '../screens/user/Seccess';

const ProfileNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <>
            <StatusBar backgroundColor="#123456" barStyle="light-content" />
            <Drawer.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#123456', // Set header background color
                    },
                    headerTintColor: '#fff', // Set header text color (e.g., white)
                    drawerStyle: {
                        backgroundColor: '#f0f0f0', // Drawer background color (optional)
                    },
                    drawerActiveTintColor: '#123456', // Active item text color in drawer
                    drawerInactiveTintColor: '#888',  // Inactive item text color in drawer
                }}
            >
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Holidays" component={Holidays} />
                <Drawer.Screen name="Amc" component={Amc} />
                <Drawer.Screen name="Offer" component={Offer} />
                <Drawer.Screen name="Booking" component={Booking}
                    options={{
                        drawerLabel: () => null,  // Hide the label so it's not shown
                        drawerItemStyle: { display: 'none' },  // Hide the item from animation
                    }}
                />
                <Drawer.Screen name="Seccess" component={Seccess}
                    options={{
                        drawerLabel: () => null,  // Hide the label so it's not shown
                        drawerItemStyle: { display: 'none' },  // Hide the item from animation
                    }}
                />
                <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
        </>
    )
}

export default ProfileNavigation

const styles = StyleSheet.create({})