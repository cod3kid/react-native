import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import i18n from "i18n-js";
import { Overlay } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import t from "../../utils/translations";
import countryCodes from "../../utils/countrycodes";
import { storeAppLanguage } from "../../utils/storage";
import { TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function PhoneCodesModal({ isModalVisible, setModalVisible }) {
  const changeCurrentAppLanguage = (id) => {
    i18n.locale = id;
    storeAppLanguage(id);
    setModalVisible(false);
  };

  return (
    <Overlay
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      overlayStyle={styles.overlayStyle}
    >
      <Text style={styles.title}>{t("selectYourLanguage").toUpperCase()}</Text>
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="grey" />
        <TextInput style={styles.searchPlaceholder} placeholder={t("search")} />
      </View>
      <ScrollView>
        <FlatList
          data={countryCodes}
          keyExtractor={(item) => item.name.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => {
            const { name, dial_code } = item;
            return (
              <TouchableOpacity onPress={() => changeCurrentAppLanguage(id)}>
                <View style={styles.listItem}>
                  <Text style={styles.listText}>
                    {name} {dial_code}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlayStyle: {
    flex: 1,
    width: "90%",
    margin: 20,
    padding: 0,
  },
  title: {
    fontSize: 16,
    padding: 15,
  },
  searchContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "grey",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  searchPlaceholder: {
    flex: 1,
    paddingLeft: 5,
    fontSize: 16,
  },
  listItem: {
    padding: 15,
  },
  listText: {
    fontSize: 16,
  },
});
