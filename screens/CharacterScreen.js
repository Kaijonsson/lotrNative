import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import globals from "../styles/globals";
import dataBase from "../assets/characters/charObject";

function CharacterScreen({ route }) {
  const pressedCharacter = route.params.characterData;
  const searchedCharacter = route.params.searchedCharacter;

  const character = pressedCharacter ? pressedCharacter : searchedCharacter;
  const chosenCharacter = dataBase.characters.find(
    (element) => element.name === character.name
  );
  const characterCard = () => {
    console.log(character);
    try {
      return (
        <View style={styles.background}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={chosenCharacter.image}
          />
          <Text style={styles.text}>{character.name}</Text>
        </View>
      );
    } catch (err) {
      console.log(character);
      if (character === undefined) {
        return (
          <View style={styles.background}>
            <Text style={styles.text}>
              Couldn't find what you where looking for
            </Text>
          </View>
        );
      }
      if (chosenCharacter === undefined) {
        return (
          <View style={styles.background}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require("../assets/favicon.png")}
            />
            <Text style={styles.text}>{character.name}</Text>
          </View>
        );
      }
    }
  };

  return <View style={styles.sizingContainer}>{characterCard()}</View>;
}

const styles = StyleSheet.create({
  sizingContainer: {
    height: "100%",
    width: "100%",
  },
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
export default CharacterScreen;
