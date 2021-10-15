import React, { useEffect } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import ReelsScreen from "../screens/AppScreens/ReelsScreen";
import ActivityScreen from "../screens/AppScreens/ActivityScreen";
import SearchNavigator from "./SearchNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { bottomNavIcons } from "../utils";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  const {
    homeLightActive,
    homeLightInactive,
    searchLightActive,
    searchLightInactive,
    reelsLightActive,
    reelsLightInactive,
    heartLightActive,
    heartLightInactive,
  } = bottomNavIcons;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerShown: false,
        showLabel: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? homeLightActive : homeLightInactive}
              style={{ height: 24, width: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchNav"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? searchLightActive : searchLightInactive}
              style={{ height: 24, width: 24 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? reelsLightActive : reelsLightInactive}
              style={{ height: 24, width: 24 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={focused ? heartLightActive : heartLightInactive}
              style={{ height: 24, width: 24 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
