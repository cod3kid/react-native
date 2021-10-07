import React, { useState } from "react";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import PhoneCodesModal from "./PhoneCodesModal";

export default function TabScenePhone() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <Text>Phone</Text>
      </TouchableWithoutFeedback>
      <PhoneCodesModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
