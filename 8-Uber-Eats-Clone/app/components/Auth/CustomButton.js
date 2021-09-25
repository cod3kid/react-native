import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.parent}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#06c167",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    padding: 12,
  },
  textStyle: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
