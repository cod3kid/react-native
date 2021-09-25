import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StripeProvider } from "@stripe/stripe-react-native";
import LottieView from "lottie-react-native";

import Screen from "../../components/Common/Screen";
import { fetchPublishableKey } from "../../utils";
import firebase from "../../../firebase";
import PaymentInput from "../../components/Restaurant/PaymentInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PaymentScreen({ route, navigation }) {
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    async function initialize() {
      const publishableKey = await fetchPublishableKey();
      if (publishableKey) {
        await initStripe({
          publishableKey,
          merchantIdentifier: "merchant.com.stripe.react.native",
          urlScheme: "stripe-example",
          setUrlSchemeOnAndroid: true,
        });
        setLoading(false);
      }
    }
    initialize();
  }, []);

  const addOrderToFireBase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add(route.params.firebaseOptions)
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("OrderCompleted");
        }, 2500);
      });
  };

  return (
    <Screen>
      <View
        style={{
          backgroundColor: "black",
          padding: 16,
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 18, marginLeft: 10 }}>
          Add Card
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          padding: 15,
        }}
      >
        <View>
          <Text style={{ fontSize: 16 }}>Card Number</Text>
          <PaymentInput
            isCard
            value={cardNumber}
            onChangeText={(text) =>
              text.split(" ").join("").length % 4 == 0 && text.length != 0
                ? setCardNumber(text + " ")
                : setCardNumber(text)
            }
            maxLength={19}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={{ fontSize: 16 }}>Exp. Date</Text>
            <PaymentInput
              value={expiry}
              onChangeText={(text) =>
                text.length == 2 && !text.includes("/")
                  ? setExpiry(text + "/")
                  : setExpiry(text)
              }
              maxLength={5}
              placeholder="MM/YY"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16 }}>CVV</Text>
            <PaymentInput
              isCvv
              value={cvv}
              onChangeText={(text) => setCvv(text)}
              maxLength={3}
              placeholder="123"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => addOrderToFireBase()}
          style={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "black",
            paddingVertical: 15,
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 16 }}>Pay</Text>
          </View>
        </TouchableOpacity>
      </View>
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </Screen>
  );
}
