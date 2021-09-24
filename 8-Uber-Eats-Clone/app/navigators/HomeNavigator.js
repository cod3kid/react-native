import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/AppScreens/HomeScreen";
import MapScreen from "../screens/AppScreens/MapScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Map" component={MapScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
