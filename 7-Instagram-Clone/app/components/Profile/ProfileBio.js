import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileBio({ name, bio }) {
  const styles = StyleSheet.create({
    padding10: {
      paddingHorizontal: 10,
    },
    name: {
      fontWeight: "bold",
      fontSize: 14,
    },
    editProfileContainer: {
      marginTop: 10,
      borderColor: "grey",
      borderWidth: 1,
      borderRadius: 4,
      flexDirection: "row",
      justifyContent: "center",
      padding: 5,
    },
    editProfileText: {
      fontWeight: "bold",
    },
  });
  return (
    <View style={styles.padding10}>
      <Text style={styles.name}>{name}</Text>
      <Text>{bio}</Text>
      <View style={styles.editProfileContainer}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </View>
    </View>
  );
}
