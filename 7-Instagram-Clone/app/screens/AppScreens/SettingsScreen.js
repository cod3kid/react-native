import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { View, StyleSheet, Text } from "react-native";

import { removeUserData } from "../../utils/storage";
import Screen from "../../components/Common/Screen";

export default function SettingsScreen() {
  const handleLogout = () => {
    removeUserData();
  };

  return (
    <Screen style={styles.screen}>
      <TouchableWithoutFeedback onPress={() => handleLogout()}>
        <View>
          <Text>Logout</Text>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "space-between",
    backgroundColor: "white",
  },
});
