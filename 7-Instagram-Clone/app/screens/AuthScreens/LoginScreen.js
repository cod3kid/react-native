import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import * as Yup from "yup";
import * as Facebook from "expo-facebook";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";

import firebase from "../../config/firebase";
import t from "../../utils/translations";
import { darkColors, lightColors } from "../../utils/colors";
import Screen from "../../components/Common/Screen";
import CustomInput from "../../components/Auth/CustomInput";
import CustomButton from "../../components/Auth/CustomButton";
import LanguageModal from "../../components/Auth/LanguageModal";
import LanguageSelector from "../../components/Auth/LanguageSelector";
import InstagramText from "../../components/Common/InstagramText";
import FBLoginButton from "../../components/Auth/FBLoginButton";
import Footer from "../../components/Auth/Footer";
import OrContainer from "../../components/Auth/OrContainer";
import AuthLoader from "../../components/Auth/AuthLoader";
import Alert from "../../components/Common/Alert";

const auth = firebase.auth();
const db = firebase.firestore();
export default function LoginScreen({ navigation }) {
  const isDark = useSelector((state) => state.themeReducer);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoaderVisible, setLoaderVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const main = isDark ? darkColors.main : lightColors.main;
  const primary = isDark ? darkColors.primary : lightColors.primary;
  const blue = isDark ? darkColors.lightBlue : lightColors.mediumBlue;
  const containerColor = isDark ? darkColors.darkGrey : lightColors.offWhite;
  const borderColor = isDark ? darkColors.darkGrey : lightColors.lightGrey;
  const darkBlueText = isDark ? darkColors.aceBlue : lightColors.darkBlue;
  const dividerColor = isDark ? darkColors.secondary : lightColors.darkGrey;

  const styles = StyleSheet.create({
    screen: {
      justifyContent: "space-between",
      backgroundColor: main,
    },
    mainContainer: {
      justifyContent: "flex-start",
      alignItems: "center",
    },
    formContainer: {
      width: "100%",
      padding: 30,
      paddingBottom: 15,
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
      color: dividerColor,
      fontSize: 13,
    },
    getLoginHelpText: {
      color: darkBlueText,
      fontWeight: "bold",
      fontSize: 13,
    },
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
  });

  const handleFacebookLogin = async () => {
    try {
      await Facebook.initializeAsync(process.env.FACEBOOK_APP_ID); // enter your Facebook App Id
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((user) => {
            // All the details about user are in here returned from firebase
            console.log("Logged in successfully", user);
          })
          .catch((error) => {
            console.log("Error occurred ", error);
          });
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  const onSubmit = async (values) => {
    const { email, password } = values;
    Keyboard.dismiss();
    setLoaderVisible(true);

    await auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setLoaderVisible(false);
      })
      .catch((error) => {
        console.log(error);
        setAlertMessage("Incorrect Credentials");
        setShowAlert(true);
        setLoaderVisible(false);
        return;
      });
  };

  return (
    <Screen style={styles.screen}>
      <LanguageSelector
        onPress={() => setModalVisible(true)}
        color={dividerColor}
      />
      <View style={styles.mainContainer}>
        <InstagramText color={primary} />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <View style={styles.formContainer}>
              <CustomInput
                primaryColor={primary}
                containerColor={containerColor}
                borderColor={borderColor}
                name="email"
                placeholder={t("email")}
                value={values.email}
                onChangeText={handleChange("email")}
              />
              <CustomInput
                primaryColor={primary}
                containerColor={containerColor}
                borderColor={borderColor}
                name="password"
                placeholder={t("password")}
                value={values.password}
                onChangeText={handleChange("password")}
                isPassword
                showIcon
              />
              <CustomButton
                isValid={isValid}
                color={blue}
                inValidColor={
                  isDark ? darkColors.mediumBlue : lightColors.lightBlue
                }
                onPress={handleSubmit}
                title={t("loginButton")}
              />
            </View>
          )}
        </Formik>
        <View style={styles.forgotPassContainer}>
          <Text style={styles.textContainer}>
            <Text style={styles.forgotLoginText}>{t("forgotLoginText")} </Text>
            <Text style={styles.getLoginHelpText}>{t("getLoginHelp")}.</Text>
          </Text>
        </View>
        <OrContainer color={dividerColor} paddingHorizontal={30} />
        <FBLoginButton
          backgroundColor={main}
          color={blue}
          onPress={handleFacebookLogin}
        />
      </View>
      <Footer
        primaryColor={dividerColor}
        navColor={isDark ? darkColors.aceBlue : lightColors.darkBlue}
        text={t("preSignUpText")}
        navText={t("signUp")}
        onPress={() => navigation.navigate("Register")}
      />
      <LanguageModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <AuthLoader
        loaderColor={primary}
        isModalVisible={isLoaderVisible}
        setModalVisible={setLoaderVisible}
        title="Logging In..."
      />
      <Alert
        isModalVisible={showAlert}
        setModalVisible={setShowAlert}
        message={alertMessage}
      />
    </Screen>
  );
}
