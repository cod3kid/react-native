import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/AppScreens/HomeScreen";
import MapScreen from "../screens/AppScreens/MapScreen";
import RestaurantScreen from "../screens/AppScreens/RestaurantScreen";
import PaymentScreen from "../screens/AppScreens/PaymentScreen";
import OrderCompletedScreen from "../screens/AppScreens/OrderCompletedScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="OrderCompleted" component={OrderCompletedScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
