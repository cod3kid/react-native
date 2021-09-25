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
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AuthContext from "../../auth/context";
import authStorage from "../../auth/storage";
import Screen from "../../components/Common/Screen";
import AccountsListItem from "../../components/Account/AccountsListItem";

export default function AccountScreen() {
  const { setUser } = useContext(AuthContext);

  const settingsList = [
    {
      name: "COVID-19 Safety Centre",
      icon: "shield",
    },
    {
      name: "Your Favourites",
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
      name: "Send a Gift",
      icon: "gift",
    },
    {
      name: "Business Preferences",
      icon: "bag-checked",
    },
    {
      name: "Help",
      icon: "lifebuoy",
    },
    {
      name: "Promotions",
      icon: "tag-text",
    },
    {
      name: "Eat Pass",
      icon: "ticket-confirmation",
    },
    {
      name: "Deliver with Uber",
      icon: "basket",
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
    <Screen>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            padding: 16,
          }}
        >
          <MaterialCommunityIcons
            name="account-circle"
            size={40}
            color="grey"
          />
          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={{ fontWeight: "600" }}>Muhamed Sufail</Text>
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
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    marginLeft: 60,
  },
});
