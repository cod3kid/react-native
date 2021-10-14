import React from "react";
import { View, Text } from "react-native";

export default function ProfileBox({ label, value }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{value}</Text>
      <Text>{label}</Text>
    </View>
  );
}
