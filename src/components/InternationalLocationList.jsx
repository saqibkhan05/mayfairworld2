import { TouchableOpacity, FlatList, StyleSheet, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const InternationalLocationList = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch locations from API
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://mayfairworldwidevacations.com/api/international_locations.php'); // Replace with your API URL
                await setLocations(response.data);  // Assuming response has a "locations" array

                setLoading(false);
            } catch (error) {
                console.error('Error fetching locations:', error);
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);


    const navigation = useNavigation();

    function handelLocationPress(location) {
        console.log(location);
        navigation.navigate('HotelsListScreen', { location });
    }

    if (loading) return (
        <View>
            <Text> Loading.....</Text>
        </View>
    );

    return (
        <FlatList
            data={locations}
            renderItem={({ item }) => (
                <View className="m-4 relative">
                    <TouchableOpacity onPress={() => { handelLocationPress(item.name) }}>
                        <Image source={{ uri: item.img }} className="w-100 h-60 rounded-2xl" />
                        <View className="absolute h-full w-full flex-col-reverse justify-between ">
                            <LinearGradient colors={['#0000003d', '#00000087', '#000000']} className="rounded-b-2xl">
                                <View className="m-2 p-2 ">
                                    <Text className="text-white ">{item.name}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            keyExtractor={(item) => item.id}
        />
    )
}

export default InternationalLocationList

const styles = StyleSheet.create({})