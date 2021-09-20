import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "./CheckBox";

export default function ToDoItem({ desc, todo, changeTaskStatus, index }) {
  const [content, setContent] = useState("");
  const [isChecked, setIsChecked] = useState(todo);

  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 5,
        paddingLeft: 50,
        justifyContent: "flex-start",
      }}
    >
      <CheckBox
        isChecked={isChecked}
        onPress={() => {
          console.log("clicked");
          setIsChecked(!isChecked);
          changeTaskStatus(!isChecked, index);
        }}
      />
      <Text style={styles.listText}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
