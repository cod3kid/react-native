import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Screen2 from "./Screen2";

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen One</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.push("Inside")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
