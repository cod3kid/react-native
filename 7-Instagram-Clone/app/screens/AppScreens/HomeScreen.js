import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { darkColors, lightColors } from "../../utils/colors";
import { useSelector } from "react-redux";

import Screen from "../../components/Common/Screen";
import HomeHeader from "../../components/Home/Header";
import StoriesContainer from "../../components/Home/StoriesContainer";
import { posts } from "../../utils";
import Post from "../../components/Common/Post";
export default function HomeScreen({ navigation }) {
  const user = useSelector((state) => state.userReducer);
  const isDark = useSelector((state) => state.themeReducer);
  const main = isDark ? darkColors.main : lightColors.main;

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: main,
    },
  });

  return (
    <Screen style={styles.screen}>
      <HomeHeader
        onPressAddIcon={() => navigation.navigate("AddPost", { user })}
        onPressChatIcon={() => null}
      />
      <StoriesContainer navigation={navigation} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.user.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => {
          return <Post post={item} key={index} />;
        }}
      />
    </Screen>
  );
}
