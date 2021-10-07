import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import t from "../../utils/translations";
import Screen from "../../components/Common/Screen";
import CustomInput from "../../components/Auth/CustomInput";
import SignUpTabs from "../../components/Auth/SignUpTabs";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");

  return (
    <Screen style={styles.screen}>
      <View style={{ padding: 20, flex: 1 }}>
        <MaterialCommunityIcons
          name="account-circle"
          size={200}
          color="black"
        />
        <SignUpTabs />
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
