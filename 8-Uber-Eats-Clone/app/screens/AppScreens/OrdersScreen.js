import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function OrdersScreen() {
  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.parent]}>
      <View style={{ padding: 18, backgroundColor: "white", elevation: 5 }}>
        <Text style={{ fontSize: 16, alignSelf: "center", fontWeight: "700" }}>
          Your orders
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="bookmark-minus"
          size={70}
          color="#ADB3BC"
        />
        <Text style={{ padding: 20 }}>No orders yet</Text>
        <Text
          style={{
            paddingHorizontal: 30,
            paddingBottom: 10,
            textAlign: "center",
          }}
        >
          When you place your first order, it will appear here
        </Text>
        <View
          style={{
            backgroundColor: "black",
            width: 100,
            height: 40,
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Find food</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  parent: {
    flex: 1,
  },
});
