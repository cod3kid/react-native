import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";

import Categories from "../../components/Home/Categories";
import HeaderTabs from "../../components/Home/HeaderTabs";
import RestaurantItems from "../../components/Home/RestaurantItems";
import LocationPicker from "../../components/Home/LocationPicker";
import config from "../../config/env";

const YELP_API_KEY = config.YELP_API_KEY;

export default function HomeScreen({ navigation }) {
  const cityState = useSelector((state) => state.cityReducer);
  const [restaurantData, setRestaurantData] = useState([]);
  const [activeTab, setActiveTab] = useState("Delivery");
  const [isLoading, setIsLoading] = useState(false);

  const navigateToMaps = () => {
    navigation.navigate("Search");
  };

  const getRestaurants = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${cityState.name}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    setIsLoading(true);

    axios
      .get(yelpUrl, apiOptions)
      .then((res) => {
        setRestaurantData(
          res.data.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        );

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, [cityState, activeTab]);

  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.safeAreaStyle]}>
      <View style={styles.headerTabsContainer}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <LocationPicker navigateToMaps={navigateToMaps} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {isLoading ? (
          <View style={styles.activityContainer}>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : (
          <RestaurantItems
            navigation={navigation}
            restaurants={restaurantData}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  safeAreaStyle: {
    backgroundColor: "#eee",
    flex: 1,
  },
  headerTabsContainer: {
    backgroundColor: "white",
    padding: 15,
  },
  activityContainer: {
    marginTop: "50%",
  },
});
