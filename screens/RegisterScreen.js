import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import globals from "../styles/globals";
import Axios from "axios";

const RegisterScreen = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const clearName = useRef();
  const clearLastName = useRef();
  const clearEmail = useRef();

  const sendUserData = () => {
    console.log(userFirstName);

    Axios.post("http://127.0.0.1:3001/register", {
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    clearName.current.clear();
    clearLastName.current.clear();
    clearEmail.current.clear();
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>First Name</Text>
      <TextInput
        ref={clearName}
        autoCompleteType="name"
        onChangeText={(userFirstName) => setUserFirstName(userFirstName)}
        style={styles.input}
      ></TextInput>
      <Text style={styles.text}>Last Name</Text>
      <TextInput
        ref={clearLastName}
        autoCompleteType="name"
        onChangeText={(userLastName) => setUserLastName(userLastName)}
        style={styles.input}
      ></TextInput>
      <Text style={styles.text}>Email</Text>
      <TextInput
        ref={clearEmail}
        autoCompleteType="email"
        onChangeText={(userEmail) => setUserEmail(userEmail)}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity onPress={sendUserData}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globals.backgroundColor.mainBackground,
  },
  text: {
    color: globals.textColor.yellowGrey,
    fontSize: globals.fontSize.headerTwo,
  },
  input: {
    width: "80%",
    fontSize: 18,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: globals.textColor.yellowGrey,
    padding: 5,
    color: globals.textColor.yellowGrey,
  },
});
