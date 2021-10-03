import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Screen from "../../components/Common/Screen";
import CustomInput from "../../components/Common/Auth/CustomInput";
import CustomButton from "../../components/Common/Auth/CustomButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded] = useFonts({
    Billabong: require("../../assets/fonts/billabong.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Screen style={{ justifyContent: "space-between" }}>
      <View>
        <Text>English</Text>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={styles.instagramText}>Instagram</Text>
        <View style={{ width: "100%", padding: 10 }}>
          <CustomInput
            iconColor="#818B95"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <CustomInput
            iconColor="#818B95"
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            isPassword
            showIcon
          />
          <CustomButton title="Log In" />
        </View>
      </View>
      <View>
        <Text>Sign up text</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  instagramText: {
    marginLeft: 20,
    fontSize: 55,
    color: "black",
    fontFamily: "Billabong",
  },
});
