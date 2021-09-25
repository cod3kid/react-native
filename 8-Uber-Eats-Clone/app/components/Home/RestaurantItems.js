import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RestaurantItems({ navigation, restaurants, ...props }) {
  return (
    <>
      {restaurants.map((restaurant, index) => {
        const {
          name,
          image_url,
          price,
          rating,
          review_count,
          categories,
          coordinates,
          location,
          phone,
          url,
          display_phone,
        } = restaurant;
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() =>
              navigation.navigate("Restaurant", {
                name,
                image: image_url,
                price,
                reviews: review_count,
                rating,
                categories,
                coordinates,
                location,
                phone,
                url,
                displayPhone: display_phone,
              })
            }
          >
            <View style={styles.restaurantContainer}>
              <RestaurantImage image={image_url} />
              <RestaurantInfo name={name} rating={restaurant.rating} />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}

const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={styles.imageStyle}
    />
    <TouchableOpacity style={styles.heartIcon}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, rating }) => (
  <View style={styles.restaurantInfoContainer}>
    <View>
      <Text style={styles.restaurantText}>{name}</Text>
      <View style={styles.restaurantDetailsContainer}>
        <MaterialCommunityIcons
          name="ticket-confirmation"
          color="green"
          size={15}
        />
        <Text style={styles.restaurantDetailsText}>
          {" "}
          • Delivery Free • 30-45 min
        </Text>
      </View>
    </View>
    <View style={styles.ratingsContainer}>
      <Text>{rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  restaurantContainer: {
    padding: 15,
    backgroundColor: "white",
  },
  imageStyle: {
    width: "100%",
    height: 150,
  },
  heartIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  restaurantInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  restaurantText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  restaurantDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantDetailsText: {
    fontSize: 13,
    color: "gray",
  },
  ratingsContainer: {
    backgroundColor: "#eee",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
