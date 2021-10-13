import React, { useState } from "react";
import i18n from "i18n-js";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import configureStore from "./app/redux/store";
import AuthNavigator from "./app/navigators/AuthNavigator";
import AppNavigator from "./app/navigators/AppNavigator";
import { getAppLanguage, getUserData } from "./app/utils/storage";
import AuthContext from "./app/helpers/context";

const store = configureStore();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState();

  const getOrSetCurrentLanguage = async () => {
    const lang = await getAppLanguage();
    if (!lang) {
      return (i18n.locale = "en");
    }
    return (i18n.locale = lang);
  };

  const restoreUser = async () => {
    const user = await getUserData();
    if (user) {
      setUser(user);
      dispatch({
        type: "SET_USER_DATA",
        payload: {
          ...user,
        },
      });
    }
  };

  const preloadingRituals = () => {
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
    <Provider store={store}>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
}
