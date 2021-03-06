import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

export default function App() {
  const Stack = createStackNavigator();

  const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen1} />
        <Stack.Screen name="Inside" component={Screen2} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StackNavigator />
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
