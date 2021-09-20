import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import FAB from "./Components/FAB";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ToDoItem from "./Components/ToDoItem";

export default function App() {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [addText, setAddText] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [checked, setChecked] = useState(false);
  const openModal = () => {
    setisModalVisible(true);
  };

  const addItem = () => {
    setTaskList([...taskList, { desc: addText, done: false }]);
    setAddText("");
    setisModalVisible(false);
  };

  const changeTaskStatus = (newValue, index) => {
    const newTaskList = [...taskList];
    newTaskList[index].done = newValue;
    console.log(newTaskList);
    setTaskList(newTaskList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6ACD08"
        translucent={false}
      />
      <View style={styles.appBar}>
        <Text style={styles.headerText}>Todo App</Text>
      </View>
      <FlatList
        data={taskList}
        keyExtractor={(task) => task.desc.toString()}
        // ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => {
          return (
            <ToDoItem
              desc={item.desc}
              todo={item.todo}
              changeTaskStatus={changeTaskStatus}
              index={index}
            />
          );
        }}
      />
      <View style={styles.fabContainer}>
        <FAB style={styles.fab} onPress={openModal} />
      </View>
      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Add a Task</Text>
            <TouchableWithoutFeedback onPress={() => setisModalVisible(false)}>
              <MaterialCommunityIcons name="close" size={24} color="black" />
            </TouchableWithoutFeedback>
          </View>
          <View>
            <TextInput
              onChangeText={(text) => setAddText(text)}
              placeholder="Task"
              placeholderTextColor="#ADB3BC"
            />
          </View>
          <View>
            <Button title="Add" onPress={addItem} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  appBar: {
    height: 60,
    backgroundColor: "#6ACD08",
    justifyContent: "center",
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  listText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  modal: {
    backgroundColor: "gray",
    marginHorizontal: 50,
    marginTop: "50%",
    height: 300,
    borderRadius: 16,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: "500",
  },
  fabContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
