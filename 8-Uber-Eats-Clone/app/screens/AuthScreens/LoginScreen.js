import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import firebase from "../../../firebase";
import InputTextField from "../../components/InputTextField";
import CustomButton from "../../components/CustomButton";
import UberEatsLogo from "../../assets/uber-eats-flat-cropped.svg";
import AuthContext from "../../auth/context";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(4).label("Password"),
// });
const auth = firebase.auth();

function LoginScreen({ navigation }) {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email !== "" && password !== "") {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          setUser(res.user.displayName);
        })
        .catch((error) => {
          // setLoginError(error.message);
          console.log(error.message);
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
        <CustomButton title="Login" onPress={handleLogin} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text>New to Uber? </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ color: "#06c167" }}>Create an account</Text>
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

export default LoginScreen;
