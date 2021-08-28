import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useFonts, Hind_600SemiBold } from "@expo-google-fonts/hind";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
export default function LoginScreen() {
  const [fontLoaded] = useFonts({
    Hind_600SemiBold,
  });

  return (
    <View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/login.png")}
      />
      <View style={styles.secondView}>
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
        <CustomButton title="Login" style={styles.buttonStyle} />

        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or</Text>
        </View>

        <View style={styles.socialIconsContainer}>
          <View style={styles.individualSocialContainer}>
            <Image
              resizeMode="contain"
              style={styles.socialLogo}
              source={require("../assets/google-logo.png")}
            />
          </View>
          <View style={styles.individualSocialContainer}>
            <Image
              resizeMode="contain"
              style={styles.socialLogo}
              source={require("../assets/facebook-logo-60.png")}
            />
          </View>
          <View style={styles.individualSocialContainer}>
            <Image
              resizeMode="contain"
              style={styles.socialLogo}
              source={require("../assets/apple-logo.png")}
            />
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
  image: {
    width: "100%",
    height: 300,
  },
  secondView: {
    paddingHorizontal: 30,
  },
  loginText: {
    fontFamily: "Hind_600SemiBold",
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
    flexGrow: 1,
  },
  individualSocialContainer: {
    borderColor: "#B7C6D9",
    borderWidth: 1,
    paddingVertical: 10,
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
    top: 100,
  },
  registerButton: {
    color: "#275BA2",
    fontSize: 16,
    fontFamily: "Hind_600SemiBold",
  },
});
