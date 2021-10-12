import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../../components/Common/Screen";

export default function HomeScreen() {
  return (
    <Screen styles={styles.screen}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "space-between",
    backgroundColor: "white",
  },
});
