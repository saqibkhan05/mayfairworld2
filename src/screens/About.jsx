import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window');


const About = () => {



    return (
        <View style={{ backgroundColor: 'white' }}>
            <Image source={{ uri: 'https://lightcyan-armadillo-497418.hostingersite.com/data/app_img/mayfiar_about.jpg' }} style={styles.img} />

            <ScrollView>

                <View className="p-4">
                    <Text className="mt-1 font-bold text-black">About </Text>
                    <Text>
                        Mayfair worldwide vacations is a leader in the global hospitality industry, with a distinctive collection and a worldwide reputation for excellence. Our diverse portfolio includes historic icons, elegant resorts and modern city center properties.
                    </Text>
                    <Text>
                        We guarantee consistency throughout our collection of hotels and resorts by adhering strictly to company-wide standards. Central purchasing ensures the same high-quality amenities are available to all guests wherever they visit. All these and more make every Mayfair worldwide vacations an extraordinary place.
                    </Text>
                    <Text className="mt-2 font-bold text-black">Why Choose Us</Text>
                    <Text>
                        We understand that every journey is a personal story waiting to unfold. That’s why we go the extra mile to provide personalized attention, guiding you every step of the way. Whether you seek thrilling adventures, cultural encounters, or tranquil retreats, we are here to bring your travel dreams to life.
                    </Text>
                    <View className="mt-10">
                        <Text className="text-center mt-5">-------</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    img: {
        width: width,
        height: width * 0.7,
    }
})