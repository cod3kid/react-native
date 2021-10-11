import { Keyboard } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from "../config/firebase";

const auth = firebase.auth();
const db = firebase.firestore();

export default function SignUpHandler({ setLoaderVisible }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      username: Yup.string().required(),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      Keyboard.dismiss();

      const { name, email, password, username } = values;
      setLoaderVisible(true);
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          //   Alert.alert("Account created");
          //   return db.collection('users').add()
        })
        .catch((err) => {
          console.log(err);
        });
      setLoaderVisible(false);
      navigation.navigate("Login");
    },
  });

  return formik;
}
