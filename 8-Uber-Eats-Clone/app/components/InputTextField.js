import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function InputTextField({
  placeholder,
  value,
  onChangeText,
  isPassword = false,
}) {
  return (
    <View style={styles.customInput}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
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
    padding: 10,
    marginVertical: 5,
    borderColor: "#B7C6D9",
    borderWidth: 1,
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
    borderWidth: 0,
    fontSize: 18,
  },
});
