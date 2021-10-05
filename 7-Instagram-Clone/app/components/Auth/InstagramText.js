import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function InstagramText() {
  const [fontsLoaded] = useFonts({
    Billabong: require("../../assets/fonts/billabong.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Text style={styles.instagramText}>Instagram</Text>;
}

const styles = StyleSheet.create({
  instagramText: {
    marginLeft: 20,
    fontSize: 55,
    color: "black",
    fontFamily: "Billabong",
  },
});
