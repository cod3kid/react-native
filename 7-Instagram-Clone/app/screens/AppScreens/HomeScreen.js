import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { darkColors, lightColors } from "../../utils/colors";
import { useSelector } from "react-redux";
import Screen from "../../components/Common/Screen";
import HomeHeader from "../../components/Home/Header";
import AuthContext from "../../helpers/context";

export default function HomeScreen({ navigation }) {
  const isDark = useSelector((state) => state.themeReducer);
  const main = isDark ? darkColors.main : lightColors.main;

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: main,
    },
  });

  return (
    <Screen style={styles.screen}>
      <HomeHeader
        onPressAddIcon={() => navigation.navigate("AddPost")}
        onPressChatIcon={() => null}
      />
      {/* Pull to refresh Parent */}
      {/* Story Header*/}
    </Screen>
  );
}
