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

const YELP_API_KEY =
  "hpXiC3Y3_1RuP-9R1BJICToII6bQ7Jl3ZT__A5Jgg0GqTgNoqkBKlt-hTW1WyD9TSdjgPwFwJc2ZVDJWwZdnIYI2JNcgzP26P3NRRbcIROV-HsqB37tPMGsuxR1MYXYx";

export default function HomeScreen({ navigation }) {
  const cityState = useSelector((state) => state.cityReducer);
  const [restaurantData, setRestaurantData] = useState([]);
  const [activeTab, setActiveTab] = useState("Delivery");
  const [isLoading, setIsLoading] = useState(false);

  const navigateToMaps = () => {
    navigation.navigate("Map");
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
  }, [cityState]);

  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.safeAreaStyle]}>
      <View style={styles.headerTabsContainer}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <LocationPicker navigateToMaps={navigateToMaps} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {isLoading ? (
          <View style={{ marginTop: "50%" }}>
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
});
