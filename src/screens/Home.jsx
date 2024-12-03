import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import LocationsHList from '../components/LocationsHList'
import PropertyHlist from '../components/PropertyHlist'
import HotelMiniCard from '../components/HotelMiniCard'


const Home = () => {



    return (
        <View style={{ backgroundColor: 'white' }}>
            <View className="p-4 ">
                <View className="flex-row justify-between items-center">
                    <Image source={require('../assets/img/logo.png')} style={styles.logo} />
                    <View className="flex-row justify-center items-center">
                        <View>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView>

                <View className="p-1">
                </View>
                {/* Horizontal Scroll for Top Locations */}
                <View className="px-4">
                    <LocationsHList />
                </View>

                <View className="px-4">
                    <Text className="text-xl font-bold text-gray-800 mt-2">Unparalleled Hospitality</Text>
                    <Text className="text-gray-500">Hotels & Resorts</Text>
                </View>
                {/* Horizontal Scroll for Top Property */}
                <View className="px-4 mt-2">
                    <PropertyHlist />
                </View>

                <View className="px-4">
                    <Text className="text-xl font-bold text-gray-800 mt-2">Tailored Luxury</Text>
                    <Text className="text-gray-500">Travel that meaning your life</Text>
                </View>
                <View className="mt-2 flex flex-1 justify-center items-center" >
                    <HotelMiniCard />
                </View>

                {/* End part footer */}
                <View style={styles.extraspace}>
                    <Text className="text-center">Mayfairworldwidevacations</Text>
                    <Text className="text-center">......</Text>
                </View>

            </ScrollView>
            {/* Add more content below */}
        </View>
    )
}


export default Home

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 30,
    },
    user: {
        width: 30,
        height: 30
    },
    extraspace: {
        marginTop: 20,
        marginBottom: 130
    }
})