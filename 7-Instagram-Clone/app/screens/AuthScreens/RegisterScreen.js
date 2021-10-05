import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InstagramText from "../../components/Auth/InstagramText";
import LanguageSelector from "../../components/Auth/LanguageSelector";
import Screen from "../../components/Common/Screen";

export default function RegisterScreen() {
  return (
    <Screen style={styles.screen}>
      <LanguageSelector onPress={() => setModalVisible(true)} />
      <View style={styles.mainContainer}>
        <InstagramText />
        <Text>Blah</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  mainContainer: {
    position: "absolute",
    top: "30%",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
});
