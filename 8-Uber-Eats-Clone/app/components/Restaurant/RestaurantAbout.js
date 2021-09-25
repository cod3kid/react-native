import React from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).slice(0, 1);

  const description = `${formattedCategories} ${price ? " • " + price : ""}`;

  return (
    <View>
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
          description={description}
          rating={rating}
          reviews={reviews}
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

const RestaurantDescription = ({ description, rating, reviews }) => (
  <TouchableOpacity>
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
      <Text style={{ color: "#A8A8A8" }}>Tap for hours, address, and more</Text>
      <View
        style={{
          alignSelf: "flex-end",
          position: "absolute",
          top: "40%",
          paddingRight: 10,
        }}
      >
        <MaterialCommunityIcons name="chevron-right" size={32} color="black" />
      </View>
    </View>
  </TouchableOpacity>
);
