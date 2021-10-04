import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";

import t, { getCurrentLanguage } from "../../utils/translations";
import Screen from "../../components/Common/Screen";
import CustomInput from "../../components/Auth/CustomInput";
import CustomButton from "../../components/Auth/CustomButton";
import LanguageModal from "../../components/Auth/LanguageModal";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const [fontsLoaded] = useFonts({
    Billabong: require("../../assets/fonts/billabong.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Screen style={{ justifyContent: "space-between" }}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text>{getCurrentLanguage()}</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color="black" />
        </View>
      </TouchableWithoutFeedback>
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
            placeholder={t("email")}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <CustomInput
            iconColor="#818B95"
            placeholder={t("password")}
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
      <LanguageModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
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
