import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import configureStore from "../redux/store";
import HomeNavigator from "./HomeNavigator";
import BrowseScreen from "../screens/AppScreens/BrowseScreen";
import OrdersScreen from "../screens/AppScreens/OrdersScreen";
import PassScreen from "../screens/AppScreens/PassScreen";
import AccountScreen from "../screens/AppScreens/AccountScreen";

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
        name="HomeNav"
        component={HomeNavigator}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="text-search"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bookmark-minus"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pass"
        component={PassScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="ticket-confirmation"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </Provider>
);

export default AppNavigator;
