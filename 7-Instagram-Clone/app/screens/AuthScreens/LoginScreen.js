import React, { useState } from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import * as Yup from "yup";
import * as Facebook from "expo-facebook";
import { Formik } from "formik";

import firebase from "../../config/firebase";
import { getUserData, storeUserData } from "../../utils/storage";
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
      await Facebook.initializeAsync("878551863054084"); // enter your Facebook App Id
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        // SENDING THE TOKEN TO FIREBASE TO HANDLE AUTH
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
      } else {
        // type === 'cancel'
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
      .then(async (res) => {
        const docRef = db.collection("users").doc(res.user.uidww);
        return docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              storeUserData(doc.data());
              setLoaderVisible(false);
              return;
            } else {
              setLoaderVisible(false);
              return;
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      })
      .catch((error) => {
        setAlertMessage("Incorrect Credentials");
        setShowAlert(true);
        setLoaderVisible(false);
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
                name="email"
                placeholder={t("email")}
                value={values.email}
                onChangeText={handleChange("email")}
              />
              <CustomInput
                name="password"
                placeholder={t("password")}
                value={values.password}
                onChangeText={handleChange("password")}
                isPassword
                showIcon
              />
              <CustomButton onPress={handleSubmit} title={t("loginButton")} />
            </View>
          )}
        </Formik>
        <View style={styles.forgotPassContainer}>
          <Text style={styles.textContainer}>
            <Text style={styles.forgotLoginText}>{t("forgotLoginText")} </Text>
            <Text style={styles.getLoginHelpText}>{t("getLoginHelp")}.</Text>
          </Text>
        </View>
        <OrContainer paddingHorizontal={30} />
        <FBLoginButton
          backgroundColor="white"
          color="#1778F2"
          onPress={handleFacebookLogin}
        />
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
      <AuthLoader
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
