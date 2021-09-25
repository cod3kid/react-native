import React, { useContext } from "react";
import { View, Text } from "react-native";
// import { Divider } from "react-native-elements";
import Screen from "../../components/Common/Screen";
import RestaurantAbout from "../../components/Restaurant/RestaurantAbout";
import MenuItems from "../../components/Restaurant/MenuItems";
import ViewCart from "../../components/Restaurant/ViewCart";
import { foods } from "../../utils/index";

export default function RestaurantScreen({ route, navigation }) {
  console.log("food", foods);
  return (
    <Screen>
      {console.log("muixx", route.params.image)}
      <RestaurantAbout route={route} />
      <MenuItems
        restaurantName={route.params.name}
        restaurantImageUrl={route.params.image}
        foods={foods}
      />
      <ViewCart navigation={navigation} />
    </Screen>
  );
}
