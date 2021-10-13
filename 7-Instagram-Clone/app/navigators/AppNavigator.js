import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/AppScreens/HomeScreen";
import SettingsScreen from "../screens/AppScreens/SettingsScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "black",
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home-variant-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="wrench" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
