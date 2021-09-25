import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import { categoryItems } from "../../utils";

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoryItems.map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={styles.textStyle}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginRight: 30,
  },
  textStyle: {
    fontSize: 13,
    //900 doesn't work on android, idk
    fontWeight: "900",
  },
});
