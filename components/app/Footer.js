import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globals from "../../styles/globals";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style={styles.text}>Register for weekly updates!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: globals.backgroundColor.mainBackground,
    padding: 5,
  },
  text: {
    color: globals.textColor.yellowGrey,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    fontSize: globals.fontSize.headerTwo,
    textAlign: "center",
  },
});
