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
import { languages } from "../../utils/index";
import { storeAppLanguage } from "../../utils/storage";
import { TextInput } from "react-native";

export default function LanguageModal({ isModalVisible, setModalVisible }) {
  const changeCurrentAppLanguage = (id) => {
    i18n.locale = id;
    storeAppLanguage(id);
    setModalVisible(false);
  };

  return (
    <Overlay
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      overlayStyle={{ flex: 1, width: "90%", margin: 20, padding: 0 }}
    >
      <Text style={{ fontSize: 16, padding: 15 }}>
        {t("selectYourLanguage").toUpperCase()}
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 15,
          paddingHorizontal: 10,
          borderTopWidth: 1,
          borderTopColor: "grey",
          borderBottomWidth: 1,
          borderBottomColor: "grey",
        }}
      >
        <MaterialCommunityIcons name="magnify" size={24} color="grey" />
        <TextInput
          style={{ flex: 1, paddingLeft: 5, fontSize: 16 }}
          placeholder={t("search")}
        />
      </View>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.language.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => {
          const { language, native, id } = item;
          return (
            <TouchableOpacity onPress={() => changeCurrentAppLanguage(id)}>
              <View style={{ padding: 15 }}>
                <Text style={{ fontSize: 16 }}>{t(language)}</Text>
                {/* {language !== "English" && <Text>{t(language)}</Text>} */}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </Overlay>
  );
}

const styles = StyleSheet.create({});
