import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import configureStore from "../redux/store";
import HomeScreen from "../screens/AppScreens/HomeScreen";
import SettingsScreen from "../screens/AppScreens/SettingsScreen";

const Tab = createBottomTabNavigator();
const store = configureStore();

const AppNavigator = () => (
  <Provider store={store}>
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
            <MaterialCommunityIcons name="home" color={color} size={size} />
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
  </Provider>
);

export default AppNavigator;
