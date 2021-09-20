import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CheckBox({ isChecked, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <MaterialCommunityIcons
        name={isChecked ? "checkbox-marked-outline" : "checkbox-blank-outline"}
        size={24}
        color="black"
      />
    </Pressable>
  );
}
