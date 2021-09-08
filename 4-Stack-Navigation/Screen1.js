import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Screen1() {
  return (
    <View style={styles.container}>
      <Text>Screen One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
