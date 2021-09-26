import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import firebase from "../../../firebase";
import InputTextField from "../../components/Auth/InputTextField";
import CustomButton from "../../components/Auth/CustomButton";
import UberEatsLogo from "../../assets/images/uber-eats-flat-cropped.svg";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
// });
const auth = firebase.auth();

function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    Keyboard.dismiss();
    if (email !== "" && password !== "") {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          return res.user.updateProfile({
            displayName: name,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <View style={{ paddingVertical: 50, padding: 20 }}>
      <UberEatsLogo height={100} width={200} style={{ alignSelf: "center" }} />
      {/* <View>
        <Text style={{ fontSize: 24, fontWeight: "400", marginBottom: 10 }}>
          Welcome Back
        </Text>
      </View> */}
      <View>
        <InputTextField
          iconColor="#818B95"
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <InputTextField
          iconColor="#818B95"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <InputTextField
          isPassword
          iconColor="#818B95"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <CustomButton title="Register" onPress={handleRegister} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text>Already use Uber? </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "#06c167" }}>Sign in</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;
