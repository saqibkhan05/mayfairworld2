import { TouchableOpacity, ScrollView, StyleSheet, Image, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IonIcon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');


const HotelsListScreen = ({ navigation, route }) => {
    // get Prope
    console.log(route);
    const { location } = route.params;

    const [properties, setProperty] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch locations from API
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://mayfairworldwidevacations.com/api/properties_s.php', {
                    params: { location: location }
                });
                const allData = response.data;
                await setProperty(allData.slice(0, 5));  // Assuming response has a "locations" array

                setLoading(false);
            } catch (error) {
                console.error('Error fetching locations:', error);
                setLoading(false);
            }
        };

        fetchLocations();
    }, [location]);

    function handelHotelPress(PropertyId) {
        navigation.navigate('HotelDetailScreen', { PropertyId });
    }

    if (loading) return (
        <View>
            <Text> Loading.....</Text>
        </View>
    );



    return (
        <>
            <View style={{ backgroundColor: 'white' }}>
                <View className="p-3">
                    <View className="flex-row justify-between items-center">
                        <Image source={require('../assets/img/logo.png')} style={styles.logo} />
                        <View className="flex-row justify-center items-center">
                            <View>
                                <Text>{location}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View className="flex-1 justify-center items-center bg-gray-100 p-4" style={styles.container}>
                        {
                            properties.map((property, index) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.mainCard}
                                        onPress={() => { handelHotelPress(property.id) }}
                                        key={index}
                                        activeOpacity={0.8}
                                    >
                                        <View className="flex-row">
                                            <Image source={{ uri: property.img_1 }} style={styles.card} className="rounded-xl" />
                                            <View style={styles.textArea} className="mx-3 mt-2">
                                                <Text style={styles.title} className="text-lg font-bold">{property.name.slice(0, 15)}..</Text>
                                                <Text>{property.location}</Text>
                                                <View className="flex-row">
                                                    <View className="mx-1">
                                                        <IonIcon name="bed" size={18} color="#248560" />
                                                    </View>
                                                    <IonIcon name="sparkles" size={18} color="#248560" />
                                                    <IonIcon name="fast-food" size={18} color="#248560" />
                                                    <IonIcon name="wifi" size={18} color="#248560" />
                                                    <IonIcon name="barbell" size={18} color="#248560" />
                                                </View>
                                                <Text className="mt-2" >{property.description.slice(0, 50)}..</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </View>
                    {/* End part footer */}
                    <View style={styles.extraspace}>
                        <Text className="text-center">Mayfairworldwidevacations</Text>
                        <Text className="text-center">......</Text>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 40
    },
    container: {
        width: width,
    },
    mainCard: {
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
        backgroundColor: 'white'
    },
    card: {
        width: width * 0.35,
        height: width * 0.35,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 22,
    },
    textArea: {
        width: width * 0.55,
    },
    extraspace: {
        marginTop: 20,
        marginBottom: 130
    }
})

export default HotelsListScreen