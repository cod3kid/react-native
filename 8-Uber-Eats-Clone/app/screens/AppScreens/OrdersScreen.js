import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import firebase from "../../../firebase";
import AuthContext from "../../auth/context";

export default function OrdersScreen() {
  const { user } = useContext(AuthContext);
  const [ordersList, setOrdersList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getOrders = async () => {
    let tempOrdersList = [];
    const db = firebase.firestore();
    const snapshot = await db
      .collection("orders")
      .where("userId", "==", user)
      .get();

    setLoading(false);

    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }

    snapshot.forEach((doc) => {
      tempOrdersList.push(doc.data());
    });

    setOrdersList(tempOrdersList);
  };

  useEffect(() => {
    setLoading(true);
    getOrders();
  }, []);

  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.parent]}>
      <View style={{ padding: 18, backgroundColor: "white", elevation: 3 }}>
        <Text style={{ fontSize: 18, alignSelf: "center", fontWeight: "700" }}>
          Your orders
        </Text>
      </View>

      {ordersList && ordersList.length ? (
        loading ? (
          <View style={{ marginTop: "50%" }}>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : (
          <View style={{ backgroundColor: "white", flex: 1 }}>
            <Text style={{ marginLeft: 10, paddingVertical: 16, fontSize: 18 }}>
              Past orders
            </Text>
            <ScrollView>
              <FlatList
                data={ordersList}
                keyExtractor={(item, index) =>
                  `${index} ${item.restaurantName}`
                }
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#B7C6D9",
                      marginVertical: 6,
                      marginLeft: 90,
                    }}
                  />
                )}
                renderItem={({ item }) => {
                  const {
                    restaurantName,
                    restaurantImageUrl,
                    items,
                    total,
                    createdAt,
                  } = item;
                  const totalItems = items.length;
                  return (
                    <View style={{ flexDirection: "row", paddingLeft: 10 }}>
                      <Image
                        source={{ uri: restaurantImageUrl }}
                        style={{ height: 70, width: 70 }}
                      />
                      <View
                        style={{
                          flex: 1,
                          marginLeft: 10,
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ fontWeight: "700" }}>
                          {restaurantName}
                        </Text>
                        <Text style={{ color: "#A8A8A8" }}>
                          {totalItems} {totalItems > 1 ? "items" : "item"} • $
                          {total}
                        </Text>
                        <Text style={{ color: "#A8A8A8" }}>
                          {moment.unix(createdAt.seconds).format("MMM YY")} •
                          Completed
                        </Text>
                      </View>
                      <View
                        style={{
                          alignSelf: "center",
                          marginRight: 10,
                          paddingVertical: 5,
                          paddingHorizontal: 20,
                          height: 30,
                          backgroundColor: "#eee",
                          borderRadius: 30,
                        }}
                      >
                        <Text>Menu</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </ScrollView>
          </View>
        )
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="bookmark-minus"
            size={70}
            color="#ADB3BC"
          />
          <Text style={{ padding: 20, fontSize: 18 }}>No orders yet</Text>
          <Text
            style={{
              paddingHorizontal: 30,
              paddingBottom: 10,
              textAlign: "center",
              color: "#A4A4A4",
            }}
          >
            When you place your first order, it will appear here
          </Text>
          <View
            style={{
              backgroundColor: "black",
              width: 100,
              height: 40,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Find food</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  parent: {
    flex: 1,
  },
});
