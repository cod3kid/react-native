import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import t from "../../utils/translations";
import { colors } from "../../utils/colors";
import firebase from "../../config/firebase";
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
import Alert from "../../components/Common/Alert";

const auth = firebase.auth();
const db = firebase.firestore();

export default function LoginScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoaderVisible, setLoaderVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string().required(),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
  });

  const onSubmit = async (values) => {
    Keyboard.dismiss();

    const { name, email, password, username } = values;
    setLoaderVisible(true);
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        console.log(res);
        return db
          .collection("users")
          .doc(res.user.uid)
          .set({
            username,
            email,
            account_type: "public",
            followers: 0,
            following: 0,
            posts: 0,
            bio: "",
          })
          .then((res) => {
            res.log("data user", res);
            setLoaderVisible(false);
            setAlertMessage("Account Created");
            setShowAlert(true);
            navigation.navigate("Login");
          });
      })
      .catch((err) => {
        console.log("err", err);
        setLoaderVisible(false);
        setAlertMessage("Email Already Registered");
        setShowAlert(true);
        return;
      });
  };

  return (
    <Screen style={styles.screen}>
      <LanguageSelector onPress={() => setModalVisible(true)} />
      <View style={styles.mainContainer}>
        <InstagramText />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <View style={styles.formContainer}>
              <CustomInput
                name="name"
                placeholder={t("fullName")}
                value={values.name}
                onChangeText={handleChange("name")}
              />
              <CustomInput
                name="email"
                placeholder={t("email")}
                value={values.email}
                onChangeText={handleChange("email")}
              />
              <CustomInput
                name="username"
                placeholder={t("username")}
                value={values.username}
                onChangeText={handleChange("username")}
              />
              <CustomInput
                name="password"
                placeholder={t("password")}
                value={values.password}
                onChangeText={handleChange("password")}
                isPassword
                showIcon
              />
              <CustomButton onPress={handleSubmit} title={t("signUpButton")} />
            </View>
          )}
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
        title="Creating Account..."
      />
      <Alert
        isModalVisible={showAlert}
        setModalVisible={setShowAlert}
        message={alertMessage}
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
