import { TouchableOpacity, Dimensions, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient'; // optional for adding gradient
import IonIcon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
import 'react-native-gesture-handler';
import 'react-native-reanimated';

const HotelDetailScreen = ({ navigation, route }) => {
    // get Prope
    console.log(route);
    const { PropertyId } = route.params;

    // uestate Hook
    const [PropertyData, setPropertyData] = useState({});
    const [loading, setLoading] = useState(true);

    // useEffect Hook
    useEffect(() => {
        const fetchPropertyDetail = async () => {
            try {
                const response = await axios.get('https://mayfairworldwidevacations.com/api/properties.php', {
                    params: { id: PropertyId }
                });
                setPropertyData(response.data);
                console.log(PropertyData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching locations:', error);
                setLoading(false);
            }
        };
        fetchPropertyDetail();
    }, [PropertyId])

    const MyCarousel = ({ data }) => {
        const renderItem = ({ item }) => {
            return (
                <View style={styles.carouselItem} >
                    <Image source={{ uri: item }} style={styles.image} />
                </View>
            )
        }
        return (
            <Carousel
                width={width}
                height={300}
                data={data}
                loop={true}  // Enable looping
                autoPlay={true}  // Enable auto-play
                autoPlayInterval={3000}  // Interval between slides in milliseconds
                renderItem={renderItem}
            />
        )
    }


    if (loading) return (
        <View>
            <Text> Loading.....</Text>
        </View>
    );

    return (

        <View style={styles.container}>
            <View>
                <MyCarousel data={PropertyData.img.slice(0, 4)} />
            </View>
            {/*  */}
            <View style={styles.textContainer}>
                <View className="flex-row justify-around mb-4">
                    <View className="mx-1">
                        <IonIcon name="bed" size={25} color="#248560" />
                    </View>
                    <IonIcon name="sparkles" size={25} color="#248560" />
                    <IonIcon name="fast-food" size={25} color="#248560" />
                    <IonIcon name="wifi" size={25} color="#248560" />
                    <IonIcon name="barbell" size={25} color="#248560" />
                </View>

                <Text style={styles.title}>{PropertyData.name}</Text>
                <View className="flex-row items-center mb-2">
                    <IonIcon name="location" size={20} color="#248560" />
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>{PropertyData.location}</Text>
                </View>


                <ScrollView>
                    <Text>
                        {PropertyData.description}
                    </Text>
                    {/* Login Button */}
                    <TouchableOpacity
                        style={styles.button}
                        className="mt-4"
                        onPress={() => { navigation.navigate('More') }}
                    >
                        <LinearGradient
                            colors={['#38A57C', '#248560']}
                            style={styles.gradient}
                        >
                            <Text style={styles.buttonText}>Book Now</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </ScrollView>
            </View>


        </View>

    )
}

export default HotelDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        justifyContent: 'center'
    },
    carouselItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width,
        height: 300,
        resizeMode: 'cover',
    },
    textContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10, // Space between title and description
        color: 'black'
    },

    description: {
        fontSize: 16,
        textAlign: 'left', // Left-align the text
        color: '#555',
    },
    extraspace: {
        marginTop: 100
    },
    button: {
        bottom: 0,        // Positioning button to bottom middle
        width: '80%',      // Button width
    },
    gradient: {
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',     // Button text color
        fontSize: 18,
        fontWeight: 'bold',
    },
})