import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import BrowseSearchBar from "../../components/BrowseSearchBar";

export default function BrowseScreen() {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <BrowseSearchBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
