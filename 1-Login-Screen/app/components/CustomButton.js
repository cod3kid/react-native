import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Hind_600SemiBold } from "@expo-google-fonts/hind";

export default function CustomButton() {
  const [fontLoaded] = useFonts({
    Hind_600SemiBold,
  });

  return (
    <View style={styles.parent}>
      <Text style={styles.textStyle}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#1D74FC",
    borderRadius: 8,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textStyle: {
    color: "#9FCCFD",
    fontFamily: "Hind_600SemiBold",
    fontSize: 18,
  },
});
