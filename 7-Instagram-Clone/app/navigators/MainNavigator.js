import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import firebase from "../config/firebase";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const auth = firebase.auth();

export default function MainNavigator() {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const user = {
          name: authUser.displayName,
          uid: authUser.uid,
          email: authUser.email,
        };
        dispatch({ type: "SET_USER_DATA", payload: user });
      } else {
        dispatch({ type: "REMOVE_USER_DATA" });
      }
    });
    return () => {
      listener();
    };
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
