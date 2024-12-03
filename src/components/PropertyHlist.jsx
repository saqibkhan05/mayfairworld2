import { TouchableOpacity, ScrollView, StyleSheet, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const PropertyHlist = () => {
    const [properties, setProperty] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    // Fetch locations from API
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://mayfairworldwidevacations.com/api/all_properties.php'); // Replace with your API URL
                const allData = response.data;
                await setProperty(allData.slice(120, 125));  // Assuming response has a "locations" array

                setLoading(false);
            } catch (error) {
                console.error('Error fetching locations:', error);
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    function handelHotelPress(PropertyId) {
        navigation.navigate('HotelDetailScreen', { PropertyId });
    }

    if (loading) return (
        <View>
            <Text> Loading.....</Text>
        </View>
    );

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {properties.map((property, index) => {
                return (
                    <TouchableOpacity
                        onPress={() => { handelHotelPress(property.id) }}
                        key={index}
                        activeOpacity={0.8}
                    >
                        <View className="mr-4 relative">
                            <Image source={{ uri: property.img_1 }} style={styles.card} className="rounded-2xl" />
                            <View className="absolute h-full w-full flex-col-reverse justify-between ">
                                <LinearGradient colors={['#0000003d', '#00000087', '#000000']} className="rounded-b-2xl">
                                    <View className="m-2 p-2 rounded">
                                        <Text className="text-white ">{property.name}</Text>
                                    </View>
                                </LinearGradient>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

export default PropertyHlist

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 200
    }
})