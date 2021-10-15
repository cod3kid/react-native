import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import InstagramText from "../../components/Common/InstagramText";
import Instagram from "../../assets/images/instagram-text.svg";

export default function HomeHeader({
  userData,
  isDark,
  onPressAddIcon,
  onPressMessengerIcon,
}) {
  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 15,
    },
  });
  return (
    <View style={styles.header}>
      <View style={{ alignItems: "flex-start" }}>
        <Instagram
          width={140}
          height={35}
          style={{ color: "blue", fill: "blue" }}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableWithoutFeedback onPress={onPressAddIcon}>
          <FontAwesome name="plus-square-o" size={28} color="black" />
        </TouchableWithoutFeedback>

        <MaterialCommunityIcons
          style={{ marginLeft: 10 }}
          name="facebook-messenger"
          size={28}
          color="black"
        />
      </View>
    </View>
  );
}
