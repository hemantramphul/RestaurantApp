import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import RestaurantTabNavigator from "./RestaurantTabNavigator";
import { useState } from "react";

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? <RestaurantTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
