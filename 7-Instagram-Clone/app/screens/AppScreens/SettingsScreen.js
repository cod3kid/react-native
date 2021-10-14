import React, { useContext } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { View, StyleSheet, Text } from "react-native";

import { removeUserData } from "../../utils/storage";
import Screen from "../../components/Common/Screen";
import useAuth from "../../helpers/useAuth";

export default function SettingsScreen() {
  const { logOut } = useAuth();

  const handleLogout = () => {
    logOut();
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
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
