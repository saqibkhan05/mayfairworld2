import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
const { width, height } = Dimensions.get('window');
import IonIcon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Contact = () => {
    // 
    const [data, setData] = useState({})
    const [isRefreshing, setRefreshing] = useState(false);

    const getdata = async () => {
        const responce = await axios.get('https://mayfairworldwidevacations.com/api/contact.php');
        console.log(responce.data);
        setData(responce.data)
    }

    useEffect(() => {
        getdata()
    }, []);

    const refreshDataHandel = async () => {
        setRefreshing(true)
        getdata();
        setRefreshing(false)
    }


    return (
        <>
            <ImageBackground
                source={require('../assets/img/contact.jpg')}
                style={styles.background}
            >
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={refreshDataHandel}
                        />
                    }
                >
                    <View className="flex justify-center items-center mt-4">
                        <Image source={{ uri: 'https://mayfairworldwidevacations.com/images_new/logo/logo.png' }} style={styles.logo} />
                        <View className="flex-row items-center mt-1">
                            <IonIcon name="calendar" size={15} />
                            <Text className="pl-2 text-black">{data.days}</Text>
                        </View>
                        <View className="flex-row items-center mt-1">
                            <IonIcon name="time" size={15} />
                            <Text className="pl-2 text-black">{data.time}</Text>
                        </View>
                    </View>
                    <View style={styles.container} className="bg-white m-3 rounded-2xl shadow-md">
                        <Text className="mt-1 font-bold text-black">Customer care</Text>
                        <View className="flex-row items-center mt-1">
                            <IonIcon name="call" size={15} />
                            <Text className="pl-2">{data.cc_phone_number}</Text>
                        </View>
                        <View className="flex-row items-center mt-1">
                            <IonIcon name="mail" size={15} />
                            <Text className="pl-2">{data.cc_email}</Text>
                        </View>
                        <Text className="mt-3 font-bold text-black">Holiday Reservation</Text>
                        <View className="flex-row items-center mt-1">
                            <IonIcon name="call" size={15} />
                            <Text className="pl-2">{data.rc_phone_number}</Text>
                        </View><View className="flex-row items-center mt-1">
                            <IonIcon name="mail" size={15} />
                            <Text className="pl-2">{data.rc_email}</Text>
                        </View>
                    </View>
                    <View style={styles.container} className="bg-white m-3 rounded-2xl shadow-md">
                        <Text className="text-xl font-bold text-black">Address</Text>
                        <Text className="mt-1">
                            {data.address}
                        </Text>
                    </View>
                </ScrollView >
            </ImageBackground >
        </>
    )
}

export default Contact

const styles = StyleSheet.create({
    background: {
        flex: 1,          // Fullscreen Image
        width: '100%',     // Ensures 100% width
        height: '100%',    // Ensures 100% height (including header area)
    },
    container: {
        // borderColor: 'gray',
        // borderWidth: 1,
        borderRadius: 10,
        width: width * 0.95,
        marginTop: 10,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Shadow for Android
        elevation: 5,
        backgroundColor: 'white',
        padding: 20
    },
    logo: {
        padding: 15,
        width: width,
        height: 90,
    }
})