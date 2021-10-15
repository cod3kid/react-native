import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Switch } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

import firebase from "../../config/firebase";
import Screen from "../../components/Common/Screen";

const auth = firebase.auth();
export default function SettingsScreen() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.themeReducer);
  const [themeColor, setThemeColor] = useState(isDark);

  useEffect(() => {
    dispatch({ type: "SET_THEME", isDark: themeColor });
  }, [themeColor]);

  return (
    <Screen style={styles.screen}>
      <TouchableWithoutFeedback onPress={() => auth.signOut()}>
        <View>
          <Text>Logout</Text>
        </View>
      </TouchableWithoutFeedback>

      <View>
        <Switch
          value={themeColor}
          onValueChange={(value) => setThemeColor(value)}
        />
      </View>
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
