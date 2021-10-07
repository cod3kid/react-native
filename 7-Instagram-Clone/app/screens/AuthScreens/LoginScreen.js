import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import t from "../../utils/translations";
import { colors } from "../../utils/colors";
import Screen from "../../components/Common/Screen";
import CustomInput from "../../components/Auth/CustomInput";
import CustomButton from "../../components/Auth/CustomButton";
import LanguageModal from "../../components/Auth/LanguageModal";
import LanguageSelector from "../../components/Auth/LanguageSelector";
import InstagramText from "../../components/Auth/InstagramText";
import FBLoginButton from "../../components/Auth/FBLoginButton";
import Footer from "../../components/Auth/Footer";
import OrContainer from "../../components/Auth/OrContainer";

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

        <View style={styles.forgotPassContainer}>
          <Text style={styles.textContainer}>
            <Text style={styles.forgotLoginText}>{t("forgotLoginText")} </Text>
            <Text style={styles.getLoginHelpText}>{t("getLoginHelp")}.</Text>
          </Text>
        </View>
        <OrContainer paddingHorizontal={30} />
        <FBLoginButton backgroundColor="white" color="#1778F2" />
      </View>
      <Footer
        text={t("preSignUpText")}
        navText={t("signUp")}
        onPress={() => navigation.navigate("Register")}
      />
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
  forgotPassContainer: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    textAlign: "center",
  },
  forgotLoginText: {
    color: colors.grey,
  },
  getLoginHelpText: {
    color: colors.darkBlue,
    fontWeight: "bold",
  },
});
