import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { darkColors, lightColors } from "../../utils/colors";

export default function ProfileBio({
  name,
  bio,
  colors,
  isOther,
  isProfile,
  navigation,
  userData,
}) {
  const { primary, borderColor, blue, main, borderWhite } = colors;
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
      borderColor: borderWhite,
      borderWidth: 1,
      borderRadius: 4,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      flex: 1,
    },
    followContainer: {
      marginVertical: 10,
      borderColor: blue,
      borderWidth: 1,
      borderRadius: 4,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      flex: 1,
      backgroundColor: blue,
    },
    marginLeft: {
      marginLeft: 6,
    },
    editProfileText: {
      fontWeight: "bold",
      color: primary,
    },
    followProfileText: {
      fontWeight: "bold",
      color: lightColors.main,
    },
    dropdown: {
      marginLeft: 6,
      marginVertical: 10,
      borderColor: borderWhite,
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

      {isOther && (
        <OtherProfileActions
          onPress={() => null}
          styles={styles}
          primary={primary}
        />
      )}

      {isProfile && (
        <ProfileActions
          styles={styles}
          primary={primary}
          onPress={() => navigation.navigate("EditProfile", { user: userData })}
        />
      )}
    </View>
  );
}

const OtherProfileActions = ({ styles, primary }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableWithoutFeedback>
        <View style={styles.followContainer}>
          <Text style={styles.followProfileText}>Follow</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={[styles.editProfileContainer, styles.marginLeft]}>
          <Text style={styles.editProfileText}>Message</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.dropdown}>
        <MaterialCommunityIcons name="chevron-down" size={24} color={primary} />
      </View>
    </View>
  );
};

const ProfileActions = ({ styles, primary, onPress }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={onPress} style={styles.editProfileContainer}>
        <View>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.dropdown}>
        <MaterialCommunityIcons name="chevron-down" size={24} color={primary} />
      </View>
    </View>
  );
};
