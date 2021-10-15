import React, { useEffect, useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../../components/Common/Screen";
import firebase from "../../config/firebase";
import { getThemeColors } from "../../helpers";
import ProfileBio from "../../components/Profile/ProfileBio";
import ProfileBoxContainer from "../../components/Common/ProfileBoxContainer";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileImage from "../../components/Common/ProfileImage";

const db = firebase.firestore();
const screenWidth = Dimensions.get("window").width;

export default function ProfileScreen({ navigation }) {
  const isDark = useSelector((state) => state.themeReducer);
  const user = useSelector((state) => state.userReducer);
  const [profileData, setProfileData] = useState([]);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const { main, borderColor, primary } = getThemeColors(isDark);
  const { uid } = user;
  const { username, name, bio } = userData;

  const getDataFromFireStore = async () => {
    await db
      .collection("posts")
      .where("uid", "==", uid)
      // .orderBy("timestamp")
      .onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setProfileData([...data]);
      });

    await db
      .collection("users")
      .doc(uid)
      .onSnapshot((doc) => {
        setUserData(doc.data());
      });
  };

  useEffect(() => {
    getDataFromFireStore();
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
      backgroundColor: "black",
    },
    separator: {
      marginTop: 2,
    },
    oddColumn: {
      marginRight: 0,
    },
    evenColumn: {
      marginLeft: 1,
      marginRight: 1,
    },
    image: {
      flex: 1,
      height: 150,
      width: "100%",
    },
    tabsContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginBottom: 5,
    },
    gridIcon: {
      flexDirection: "row",
      justifyContent: "center",
      borderBottomWidth: 2,
      borderBottomColor: primary,
      flex: 1,
      paddingVertical: 10,
    },
    accountIcon: {
      flexDirection: "row",
      justifyContent: "center",
      flex: 1,
      paddingVertical: 10,
    },
    profileData: {
      flexDirection: "row",
    },
  });

  const getGridStyle = (index) => {
    if (profileData.length <= 2 && index % 2 === 0) {
      return styles.oddColumn;
    }

    if (profileData.lenght > 2 && index % 3 === 0) {
      return styles.oddColumn;
    }

    return styles.evenColumn;
  };

  return (
    <Screen style={styles.screen}>
      <ProfileHeader username={username} colors={getThemeColors(isDark)} />
      <View style={styles.profileData}>
        <ProfileImage />
        <ProfileBoxContainer colors={getThemeColors(isDark)} />
      </View>
      <ProfileBio colors={getThemeColors(isDark)} name={name} bio={bio} />
      <TabsContainer styles={styles} primary={primary} />
      <ScrollView>
        {profileData.length ? (
          <PostsList
            profileData={profileData}
            styles={styles}
            getGridStyle={getGridStyle}
          />
        ) : (
          <ActivityIndicator />
        )}
      </ScrollView>
    </Screen>
  );
}

const TabsContainer = ({ styles, primary }) => {
  return (
    <View style={styles.tabsContainer}>
      <View style={styles.gridIcon}>
        <MaterialCommunityIcons name="grid" size={24} color={primary} />
      </View>
      <View style={styles.accountIcon}>
        <MaterialCommunityIcons
          name="account-box-outline"
          size={30}
          color={primary}
        />
      </View>
    </View>
  );
};

const PostsList = ({ profileData, styles, getGridStyle }) => {
  return (
    <FlatList
      data={profileData}
      keyExtractor={(item) => item.downloadUrl}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      numColumns={3}
      renderItem={({ item, index }) => {
        const { downloadUrl } = item;
        return (
          <TouchableOpacity>
            <View style={[getGridStyle(index), styles.imageContainer]}>
              <Image source={{ uri: downloadUrl }} style={styles.image} />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
