import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";

export default function Alert({ isModalVisible, setModalVisible, message }) {
  return (
    <Overlay
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      overlayStyle={styles.overlayStyle}
    >
      <View style={{ alignItems: "center", padding: 5 }}>
        <Text style={{ fontWeight: "bold" }}>{message}</Text>
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
