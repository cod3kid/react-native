import React, { useState, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { View, Text, Dimensions } from "react-native";

import SearchBar from "../../components/SearchBar";

const screenHeight = Dimensions.get("window").height;

export default function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const mapRef = useRef(null);

  return (
    <>
      <SearchBar />
      <MapView
        ref={mapRef}
        style={{ height: screenHeight }}
        loadingEnabled={true}
        region={region}
        onRegionChange={(region) => setRegion(region)}
      >
        <Marker coordinate={{ latitude: 37.78, longitude: -122.43 }} />
      </MapView>
    </>
  );
}
