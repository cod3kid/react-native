import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import t from "../../utils/translations";
import { colors } from "../../utils/colors";
import Screen from "../../components/Common/Screen";
import FBLoginButton from "../../components/Auth/FBLoginButton";
import Footer from "../../components/Auth/Footer";
import InstagramText from "../../components/Auth/InstagramText";
import LanguageSelector from "../../components/Auth/LanguageSelector";
import LanguageModal from "../../components/Auth/LanguageModal";
import OrContainer from "../../components/Auth/OrContainer";

export default function RegisterScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Screen style={styles.screen}>
      <LanguageSelector onPress={() => setModalVisible(true)} />
      <View style={styles.mainContainer}>
        <InstagramText />
        <View style={styles.topMargin}>
          <FBLoginButton backgroundColor="#1778F2" color="white" />
          <View style={styles.secondLastContainer}>
            <OrContainer paddingHorizontal={10} />
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signWithEmailOrPhoneText}>
                {t("signUpWithEmailOrPhone")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer
        text={t("preLogInText")}
        navText={t("footerLogIn")}
        onPress={() => navigation.navigate("Login")}
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
    position: "absolute",
    top: "30%",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    height: "40%",
    padding: 20,
  },
  topMargin: {
    marginTop: "30%",
  },
  secondLastContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  signWithEmailOrPhoneText: {
    color: colors.darkBlue,
    fontWeight: "bold",
  },
});
