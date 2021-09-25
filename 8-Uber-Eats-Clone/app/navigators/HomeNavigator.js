import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/AppScreens/HomeScreen";
import SearchScreen from "../screens/AppScreens/SearchScreen";
import RestaurantScreen from "../screens/AppScreens/RestaurantScreen";
import PaymentScreen from "../screens/AppScreens/PaymentScreen";
import OrderCompletedScreen from "../screens/AppScreens/OrderCompletedScreen";
import RestaurantMoreScreen from "../screens/AppScreens/RestaurantMoreScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="RestaurantMore" component={RestaurantMoreScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="OrderCompleted" component={OrderCompletedScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
