import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

import t from "../../utils/translations";

export default function Footer({ onPress, text, navText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text} </Text>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={styles.navText}>{navText}.</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: "#ADB3BC",
  },
  text: {
    color: "#ADB3BC",
  },
  navText: {
    color: "#30618A",
    fontWeight: "bold",
  },
});
