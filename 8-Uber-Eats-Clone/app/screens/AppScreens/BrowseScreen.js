import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BrowseSearchBar from "../../components/BrowseSearchBar";

const screenWidth = Dimensions.get("window").width;

export default function BrowseScreen() {
  const categories = [
    {
      name: "Fast Food",
      source: require("../../assets/fast-food.jpg"),
    },
    {
      name: "Pizza",
      source: require("../../assets/pizza.jpg"),
    },
    {
      name: "Indian",
      source: require("../../assets/indian.jpg"),
    },
    {
      name: "Desserts",
      source: require("../../assets/desserts.jpg"),
    },
    {
      name: "Mexican",
      source: require("../../assets/mexican.jpg"),
    },
    {
      name: "Ramen",
      source: require("../../assets/ramen.jpg"),
    },
    {
      name: "Italian",
      source: require("../../assets/italian.jpg"),
    },

    {
      name: "Chinese",
      source: require("../../assets/chinese.jpeg"),
    },
  ];
  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.parent]}>
      <ScrollView>
        <View style={styles.searchBarContainer}>
          <BrowseSearchBar />
        </View>
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesText}>Top categories</Text>
        </View>
        <View>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.name.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            numColumns={2}
            renderItem={({ item, index }) => {
              const { name, source } = item;
              return (
                <TouchableOpacity>
                  <View
                    style={[
                      index % 2 == 0 ? styles.oddColumn : styles.evenColumn,
                      styles.imageContainer,
                    ]}
                  >
                    <Text style={styles.text}>{name}</Text>
                    <Image source={source} style={styles.image} />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  parent: {
    backgroundColor: "white",
    flex: 1,
  },
  searchBarContainer: {
    padding: 10,
  },
  categoriesContainer: {
    padding: 10,
  },
  categoriesText: {
    color: "#ADB3BC",
  },
  imageContainer: {
    width: screenWidth / 2 - 10,
    height: 150,
    marginTop: 10,
    backgroundColor: "black",
  },
  oddColumn: {
    marginRight: 7,
    marginLeft: 7,
  },
  evenColumn: {
    marginRight: 7,
  },
  image: {
    flex: 1,
    height: 150,
    width: "100%",
    opacity: 0.5,
  },
  text: {
    alignSelf: "center",
    position: "absolute",
    top: "40%",
    fontSize: 16,
    color: "white",
    zIndex: 100,
  },
});
