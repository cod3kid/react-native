import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
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
    <Screen
      style={{ justifyContent: "space-between", backgroundColor: "white" }}
    >
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
        <View
          style={{
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            <Text style={{ color: "#ADB3BC" }}>{t("forgotLoginText")} </Text>
            <Text style={{ color: "#30618A", fontWeight: "bold" }}>
              {t("getLoginHelp")}.
            </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 10,
          }}
        >
          <View style={{ backgroundColor: "#ADB3BC", height: 0.5, flex: 1 }} />
          <Text
            style={{
              paddingHorizontal: 5,
              fontWeight: "bold",
              color: "#ADB3BC",
            }}
          >
            {" "}
            {t("or").toUpperCase()}{" "}
          </Text>
          <View style={{ backgroundColor: "#ADB3BC", height: 0.5, flex: 1 }} />
        </View>
        <View>
          <Text>Login with facebook</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 15,
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: 0.5,
          borderTopColor: "#ADB3BC",
        }}
      >
        <Text style={{ color: "#ADB3BC" }}>{t("preSignUpText")} </Text>
        <Text style={{ color: "#30618A", fontWeight: "bold" }}>
          {t("signUp")}.
        </Text>
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
