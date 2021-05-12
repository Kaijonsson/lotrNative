import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import globals from "../styles/globals";
import dataBase from "../assets/characters/charObject";

function CharacterCard({ route }) {
  const character = route.params.characterData;

  const characterImage = () => {
    console.log(character);
    const chosenCharacter = dataBase.characters.find(
      (element) => element.name === character.name
    );
    return (
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets" + chosenCharacter.picture)}
      />
    );
  };

  return (
    <View style={styles.background}>
      {characterImage()}
      <Text style={styles.text}>{character.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: globals.backgroundColor.mainBackground,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: globals.fontSize.headerOne,
    color: globals.textColor.yellowGrey,
  },
  image: {
    height: "30%",
    width: "30%",
  },
});
export default CharacterCard;
