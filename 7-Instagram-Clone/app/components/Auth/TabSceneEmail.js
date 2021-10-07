import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import CustomInput from "./CustomInput";
import t from "../../utils/translations";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "./CustomButton";

export default function TabSceneEmail() {
  const [email, setEmail] = useState("");

  return (
    <View>
      <CustomInput
        placeholder={t("email")}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <CustomButton title="Next" />
    </View>
  );
}
