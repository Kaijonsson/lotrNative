import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import globals from "../styles/globals";

function Other(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Hejsan</Text>
      <Button
        title="Fly you fools"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: globals.backgroundColor.mainBackground,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: globals.textColor.yellowGrey,
    fontSize: globals.fontSize.headerOne,
  },
});

export default Other;
