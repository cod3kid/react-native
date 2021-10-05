import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import t from "../../utils/translations";
import Screen from "../../components/Common/Screen";
import CustomInput from "../../components/Auth/CustomInput";
import CustomButton from "../../components/Auth/CustomButton";
import LanguageModal from "../../components/Auth/LanguageModal";
import LanguageSelector from "../../components/Auth/LanguageSelector";
import InstagramText from "../../components/Auth/InstagramText";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Screen style={styles.screen}>
      <LanguageSelector onPress={() => setModalVisible(true)} />
      <View style={styles.mainContainer}>
        <InstagramText />
        <View style={styles.formContainer}>
          <CustomInput
            placeholder={t("email")}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <CustomInput
            placeholder={t("password")}
            value={password}
            onChangeText={(text) => setPassword(text)}
            isPassword
            showIcon
          />
          <CustomButton title={t("loginButton")} />
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
            paddingHorizontal: 30,
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

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="facebook" size={30} color="#1778F2" />
          <Text style={{ color: "#1778F2", fontWeight: "bold", marginLeft: 5 }}>
            {t("loginWithFacebook")}
          </Text>
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
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ color: "#30618A", fontWeight: "bold" }}>
            {t("signUp")}.
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <LanguageModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  mainContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    padding: 30,
  },
});
