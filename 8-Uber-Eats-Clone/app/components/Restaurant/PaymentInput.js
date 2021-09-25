import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PaymentInput({
  placeholder,
  value,
  onChangeText,
  maxLength,
  isCard = false,
  isCvv = false,
}) {
  return (
    <View style={styles.customInput}>
      {isCard && (
        <MaterialCommunityIcons name="credit-card" size={24} color="#A8A8A8" />
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#ADB3BC"
        secureTextEntry={isCvv}
        maxLength={maxLength}
        keyboardType="numeric"
      />
      {isCard && (
        <MaterialCommunityIcons name="camera" size={24} color="black" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  customInput: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    borderColor: "black",
    borderWidth: 1.5,
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
    borderWidth: 0,
    fontSize: 18,
  },
});
