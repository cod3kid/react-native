import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        margin: 15,
        flexDirection: "row",
        position: "absolute",
        top: 20,
        zIndex: 100,
      }}
    >
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyDoHciDQ0huvuCejI1Js4dwbA3IxeRcbrE" }}
        onPress={(data, details = null) => {
          console.log(data);

          // setCity({
          //   name: data.description.split(",")[0],
          //   location: data.place_id,
          // });
          dispatch({
            type: "CHANGE_CITY_DATA",
            payload: {
              name: data.description.split(",")[0],
              location: data.place_id,
            },
          });
          navigation.navigate("Home");
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#fff",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#fff",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
