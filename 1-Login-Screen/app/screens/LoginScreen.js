import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import LoginImage from "../assets/login.svg";
import GoogleLogo from "../assets/google-logo.svg";
import FacebookLogo from "../assets/facebook-logo.svg";
import TwitterLogo from "../assets/twitter-logo.svg";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function LoginScreen() {
  let [fontsLoaded] = useFonts({
    "Urbanist-Medium": require("../assets/fonts/Urbanist-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <LoginImage width={280} height={280} />
        <Text style={styles.loginText}>Login</Text>
        <CustomTextInput
          iconName="email-outline"
          iconColor="#818B95"
          placeholder="Email"
        />
        <CustomTextInput
          iconName="lock-outline"
          iconColor="#818B95"
          placeholder="Password"
          isPassword
        />
        <View>
          <CustomButton title="Login" style={styles.buttonStyle} />
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or</Text>
        </View>

        <View style={styles.socialIconsContainer}>
          <View style={styles.individualSocialContainer}>
            <GoogleLogo width={50} height={50} />
          </View>
          <View style={styles.individualSocialContainer}>
            <FacebookLogo width={50} height={50} />
          </View>
          <View style={styles.individualSocialContainer}>
            <TwitterLogo width={50} height={50} />
          </View>
        </View>
      </View>

      <View style={styles.registerContainer}>
        <Text style={[styles.orText]}>Don't have an account ? </Text>
        <Text style={styles.registerButton}>Register</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 16,
    justifyContent: "space-between",
  },
  secondView: {
    paddingHorizontal: 30,
  },
  loginText: {
    fontFamily: "Urbanist-Medium",
    fontSize: 40,
    color: "#192A4D",
  },
  orContainer: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  orText: {
    fontSize: 16,
    color: "#B7C6D9",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  individualSocialContainer: {
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  socialLogo: {
    width: 40,
    height: 40,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 60,
  },
  registerButton: {
    color: "#275BA2",
    fontSize: 16,
    fontFamily: "Urbanist-Medium",
  },
});
