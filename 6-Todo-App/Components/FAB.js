import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function FAB() {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.button}>
        <MaterialCommunityIcons name="plus" size={60} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
});
