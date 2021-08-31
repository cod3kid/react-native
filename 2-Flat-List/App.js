import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const languages = [
    { name: "Spanish", imagePath: "./app/assests/spain.jpg" },
    { name: "French", imagePath: "./app/assests/france.jpg" },
    { name: "German", imagePath: "./app/assests/germany.jpg" },
  ];

  return (
    <View style={styles.container}>
      <Text>Language Learning App List</Text>
      <FlatList
        data={languages}
        keyExtractor={languages.name}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
