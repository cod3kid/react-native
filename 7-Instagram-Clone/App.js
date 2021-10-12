import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import i18n from "i18n-js";

import { getAppLanguage, getUserData } from "./app/utils/storage";
import AuthNavigator from "./app/navigators/AuthNavigator";
import AppNavigator from "./app/navigators/AppNavigator";

export default function App() {
  const [user, setUser] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const getOrSetCurrentLanguage = async () => {
    const lang = await getAppLanguage();
    if (!lang) {
      return (i18n.locale = "en");
    }
    return (i18n.locale = lang);
  };

  const restoreUser = async () => {
    const user = await getUserData();
    if (user) setUser(user);
  };

  const preloadingRituals = async () => {
    getOrSetCurrentLanguage();
    restoreUser();
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={preloadingRituals}
        onError={() => {
          console.log("Error Occured");
        }}
        onFinish={() => setIsReady(true)}
      />
    );

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
