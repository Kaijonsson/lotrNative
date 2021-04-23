import React from "react";
import { Image, StyleSheet } from "react-native";

function BackgroundImage(props) {
  return (
    <Image
      resizeMode="contain"
      style={styles.image}
      source={require("../../assets/background/One_Ring_Blender_Render.png")}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: "50%",
    height: "50%",
  },
});

export default BackgroundImage;
