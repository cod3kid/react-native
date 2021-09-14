import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import FAB from "./Components/FAB";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [isModalVisible, setisModalVisible] = useState(false);
  const addItem = () => {
    setisModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fabContainer}>
        <FAB style={styles.fab} onPress={addItem} />
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
            <TextInput />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
