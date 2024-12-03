import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const userData = async (mytoken) => {
    try {
        // Make the API request
        const response2 = await axios.post('https://mayfairworldwidevacations.com/api/data.php', {
            token: mytoken,
        });
        console.log(mytoken);

        // Extract the data from the response
        const { user_data, holidays_chart, amc_chart, offers_chart } = response2.data;

        // Store the data in AsyncStorage (await ensures completion before returning)
        await AsyncStorage.setItem('user_data', JSON.stringify(user_data));
        await AsyncStorage.setItem('holidays_chart', JSON.stringify(holidays_chart));
        await AsyncStorage.setItem('amc_chart', JSON.stringify(amc_chart));
        await AsyncStorage.setItem('offers_chart', JSON.stringify(offers_chart));

        // Return true after the async part is completed
        return true;

    } catch (error) {
        console.error('Error fetching or storing user data:', error);
        return false; // Optionally, return false if there's an error
    }
};

export default userData;