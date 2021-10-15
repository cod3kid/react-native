import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileBox from "./ProfileBox";

export default function ProfileBoxContainer({ colors }) {
  const { primary } = colors;
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flex: 1,
      paddingHorizontal: 15,
    },
    dataContainer: {
      alignItems: "center",
    },
    dataValue: {
      fontWeight: "bold",
      fontSize: 20,
      color: primary,
    },
    dataLabel: {
      color: primary,
    },
  });
  return (
    <View style={styles.container}>
      <ProfileBox label="Posts" value={0} styles={styles} />
      <ProfileBox label="Followers" value={0} styles={styles} />
      <ProfileBox label="Following" value={0} styles={styles} />
    </View>
  );
}
