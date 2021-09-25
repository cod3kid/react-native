import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Screen from "../../components/Common/Screen";
import { passList } from "../../utils";

export default function PassScreen() {
  return (
    <Screen style={{ backgroundColor: "white", padding: 10 }}>
      <Image
        source={require("../../assets/images/many-foods.png")}
        style={{
          height: 200,
          width: 200,
          position: "absolute",
          top: -120,
          alignSelf: "center",
        }}
      />
      <View style={{ paddingLeft: 10, padding: 40 }}>
        <Text style={{ fontSize: 16, fontWeight: "700" }}>
          $14.99 per month
        </Text>
        <Text style={{ fontSize: 28, fontWeight: "700" }}>Uber Pass</Text>
      </View>

      <FlatList
        data={passList}
        keyExtractor={(item) => item.title.toString()}
        ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
        renderItem={({ item }) => {
          const { title, desc, image } = item;
          return (
            <View style={{ flexDirection: "row" }}>
              <Image source={image} style={{ height: 50, width: 50 }} />
              <View style={{ justifyContent: "center", paddingLeft: 16 }}>
                <Text style={{ fontSize: 16 }}>{title}</Text>
                <Text style={{ color: "#A8A8A8" }}>{desc}</Text>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity>
        <View
          style={{
            paddingVertical: 12,
            width: "100%",
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>
            Try 2 weeks of Uber Pass for free
          </Text>
        </View>
      </TouchableOpacity>
    </Screen>
  );
}
