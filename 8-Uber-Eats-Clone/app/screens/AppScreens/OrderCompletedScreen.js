import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";

import MenuItems from "../../components/Restaurant/MenuItems";
import Screen from "../../components/Common/Screen";
import firebase from "../../../firebase";

export default function OrderCompletedScreen() {
  const [lastOrder, setLastOrder] = useState({});

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={styles}>
        <LottieView
          style={styles.checkmark}
          source={require("../../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={styles.orderSuccess}>
          Your order at {restaurantName} has been placed for ${totalUSD}
        </Text>
        <ScrollView>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          <LottieView
            style={styles.cooking}
            source={require("../../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  parent: {
    margin: 15,
    alignItems: "center",
    height: "100%",
  },
  checkmark: {
    height: 100,
    alignSelf: "center",
    marginBottom: 30,
  },
  orderSuccess: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cooking: {
    height: 200,
    alignSelf: "center",
  },
});
