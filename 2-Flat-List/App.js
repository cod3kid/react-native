import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Duolingo from "./app/assets/duolingo.svg";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Feather-Bold": require("./app/assets/fonts/feather_bold.ttf"),
  });

  const languages = [
    { name: "English", imagePath: require("./app/assets/great-britain.png") },
    { name: "Spanish", imagePath: require("./app/assets/spain.png") },
    { name: "Italian", imagePath: require("./app/assets/italy.png") },
    { name: "French", imagePath: require("./app/assets/france.png") },
    { name: "German", imagePath: require("./app/assets/germany.png") },
    { name: "Japanese", imagePath: require("./app/assets/japan.png") },
    { name: "Hindi", imagePath: require("./app/assets/india.png") },
    { name: "Russian", imagePath: require("./app/assets/russia.png") },
    { name: "Hebrew", imagePath: require("./app/assets/israel.png") },
  ];

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6ACD08"
          translucent={false}
        />
        <View style={styles.header}>
          <Duolingo width={40} height={40} />
          <Text style={styles.headerText}>duolingo</Text>
        </View>
        <FlatList
          data={languages}
          keyExtractor={(language) => language.name.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => {
            return (
              <View style={styles.list}>
                <Image
                  source={item.imagePath}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    backgroundColor: "#6ACD08",
    justifyContent: "center",
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  headerText: {
    marginLeft: 20,
    fontSize: 24,
    color: "white",
    fontFamily: "Feather-Bold",
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
  separator: {
    height: 1,
    marginVertical: 10,
    marginHorizontal: 12,
    backgroundColor: "#B7C6D9",
  },
});
