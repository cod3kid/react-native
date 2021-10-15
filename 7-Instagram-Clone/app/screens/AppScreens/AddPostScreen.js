import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import * as ImagePicker from "expo-image-picker";

import firebase from "../../config/firebase";
import { darkColors, lightColors } from "../../utils/colors";
import Screen from "../../components/Common/Screen";
import { TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native";
import AuthLoader from "../../components/Auth/AuthLoader";

const storage = firebase.storage();
const db = firebase.firestore();

export default function AddPostScreen({ route }) {
  const navigation = useNavigation();
  const { user } = route.params;
  const isDark = useSelector((state) => state.themeReducer);
  const [image, setImage] = useState(null);
  const [isUploading, setUploading] = useState(false);
  const main = isDark ? darkColors.main : lightColors.main;

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

  const uploadFile = async (uri) => {
    setUploading(true);
    try {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", uri, true);
        xhr.send(null);
      });

      const uniqueId = uuidv4();
      const ref = firebase.storage().ref().child(uniqueId);
      const snapshot = await ref.put(blob);
      blob.close();

      const downloadUrl = await snapshot.ref.getDownloadURL();

      console.warn(user.uid);

      try {
        await db.collection("posts").add({
          uid: user.uid,
          downloadUrl,
          comments: [],
          likes: [],
          caption: "Blah",
          timestamp: Date.now(),
        });
      } catch (ex) {
        console.log("Erro", ex);
      }
    } catch (ex) {
      console.log(ex);
    }

    setUploading(false);
    navigation.goBack();
  };

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: main,
    },
    galleryIconContainer: {
      alignItems: "center",
    },
  });

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen style={styles.screen}>
      <View
        style={{
          flexDirection: "row",
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="close" size={32} color="black" />
        </TouchableWithoutFeedback>
        <Text style={{ fontSize: 22 }}>New Post</Text>

        <TouchableWithoutFeedback onPress={() => uploadFile(image)}>
          <MaterialCommunityIcons name="check" size={32} color="black" />
        </TouchableWithoutFeedback>
      </View>

      {image ? (
        <View
          style={{
            alignSelf: "center",
            width: "90%",
            height: "40%",
            overflow: "hidden",
            borderRadius: 6,
          }}
        >
          <TouchableWithoutFeedback onPress={() => selectImage()}>
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%" }}
            />
          </TouchableWithoutFeedback>
        </View>
      ) : (
        <TouchableWithoutFeedback onPress={() => selectImage()}>
          <View style={styles.galleryIconContainer}>
            <MaterialCommunityIcons name="image" size={200} color="grey" />
          </View>
        </TouchableWithoutFeedback>
      )}
      <View style={{ padding: 20 }}>
        <TextInput
          fontSize={16}
          numberOfLines={3}
          placeholder="Write a caption"
        />
      </View>
      <AuthLoader
        loaderColor="black"
        isModalVisible={isUploading}
        setModalVisible={setUploading}
        title="Uploading..."
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
