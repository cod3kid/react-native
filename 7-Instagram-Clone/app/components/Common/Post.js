import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

import firebase from "../../config/firebase";
import { otherIcons } from "../../utils/index";

const db = firebase.firestore();
export default function Post({ post }) {
  const {
    likeLightActive,
    likeLightInactive,
    commentLight,
    shareLight,
    bookmarkLight,
  } = otherIcons;
  //   const handleLike = () => {
  //     const currentLikeStatus = !post.likes_by_users.includes(
  //       firebase.auth().currentUser.email
  //     );
  //     db.collection("users")
  //       .doc(post.owner_email)
  //       .collection("posts")
  //       .doc(post.id)
  //       .update({
  //         likes_by_users: currentLikeStatus
  //           ? firebase.firestore.FieldValue.arrayUnion(
  //               firebase.auth().currentUser.email
  //             )
  //           : firebase.firestore.FieldValue.arrayRemove(
  //               firebase.auth().currentUser.email
  //             ),
  //       })
  //       .then(() => {
  //         console.log("doc updated");
  //       })
  //       .catch((err) => {
  //         console.error("Error updating doc: ", err);
  //       });
  //   };
  //* I tried for getting the time but it was in nanosecs and secs. Forgive me
  //   const getTimestamp = () => {
  //     db.collection("users")
  //       .doc(post.owner_email)
  //       .collection("posts")
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           setTime({ id: doc.id, ...doc.data() });
  //           console.log({ id: doc.id, ...doc.data() });
  //         });
  //       })
  //       .then(() => {
  //         Alert.alert(
  //           "Time Sent",
  //           "Nanoseconds => ",
  //           time.createdAt.nanoseconds,
  //           "Seconds => ",
  //           time.createdAt.seconds
  //         );
  //       });
  //   };
  return (
    <View style={styles.postContainer}>
      <PostHeader post={post} />
      <MediaContainer imageUrl={post.imageUrl} />
      <ActionIconsContainer />
      <LikesContainer />
      <CaptionContainer post={post} />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 6,
  },
  postHeaderContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  postHeaderProfile: {
    flexDirection: "row",
    alignItems: "center",
  },
  postHeaderDisplayPic: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  actionContainerStyle: {
    padding: 10,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  captionContainerStyle: {
    marginHorizontal: 10,
    flexDirection: "row",
  },
  postHeaderUsername: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  media: {
    height: 350,
    width: "100%",
  },
  captionUsername: {
    fontWeight: "bold",
    paddingRight: 5,
  },
  actionMain: {
    flexDirection: "row",
  },
  bold: {
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  actionIconStyle: {
    marginRight: 10,
  },
});

const PostHeader = ({ post }) => {
  const { user } = post;
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.postHeaderProfile}>
        <Image
          source={{ uri: post.profile_picture }}
          style={styles.postHeaderDisplayPic}
        />
        <Text style={styles.postHeaderUsername}>{user}</Text>
      </View>
      <MaterialCommunityIcons name="dots-vertical" size={20} color="black" />
    </View>
  );
};
const MediaContainer = ({ imageUrl }) => {
  return (
    <View>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.media}
      />
    </View>
  );
};
const LikesContainer = () => {
  return (
    <View style={styles.actionMain}>
      <Text style={styles.bold}>132 likes</Text>
    </View>
  );
};

const CaptionContainer = ({ post }) => {
  const { user, caption } = post;
  return (
    <View style={styles.captionContainerStyle}>
      <Text>
        <Text style={styles.captionUsername}>{user} </Text>{" "}
        <Text>{caption}</Text>
      </Text>
    </View>
  );
};
const ActionIcon = ({ children }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.actionIconStyle}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

const ActionIconsContainer = () => {
  return (
    <View style={styles.actionContainerStyle}>
      <View style={styles.actionMain}>
        <ActionIcon>
          <Ionicons name="ios-heart-outline" size={28} color="black" />
        </ActionIcon>
        <ActionIcon>
          <Ionicons name="chatbubble-outline" size={26} color="black" />
        </ActionIcon>
        <ActionIcon>
          <Ionicons name="ios-paper-plane-outline" size={26} color="black" />
        </ActionIcon>
      </View>
      <ActionIcon>
        <Ionicons name="ios-bookmark-outline" size={26} color="black" />
      </ActionIcon>
    </View>
  );
};
