import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoaderScreen = () => {
    console.log('loader screen');

    return (
        <View className="flex-1 justify-center items-center">
            <Image source={require('../assets/img/logo.png')} style={styles.logo} />
        </View>
    )
}

export default LoaderScreen

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 60
    }
})