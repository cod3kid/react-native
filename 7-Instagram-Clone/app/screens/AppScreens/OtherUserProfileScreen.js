import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../../components/Common/Screen";
import ProfileBoxContainer from "../../components/Common/ProfileBoxContainer";
import ProfileImage from "../../components/Common/ProfileImage";
import { TouchableWithoutFeedback } from "react-native";

export default function OtherUserProfileScreen({ route, navigation }) {
  const { user } = route.params;
  console.log(user);
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "white",
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
    },
    subHeader: {
      flexDirection: "row",
      alignItems: "center",
    },
    username: {
      fontWeight: "bold",
      fontSize: 20,
      marginLeft: 30,
    },
  });

  useEffect(() => {}, []);

  return (
    <Screen style={styles.screen}>
      {/* Header */}

      <HeaderContainer
        styles={styles}
        username={user.username}
        onPressBack={() => navigation.goBack()}
      />

      {/* Profile Contianer */}

      <View style={{ flexDirection: "row" }}>
        <ProfileImage imageUrl={user.profile_pic} />
        <ProfileBoxContainer />
      </View>
    </Screen>
  );
}

const HeaderContainer = ({ username, styles, onPressBack }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.subHeader}>
        <TouchableWithoutFeedback onPress={onPressBack}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={32}
            color="black"
          />
        </TouchableWithoutFeedback>

        <Text style={styles.username}>{username}</Text>
      </View>

      <MaterialCommunityIcons name="dots-vertical" size={26} color="black" />
    </View>
  );
};
