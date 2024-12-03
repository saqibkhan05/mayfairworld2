import { TouchableOpacity, ScrollView, StyleSheet, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LocationsHList = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    function hendelMore() {
        navigation.navigate('Locatios')
    }

    // Fetch locations from API
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://mayfairworldwidevacations.com/api/national_locations.php'); // Replace with your API URL
                const alldata = response.data;
                await setLocations(alldata.slice(0, 15));  // Assuming response has a "locations" array
                console.log(locations);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching locations:', error);
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    if (loading) return (
        <View>
            <Text> Loading.....</Text>
        </View>
    );

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {locations.map((location, index) => {
                return (
                    <View style={styles.circleImg} className='flex items-center' key={index}>
                        <Image source={{ uri: location.img }} style={styles.locationImage} />
                        <Text className="mt-1  rounded-2xl">{location.name}</Text>
                    </View>
                )
            })}
            <TouchableOpacity onPress={hendelMore}>
                <View className='mx-1 flex items-center' key={99}>
                    <Image source={{ uri: 'https://lightcyan-armadillo-497418.hostingersite.com/data/app_img/more_locations.jpg' }} style={styles.locationImage} />
                    <Text className="mt-1 px-4 rounded-2xl">More</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default LocationsHList

const styles = StyleSheet.create({
    locationImage: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    circleImg: {
        marginRight: 10
    }
})