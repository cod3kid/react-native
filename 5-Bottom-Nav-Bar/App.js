import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./Screens/Home";
import Settings from "./Screens/Settings";
import Profile from "./Screens/Profile";
import HomeButton from "./Components/HomeButton";

export default function App() {
  const Tab = createBottomTabNavigator();

  const TabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wrench" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <HomeButton onPress={() => navigation.navigate("Home")} />
            ),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          })}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
