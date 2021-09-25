import React from "react";
import { View, Text, Dimensions } from "react-native";

import SearchBar from "../../components/Home/SearchBar";
import Screen from "../../components/Common/Screen";

const screenHeight = Dimensions.get("window").height;

export default function SearchScreen() {
  return (
    <Screen>
      <SearchBar />
    </Screen>
  );
}
