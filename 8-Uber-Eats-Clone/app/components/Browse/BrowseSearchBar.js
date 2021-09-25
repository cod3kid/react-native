import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BrowseSearchBar() {
  return (
    <View style={styles.customInput}>
      <MaterialCommunityIcons name="magnify" size={25} color="black" />
      <TextInput
        style={styles.textInput}
        placeholder="Restaurants, cuisines, dishes"
        placeholderTextColor="#ADB3BC"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  customInput: {
    flexDirection: "row",
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#eee",
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
    borderWidth: 0,
    fontSize: 18,
  },
});
