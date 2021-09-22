import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import BottomTabs from "../components/BottomTabs";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.safeAreaStyle]}>
      <View style={styles.headerTabsContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  safeAreaStyle: {
    backgroundColor: "#eee",
    flex: 1,
  },
  headerTabsContainer: {
    backgroundColor: "white",
    padding: 15,
  },
});
