import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { View, StyleSheet, Text } from "react-native";

import firebase from "../../config/firebase";
import Screen from "../../components/Common/Screen";

const auth = firebase.auth();
export default function SettingsScreen() {
  return (
    <Screen style={styles.screen}>
      <TouchableWithoutFeedback onPress={() => auth.logout()}>
        <View>
          <Text>Logout</Text>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
