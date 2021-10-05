import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  isPassword = false,
  showIcon = false,
}) {
  const [showPassword, setShowPassword] = useState(isPassword);
  return (
    <View style={styles.customInput}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#ADB3BC"
        secureTextEntry={showPassword}
      />
      {showIcon && (
        <TouchableWithoutFeedback
          onPress={() => setShowPassword((prev) => !prev)}
        >
          <View style={{ alignSelf: "flex-end" }}>
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color={showPassword ? "grey" : "#1C7CFC"}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  customInput: {
    flexDirection: "row",
    padding: 8,
    marginVertical: 5,
    borderColor: "#B7C6D9",
    borderWidth: 1,
    borderRadius: 4,
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
    borderWidth: 0,
    fontSize: 14,
  },
});
