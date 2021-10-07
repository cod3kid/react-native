import React, { useState } from "react";
import { TabView, SceneMap } from "react-native-tab-view";

import CustomTabBar from "./CustomTabBar";
import TabScenePhone from "./TabScenePhone";
import TabSceneEmail from "./TabSceneEmail";

const renderScene = SceneMap({
  phone: TabScenePhone,
  email: TabSceneEmail,
});

export default function SignUpTabs() {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    { key: "phone", title: "PHONE" },
    { key: "email", title: "EMAIL" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={CustomTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: "100%" }}
    />
  );
}
