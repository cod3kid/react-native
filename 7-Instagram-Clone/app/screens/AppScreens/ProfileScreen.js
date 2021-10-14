import React, { useEffect, useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import AuthContext from "../../helpers/context";
import Screen from "../../components/Common/Screen";
import firebase from "../../config/firebase";
import { darkColors, lightColors } from "../../utils/colors";
import ProfileBox from "../../components/Common/ProfileBox";
import ProfileBio from "../../components/Profile/ProfileBio";
import ProfileBoxContainer from "../../components/Common/ProfileBoxContainer";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import { ActivityIndicator } from "react-native";

const db = firebase.firestore();
const screenWidth = Dimensions.get("window").width;

export default function ProfileScreen() {
  const isDark = useSelector((state) => state.themeReducer);
  const { user } = useContext(AuthContext);
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);

  const main = isDark ? darkColors.main : lightColors.main;

  const getDataFromFireStore = async () => {
    await db
      .collection("posts")
      .where("uid", "==", "tfrmpHjmrJVH5AUgEFxFgDjVavc2")
      .onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setProfileData([...data]);
      });
  };

  useEffect(() => {
    getDataFromFireStore();
    console.log(user.email);

    return () => {
      getDataFromFireStore();
    };
  }, []);

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: main,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    subHeader: {
      flexDirection: "row",
    },
    imageContainer: {
      width: screenWidth / 3 - 2,
      height: 110,
      marginTop: 10,
      backgroundColor: "black",
    },
    oddColumn: {
      marginRight: 0,
    },
    evenColumn: {
      marginLeft: 3,
      marginRight: 3,
    },
    image: {
      flex: 1,
      height: 150,
      width: "100%",
      opacity: 0.5,
    },
  });

  return (
    <Screen style={styles.screen}>
      <ProfileHeader />
      {/* Profile Details */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ paddingHorizontal: 10 }}>
          <MaterialCommunityIcons
            name="account-circle"
            size={100}
            color="grey"
          />
        </View>
        <ProfileBoxContainer />
      </View>
      <ProfileBio name="Muhamed Sufail" bio="Random bio ..." />
      <View>
        {profileData && profileData.length ? (
          <FlatList
            data={profileData}
            keyExtractor={(item) => item.downloadUrl}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            numColumns={3}
            renderItem={({ item, index }) => {
              const { downloadUrl } = item;
              return (
                <TouchableOpacity>
                  <View
                    style={[
                      index % 2 == 0 ? styles.oddColumn : styles.evenColumn,
                      styles.imageContainer,
                    ]}
                  >
                    <Image source={{ uri: downloadUrl }} style={styles.image} />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </Screen>
  );
}
