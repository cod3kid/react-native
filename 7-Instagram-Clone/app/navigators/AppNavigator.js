import React, { useEffect } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import SettingsScreen from "../screens/AppScreens/SettingsScreen";
import SearchScreen from "../screens/AppScreens/SearchScreen";
import ReelsScreen from "../screens/AppScreens/ReelsScreen";
import ActivityScreen from "../screens/AppScreens/ActivityScreen";
import ProfileScreen from "../screens/AppScreens/ProfileScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
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
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/50/000000/instagram-reel.png",
              }}
              style={{ height: 24, width: 24 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
