import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import AuthContext from "../../auth/context";
import authStorage from "../../auth/storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AccountsListItem from "../../components/AccountsListItem";

export default function AccountScreen() {
  const { setUser } = useContext(AuthContext);

  const settingsList = [
    {
      name: "COVID-19 Safety Centre",
      icon: "shield",
    },
    {
      name: "Your favourites",
      icon: "heart",
    },
    {
      name: "Restaurant Rewards",
      icon: "star-circle",
    },
    {
      name: "Wallet",
      icon: "credit-card",
    },
    {
      name: "Business preferences",
      icon: "bag-checked",
    },
    {
      name: "Help",
      icon: "lifebuoy",
    },
    {
      name: "Logout",
      icon: "logout",
      onPress: () => {
        setUser(null);
        authStorage.removeUserData();
      },
    },
  ];
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={{ flexDirection: "row", padding: 16 }}>
        <MaterialCommunityIcons name="account-circle" size={40} color="grey" />
        <View style={{ justifyContent: "center", marginLeft: 10 }}>
          <Text style={{ fontWeight: "600" }}>Muhamed Sufail</Text>
          <Text style={{ color: "#06c167" }}>View Account</Text>
        </View>
      </View>
      <FlatList
        data={settingsList}
        keyExtractor={(item) => item.name.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => {
          return (
            <AccountsListItem
              name={item.name}
              icon={item.icon}
              onPress={item.onPress}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  separator: {
    height: 1,
    marginVertical: 10,
    marginLeft: 60,
    backgroundColor: "#B7C6D9",
  },
});
