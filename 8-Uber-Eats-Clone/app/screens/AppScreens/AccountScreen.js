import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../../components/Common/Screen";
import AccountsListItem from "../../components/Account/AccountsListItem";
import AuthContext from "../../auth/context";
import authStorage from "../../auth/storage";
import { settingsList } from "../../utils";

export default function AccountScreen() {
  const { setUser } = useContext(AuthContext);
  const fullname = authStorage.getUserName("name");
  const settingsListCopy = [
    ...settingsList,
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
      <View style={styles.parent}>
        <View style={styles.profileContainer}>
          <MaterialCommunityIcons
            name="account-circle"
            size={40}
            color="grey"
          />
          <View style={styles.userNameContainer}>
            <Text style={styles.userText}>User</Text>
          </View>
        </View>
        <FlatList
          data={settingsListCopy}
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
  parent: {
    backgroundColor: "white",
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    padding: 16,
  },
  userNameContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  userText: {
    fontWeight: "600",
  },
});
