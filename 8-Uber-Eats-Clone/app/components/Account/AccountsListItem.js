import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AccountsListItem({ name, icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listItem}>
        <MaterialCommunityIcons name={icon} size={24} color="black" />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingVertical: 5,
  },
  text: {
    fontSize: 16,
    marginLeft: 20,
  },
});
