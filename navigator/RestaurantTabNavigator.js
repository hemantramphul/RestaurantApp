import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavouritesScreen from "../screens/FavouritesScreen";
import MapsScreen from "../screens/MapsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import RestaurantNavigator from "./RestaurantNavigator";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const RestaurantTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "RestaurantHome") {
            iconName = "restaurant";
          } else if (route.name === "Favourites") {
            iconName = "heart";
          } else if (route.name === "Maps") {
            iconName = "map";
          } else if (route.name === "Settings") {
            iconName = "settings";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="RestaurantHome"
        component={RestaurantNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Maps" component={MapsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default RestaurantTabNavigator;
