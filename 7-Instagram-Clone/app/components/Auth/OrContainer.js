import React from "react";
import { View, Text, StyleSheet } from "react-native";

import t from "../../utils/translations";

export default function OrContainer({ paddingHorizontal }) {
  return (
    <View style={[styles.container, { paddingHorizontal }]}>
      <View style={styles.divider} />
      <Text style={styles.text}> {t("or").toUpperCase()} </Text>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  text: {
    paddingHorizontal: 5,
    fontWeight: "bold",
    color: "#ADB3BC",
  },
  divider: {
    backgroundColor: "#ADB3BC",
    height: 0.5,
    flex: 1,
  },
});
