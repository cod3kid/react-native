import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import axios from "axios";
import * as Clipboard from "expo-clipboard";

import { fourthLastDigit } from "./app/utils";
import Screen from "./app/components/Screen";
import CustomInput from "./app/components/CustomInput";
import CustomButton from "./app/components/CustomButton";

export default function App() {
  const [firstValue, setFirstValue] = useState("");
  const [lastValue, setLastValue] = useState("");
  const [listCoins, setListCoins] = useState([]);

  const fetchCoin = () => {
    Keyboard.dismiss();
    setListCoins([]);
    fourthLastDigit.forEach(async (el) => {
      await axios
        .get(`https://api1.poocoin.app/tokens?search=${el}${lastValue}`)
        .then((res) => {
          const filteredCoins = res.data.filter((coin) =>
            coin.address.startsWith(firstValue)
          );
          setListCoins((prev) => [...prev, ...filteredCoins]);
        });
    });
  };

  return (
    <Screen>
      <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
        <CustomInput
          placeholder="First Few Characters"
          value={firstValue}
          onChangeText={(text) => setFirstValue(text)}
        />

        <CustomInput
          placeholder="Last Few Characters"
          value={lastValue}
          onChangeText={(text) => setLastValue(text)}
        />

        <CustomButton title="Search" onPress={fetchCoin} />
      </View>

      {listCoins.length > 0 && (
        <FlatList
          data={listCoins}
          keyExtractor={(token) => token.address.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => {
            const { name, symbol, address } = item;

            console.log(address);

            return (
              <View style={styles.listItem}>
                <View style={styles.topRow}>
                  <Text style={styles.nameText}>{name}</Text>
                  <Text style={styles.symbolText}>{symbol}</Text>
                </View>

                <TouchableOpacity onPress={() => Clipboard.setString(address)}>
                  <Text style={styles.addressText}>{address}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  separator: {
    height: 10,
  },
  listItem: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#68BBE3",
    borderRadius: 4,
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  nameText: {
    fontSize: 18,
    color: "#FFF",
  },
  symbolText: {
    fontSize: 16,
    color: "#FFF",
  },
  addressText: {
    fontSize: 13,
    color: "#FFF",
  },
});
