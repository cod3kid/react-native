import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileBox from "./ProfileBox";

export default function ProfileBoxContainer() {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flex: 1,
      paddingHorizontal: 15,
    },
  });
  return (
    <View style={styles.container}>
      <ProfileBox label="Posts" value={0} />
      <ProfileBox label="Followers" value={0} />
      <ProfileBox label="Following" value={0} />
    </View>
  );
}
