import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './BottomTabNavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderScreen from '../screens/LoaderScreen'

const AppNavigation = () => {

    const Stack = createNativeStackNavigator();
    const [token, setToken] = useState(true);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const checktoken = async () => {
            const hasLaunched = await AsyncStorage.getItem('hasLaunched');
            if (hasLaunched === null) {
                setToken(true)
                setLoader(false)
            }
            else {
                setToken(false)
                setLoader(false)
            }
        }
        checktoken();
    }, []);

    if (loader) {
        return <LoaderScreen />
    }
    
    if (token) {

        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='SplashScreen' component={SplashScreen} />
                    <Stack.Screen name='BottomTabNavigation' component={BottomTabNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
        )

    }
    else {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='BottomTabNavigation' component={BottomTabNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

}

export default AppNavigation