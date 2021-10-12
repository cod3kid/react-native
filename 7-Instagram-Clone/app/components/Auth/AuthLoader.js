import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

export default function AuthLoader({ isModalVisible, setModalVisible, title }) {
  return (
    <Overlay
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      overlayStyle={styles.overlayStyle}
    >
      <View
        style={{ flexDirection: "row", justifyContent: "center", padding: 5 }}
      >
        <ActivityIndicator size="large" color="#1778F2" />
        <Text style={{ color: "black", marginLeft: 5 }}>Loading ...</Text>
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlayStyle: {
    height: 50,
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
