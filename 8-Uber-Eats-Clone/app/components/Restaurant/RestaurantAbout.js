import React from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function About({ route }) {
  const navigation = useNavigation();
  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories.map((cat) => cat.title);

  const description = `${formattedCategories.slice(0, 1)} ${
    price ? " • " + price : ""
  }`;

  return (
    <View>
      <TouchableOpacity
        style={{
          padding: 8,
          borderRadius: 30,
          position: "absolute",
          top: 10,
          left: 16,
          zIndex: 100,
          backgroundColor: "white",
        }}
        onPress={() => navigation.goBack()}
      >
        <View>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <RestaurantImage image={image} />
      <View
        style={{
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: "white",
          marginTop: -30,
        }}
      >
        <RestaurantName name={name} />
        <RestaurantDescription
          navigation={navigation}
          description={description}
          formattedCategories={formattedCategories}
          route={route}
        />
      </View>
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const RestaurantDescription = ({
  navigation,
  description,
  formattedCategories,
  route,
}) => {
  const {
    name,
    price,
    rating,
    reviews,
    coordinates,
    location,
    phone,
    url,
    displayPhone,
  } = route.params;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("RestaurantMore", {
          formattedCategories,
          price,
          rating,
          reviews,
          coordinates,
          location,
          phone,
          url,
          name,
          displayPhone,
        })
      }
    >
      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons name="star" size={18} color="black" />
          <Text>
            {" "}
            {rating} ({reviews}+ ratings) • {description} •{" "}
          </Text>
          <MaterialCommunityIcons
            name="ticket-confirmation"
            size={18}
            color="green"
          />
        </View>
        <Text style={{ color: "#A8A8A8" }}>Open 24 Hours</Text>
        <Text style={{ color: "#A8A8A8" }}>
          Tap for hours, address, and more
        </Text>
        <View
          style={{
            alignSelf: "flex-end",
            position: "absolute",
            top: "40%",
            paddingRight: 10,
          }}
        >
          <MaterialCommunityIcons
            name="chevron-right"
            size={32}
            color="black"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
