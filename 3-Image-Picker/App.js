import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableWithoutFeedback,
  View,
  Image,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [image, setImage] = useState(null);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) alert("you need to give permission");
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 0.5,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={selectImage}>
        {image ? (
          <View
            style={{
              width: 150,
              height: 150,
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        ) : (
          <View style={styles.cameraContainer}>
            <MaterialCommunityIcons name="camera" size={30} color="black" />
          </View>
        )}
      </TouchableWithoutFeedback>
      <View style={{ marginTop: 20 }}>
        <Button title="Remove" onPress={() => setImage(null)} />
      </View>
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
