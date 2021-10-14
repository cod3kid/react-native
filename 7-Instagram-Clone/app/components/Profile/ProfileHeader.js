import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import { TouchableWithoutFeedback } from "react-native";

export default function ProfileHeader() {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    subHeader: {
      flexDirection: "row",
    },
    username: {
      fontSize: 18,
      fontWeight: "bold",
      paddingHorizontal: 8,
    },
  });

  return (
    <View style={styles.header}>
      <View style={styles.subHeader}>
        <Text style={styles.username}>muhamed.sufail</Text>
        <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
      </View>

      <TouchableWithoutFeedback onPress={() => navigation.navigate("Settings")}>
        <Feather name="menu" size={24} color="black" />
      </TouchableWithoutFeedback>
    </View>
  );
}
