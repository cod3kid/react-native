import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import i18n from "i18n-js";

import { getAppLanguage, storeAppLanguage } from "./app/utils/storage";
import AuthNavigator from "./app/navigators/AuthNavigator";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const getOrSetCurrentLanguage = async () => {
    const lang = await getAppLanguage();
    if (!lang) {
      return (i18n.locale = "en");
    }
    return (i18n.locale = lang);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={getOrSetCurrentLanguage}
        onError={() => {
          console.log("Error Occured");
        }}
        onFinish={() => setIsReady(true)}
      />
    );

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
