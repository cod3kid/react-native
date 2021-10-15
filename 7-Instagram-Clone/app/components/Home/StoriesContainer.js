import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { stories } from "../../utils";

export default function StoriesContainer({ navigation }) {
  return (
    <View>
      <ScrollView horizontal showHorizontalScrollIndicator={false}>
        <View style={styles.storyContainer}>
          <TouchableWithoutFeedback>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/avatar.png")}
                style={{ height: 75, width: 75 }}
              />
              <Text style={{ fontSize: 13 }}>Your Story</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {stories.map((user, index) => (
          <View key={index} style={styles.storyContainer}>
            <TouchableOpacity onPress={() => navigation.push("StoryScreen")}>
              <ImageBackground
                style={styles.storyBackground}
                source={require("../../assets/images/story-border.png")}
              >
                <Image source={{ uri: user.image }} style={styles.story} />
              </ImageBackground>
            </TouchableOpacity>
            <Text style={styles.text}>
              {console.log(user.user)}
              {user.user.length > 11
                ? user.user.slice(0, 10).toLowerCase() + "..."
                : user.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingVertical: 6,
  },
  storyBackground: {
    width: 75,
    height: 75,
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  story: {
    width: 68,
    height: 68,
    borderRadius: 35,
    borderWidth: 3,
  },
  text: {
    color: "black",
    fontSize: 13,
  },
});
