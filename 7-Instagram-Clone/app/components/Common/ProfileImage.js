import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { lightColors } from "../../utils/colors";

export default function ProfileImage({ imageUrl }) {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
    image: {
      height: 100,
      width: 100,
      borderRadius: 50,
    },
  });
  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
      ) : (
        <MaterialCommunityIcons
          name="account-circle"
          size={100}
          color={lightColors.lightGrey}
        />
      )}
    </View>
  );
}
