import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const languages = [
    { name: "Spanish", imagePath: require("./app/assets/spain.png") },
    { name: "French", imagePath: require("./app/assets/france.png") },
    { name: "German", imagePath: require("./app/assets/germany.png") },
  ];

  return (
    <View style={styles.container}>
      <Text>Language Learning App</Text>
      <FlatList
        data={languages}
        keyExtractor={(language) => language.name.toString()}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});
