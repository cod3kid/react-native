import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { useRoute, useNavigation } from "@react-navigation/core";

export default function RestaurantMoreScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    name,
    formattedCategories,
    price,
    rating,
    reviews,
    coordinates,
    location,
    phone,
    url,
    displayPhone,
  } = route.params;
  const { longitude, latitude } = coordinates;
  const [region, setRegion] = useState({
    latitude,
    longitude,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  const description = `${formattedCategories.join(" • ")} ${
    price ? " • " + price : ""
  }`;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 30,
          position: "absolute",
          top: 20,
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
      <MapView
        style={{ height: "35%" }}
        loadingEnabled={true}
        region={region}
        onRegionChange={(region) => setRegion(region)}
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />
      </MapView>

      <View style={{ padding: 10, paddingLeft: 20, backgroundColor: "white" }}>
        <Text style={{ color: "black", fontSize: 24 }}>{name}</Text>
      </View>
      <View
        style={{
          paddingTop: 0,
          paddingBottom: 10,
          paddingHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <Text style={{ color: "#8A8A8A", fontSize: 16 }}>{description}</Text>
      </View>
      <View style={{ height: 1, backgroundColor: "#E4E4E4" }} />
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="map-marker" size={30} color="black" />
        <Text style={{ marginHorizontal: 16, fontSize: 16 }}>
          {location.display_address}
        </Text>
      </View>
      <View style={{ height: 1, backgroundColor: "#E4E4E4" }} />

      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="star" size={30} color="black" />
        <Text style={{ marginHorizontal: 16, fontSize: 16 }}>
          {rating} • ({reviews}+)
        </Text>
      </View>
      <View style={{ height: 1, backgroundColor: "#E4E4E4" }} />

      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="phone" size={30} color="black" />
        <Text style={{ marginHorizontal: 16, fontSize: 16 }}>
          {displayPhone}
        </Text>
      </View>
      <View style={{ height: 1, backgroundColor: "#E4E4E4" }} />
    </View>
  );
}
