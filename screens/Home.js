import React from "react";
import { View, StyleSheet, Button } from "react-native";
import BackgroundImage from "../components/homeScreen/BackgroundImage";

function Home(props) {
  return (
    <View style={styles.homeContainer}>
      <BackgroundImage />
      <Button
        title="Speak friend, and enter."
        onPress={() => props.navigation.navigate("Other")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
});

export default Home;
