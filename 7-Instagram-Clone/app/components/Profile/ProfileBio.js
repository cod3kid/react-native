import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProfileBio({ name, bio, colors }) {
  const { primary, borderColor } = colors;
  const styles = StyleSheet.create({
    padding10: {
      paddingHorizontal: 10,
    },
    name: {
      fontWeight: "bold",
      fontSize: 14,
      color: primary,
    },
    bio: {
      color: primary,
    },
    buttonContainer: {
      flexDirection: "row",
    },
    editProfileContainer: {
      marginVertical: 10,
      borderColor: borderColor,
      borderWidth: 1,
      borderRadius: 4,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      flex: 1,
    },
    editProfileText: {
      fontWeight: "bold",
      color: primary,
    },
    dropdown: {
      marginLeft: 6,
      marginVertical: 10,
      borderColor: borderColor,
      borderWidth: 1,
      borderRadius: 4,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
    },
  });
  return (
    <View style={styles.padding10}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.editProfileContainer}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </View>
        <View style={styles.dropdown}>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={primary}
          />
        </View>
      </View>
    </View>
  );
}
