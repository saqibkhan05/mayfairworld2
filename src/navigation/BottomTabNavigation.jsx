import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import LocationTopTabNavigation from './LocationTopTabNavigation';
import UserNavigation from './UserNavigation';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HotelDetailScreen from '../screens/HotelDetailScreen';
import HotelsListScreen from '../screens/HotelsListScreen';

const BottomTabNavigation = () => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    const Tab = createBottomTabNavigator();
    useEffect(() => {
        // Add listeners for when the keyboard appears and disappears
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        // Clean up listeners when component unmounts
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <>
            <StatusBar
                hidden={false}
            />
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: keyboardVisible ? { display: 'none' } : {
                        height: 55,
                        position: 'absolute',
                        bottom: 10,
                        right: 15,
                        left: 15,
                        borderRadius: 10
                    }
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        title: 'home',
                        tabBarIcon: ({ color, focused }) => (<IonIcon name={focused ? 'home' : 'home-outline'} size={focused ? 25 : 20} color="#17724f" />)
                    }}
                />
                <Tab.Screen
                    name='Contact'
                    component={Contact}
                    options={{
                        title: 'Contact',
                        tabBarIcon: ({ color, focused }) => (<IonIcon name={focused ? 'call' : 'call-outline'} size={focused ? 25 : 20} color="#17724f" />)
                    }}
                />
                <Tab.Screen
                    name='Locatios'
                    component={LocationTopTabNavigation}
                    options={{
                        title: 'location',
                        tabBarIcon: ({ color, focused }) => (<IonIcon name={focused ? 'location' : 'location-outline'} size={focused ? 25 : 20} color="#17724f" />)
                    }}
                />
                <Tab.Screen
                    name='About'
                    component={About}
                    options={{
                        title: 'location',
                        tabBarIcon: ({ color, focused }) => (<IonIcon name={focused ? 'information-circle' : 'information-circle-outline'} size={focused ? 30 : 25} color="#17724f" />)
                    }}
                />
                <Tab.Screen
                    name='More'
                    component={UserNavigation}
                    options={{
                        title: 'location',
                        tabBarIcon: ({ color, focused }) => (<IonIcon name={focused ? 'person' : 'person-outline'} size={focused ? 25 : 20} color="#17724f" />)
                    }}
                />
                <Tab.Screen
                    name="HotelDetailScreen"
                    component={HotelDetailScreen}
                    options={{ tabBarButton: () => null, tabBarVisible: false }}
                />
                <Tab.Screen
                    name="HotelsListScreen"
                    component={HotelsListScreen}
                    options={{ tabBarButton: () => null, tabBarVisible: false }}
                />
            </Tab.Navigator>
        </>
    )
}

export default BottomTabNavigation