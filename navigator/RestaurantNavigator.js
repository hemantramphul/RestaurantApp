import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const RestaurantNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7f47cf',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => {
          const restName = route.params.restName;
          return {
            title: restName,
          };
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Welcome',
        }}
      />
    </Stack.Navigator>
  );
};

export default RestaurantNavigator;

const styles = StyleSheet.create({});
