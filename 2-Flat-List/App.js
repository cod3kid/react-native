import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const languages = [
    { name: "Spanish", imagePath: "./app/assets/spain.png" },
    { name: "French", imagePath: "./app/assets/france.png" },
    { name: "German", imagePath: "./app/assets/germany.png" },
  ];

  return (
    <View style={styles.container}>
      <Text>Language Learning App List</Text>
      <FlatList
        data={languages}
        keyExtractor={(language) => language.name.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                source={{ uri: item.imagePath }}
                style={{ width: 50, height: 50 }}
              />
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
