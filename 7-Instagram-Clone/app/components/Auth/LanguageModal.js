import React from "react";
import { View, Text } from "react-native";
import { Overlay } from "react-native-elements";
export default function LanguageModal({ isModalVisible, setModalVisible }) {
  return (
    <Overlay
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      overlayStyle={{ flex: 1, width: "90%", margin: 20 }}
    >
      <Text>SELECT YOUR LANGUAGE</Text>
    </Overlay>
  );
}
