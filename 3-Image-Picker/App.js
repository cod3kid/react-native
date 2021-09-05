import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) alert("you need to give permission");
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={selectImage}>
        <View style={styles.cameraContainer}>
          <MaterialCommunityIcons name="camera" size={30} color="black" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraContainer: {
    height: 150,
    width: 150,
    backgroundColor: "#B7C6D9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
});
