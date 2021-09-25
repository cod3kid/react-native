import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LocationPicker({ navigateToMaps }) {
  const city = useSelector((state) => state.cityReducer);
  return (
    <View
      style={{
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigateToMaps()}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Text>Now • </Text>
        <Text style={{ fontSize: 16 }}>{city.name}</Text>
      </TouchableOpacity>

      <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
      <View style={{ position: "absolute", right: 10, top: 10 }}>
        <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
      </View>
    </View>
  );
}
