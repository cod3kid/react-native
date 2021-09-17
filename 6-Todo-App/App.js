import React, { useState } from "react";
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

export default function App() {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [addText, setAddText] = useState("");
  const [taskList, setTaskList] = useState([]);
  const openModal = () => {
    setisModalVisible(true);
  };

  const addItem = () => {
    setTaskList([...taskList, { desc: addText }]);
    setAddText("");
    setisModalVisible(false);
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
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 5,
                paddingLeft: 50,
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.listText}>{item.desc}</Text>
            </View>
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