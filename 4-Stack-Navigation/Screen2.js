import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Screen2() {
  return (
    <View style={styles.container}>
      <Text>Screen Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
