import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function CustomButton() {
  let [fontsLoaded] = useFonts({
    "Urbanist-Medium": require("../assets/fonts/Urbanist-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
    padding: 12,
  },
  textStyle: {
    color: "#9FCCFD",
    fontFamily: "Urbanist-Medium",
    fontSize: 18,
  },
});
