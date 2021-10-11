import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";

import t from "../../utils/translations";
import { colors } from "../../utils/colors";
import SignUpHandler from "../../helpers/SignUp.handler";
import Screen from "../../components/Common/Screen";
import CustomInput from "../../components/Auth/CustomInput";
import CustomButton from "../../components/Auth/CustomButton";
import LanguageModal from "../../components/Auth/LanguageModal";
import LanguageSelector from "../../components/Auth/LanguageSelector";
import InstagramText from "../../components/Auth/InstagramText";
import FBLoginButton from "../../components/Auth/FBLoginButton";
import Footer from "../../components/Auth/Footer";
import OrContainer from "../../components/Auth/OrContainer";
import AuthLoader from "../../components/Auth/AuthLoader";

export default function LoginScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoaderVisible, setLoaderVisible] = useState(false);
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    touched,
    resetForm,
  } = SignUpHandler({ setLoaderVisible });

  return (
    <Screen style={styles.screen}>
      <LanguageSelector onPress={() => setModalVisible(true)} />
      <View style={styles.mainContainer}>
        <InstagramText />
        <Formik>
          <View style={styles.formContainer}>
            <CustomInput
              name="name"
              placeholder={t("fullName")}
              value={values.name}
              onChangeText={handleChange}
            />
            <CustomInput
              name="email"
              placeholder={t("email")}
              value={values.email}
              onChangeText={handleChange}
            />
            <CustomInput
              name="username"
              placeholder={t("username")}
              value={values.username}
              onChangeText={handleChange}
            />
            <CustomInput
              name="password"
              placeholder={t("password")}
              value={values.password}
              onChangeText={handleChange}
              isPassword
              showIcon
            />
            <CustomButton onPress={handleSubmit} title={t("signUpButton")} />
          </View>
        </Formik>
        <OrContainer paddingHorizontal={30} />
        <FBLoginButton backgroundColor="white" color="#1778F2" />
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
      <AuthLoader
        isModalVisible={isLoaderVisible}
        setModalVisible={setLoaderVisible}
        title="Logging In..."
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
