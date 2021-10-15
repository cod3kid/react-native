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
export default function Post({ post, colors }) {
  const {
    likeLightActive,
    likeLightInactive,
    commentLight,
    shareLight,
    bookmarkLight,
  } = otherIcons;
  const { primary } = colors;

  const styles = StyleSheet.create({
    postContainer: {
      marginBottom: 6,
    },
    postHeaderContainer: {
      paddingVertical: 9,
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
      height: 33,
      width: 33,
      borderRadius: 20,
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
      color: primary,
    },
    media: {
      height: 350,
      width: "100%",
    },
    captionUsername: {
      fontWeight: "bold",
      paddingRight: 5,
      color: primary,
    },
    actionMain: {
      flexDirection: "row",
    },
    bold: {
      fontWeight: "bold",
      paddingHorizontal: 10,
      color: primary,
    },
    actionIconStyle: {
      marginRight: 10,
    },
    captionText: {
      color: primary,
    },
  });

  return (
    <View style={styles.postContainer}>
      <PostHeader post={post} styles={styles} primary={primary} />
      <MediaContainer imageUrl={post.imageUrl} styles={styles} />
      <ActionIconsContainer styles={styles} primary={primary} />
      <LikesContainer styles={styles} />
      <CaptionContainer post={post} styles={styles} />
    </View>
  );
}

const PostHeader = ({ post, styles, primary }) => {
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
      <MaterialCommunityIcons name="dots-vertical" size={20} color={primary} />
    </View>
  );
};
const MediaContainer = ({ imageUrl, styles }) => {
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
const LikesContainer = ({ styles }) => {
  return (
    <View style={styles.actionMain}>
      <Text style={styles.bold}>132 likes</Text>
    </View>
  );
};

const CaptionContainer = ({ post, styles }) => {
  const { user, caption } = post;
  return (
    <View style={styles.captionContainerStyle}>
      <Text>
        <Text style={styles.captionUsername}>{user} </Text>{" "}
        <Text style={styles.captionText}>{caption}</Text>
      </Text>
    </View>
  );
};
const ActionIcon = ({ children, styles }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.actionIconStyle}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

const ActionIconsContainer = ({ styles, primary }) => {
  return (
    <View style={styles.actionContainerStyle}>
      <View style={styles.actionMain}>
        <ActionIcon styles={styles}>
          <Ionicons name="ios-heart-outline" size={28} color={primary} />
        </ActionIcon>
        <ActionIcon styles={styles}>
          <Ionicons name="chatbubble-outline" size={26} color={primary} />
        </ActionIcon>
        <ActionIcon styles={styles}>
          <Ionicons name="ios-paper-plane-outline" size={26} color={primary} />
        </ActionIcon>
      </View>
      <ActionIcon styles={styles}>
        <Ionicons name="ios-bookmark-outline" size={26} color={primary} />
      </ActionIcon>
    </View>
  );
};
