import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CustomTextInput({
  iconName,
  iconColor = "black",
  placeholder,
  isPassword = false,
}) {
  return (
    <View style={styles.customInput}>
      <MaterialCommunityIcons name={iconName} size={25} color={iconColor} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#ADB3BC"
        secureTextEntry={isPassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  customInput: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomColor: "#B7C6D9",
    borderBottomWidth: 1,
  },
  textInput: {
    border: "none",
    marginLeft: 10,
    flex: 1,
    border: "none",
    borderWidth: 0,
    fontSize: 18,
  },
});
