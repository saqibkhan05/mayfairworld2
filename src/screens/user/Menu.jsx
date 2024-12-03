import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons';


const Menu = ({ navigation }) => {
    return (
        <>
            <View className="p-4 bg-white">
                <View className="flex-row justify-between items-center">
                    <Image source={require('../../assets/img/logo.png')} style={styles.logo} />
                    <Image source={require('../../assets/img/user.png')} style={styles.user} />
                </View>
            </View>
            <ScrollView>
                {/* home */}
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }} className="flex-row justify-between p-3 bg-white rounded-xl mx-2 mt-2">
                    <View className="flex-row items-center">
                        <IonIcon name="star" size={20} color="#17724f" />
                        <Text className="pl-3">Home</Text>
                    </View>
                    <IonIcon name="arrow-forward" size={20} color="#000000" />
                </TouchableOpacity>
                {/* Login */}
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} className="flex-row justify-between p-3 bg-white rounded-xl mx-2 mt-2">
                    <View className="flex-row items-center">
                        <IonIcon name="star" size={20} color="#17724f" />
                        <Text className="pl-3">Member Login</Text>
                    </View>
                    <IonIcon name="arrow-forward" size={20} color="#000000" />
                </TouchableOpacity>
                {/* Destination */}
                <TouchableOpacity onPress={() => { navigation.navigate('Locatios') }} className="flex-row justify-between p-3 bg-white rounded-xl mx-2 mt-2">
                    <View className="flex-row items-center">
                        <IonIcon name="star" size={20} color="#17724f" />
                        <Text className="pl-3">Destination</Text>
                    </View>
                    <IonIcon name="arrow-forward" size={20} color="#000000" />
                </TouchableOpacity>
                {/* Contact */}
                <TouchableOpacity onPress={() => { navigation.navigate('Contact') }} className="flex-row justify-between p-3 bg-white rounded-xl mx-2 mt-2">
                    <View className="flex-row items-center">
                        <IonIcon name="star" size={20} color="#17724f" />
                        <Text className="pl-3">Contact</Text>
                    </View>
                    <IonIcon name="arrow-forward" size={20} color="#000000" />
                </TouchableOpacity>


            </ScrollView>
        </>

    )
}

export default Menu

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 30,
    },
    user: {
        width: 30,
        height: 30
    }
})