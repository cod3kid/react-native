import * as SecureStore from "expo-secure-store";

const key = "userData";

const storeUserData = async (userData) => {
  try {
    await SecureStore.setItemAsync(key, userData);
  } catch (error) {
    console.log("Error storing the user data", error);
  }
};

const getUserData = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the user data", error);
  }
};

const storeUserName = async (name) => {
  try {
    await SecureStore.setItemAsync("name", name);
  } catch (error) {
    console.log("Error storing the user data", error);
  }
};

const getUserName = async () => {
  try {
    return await SecureStore.getItemAsync("name");
  } catch (error) {
    console.log("Error getting the user data", error);
  }
};

const removeUserData = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the user data", error);
  }
};

export default {
  getUserData,
  storeUserData,
  removeUserData,
  getUserName,
  storeUserName,
};
