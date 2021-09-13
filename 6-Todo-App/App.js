import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FAB from "./Components/FAB";

export default function App() {
  return (
    <View style={styles.container}>
      <FAB />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingRight: 20,
  },
});
