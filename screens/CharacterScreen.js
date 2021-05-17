import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import globals from "../styles/globals";
import dataBase from "../assets/characters/charObject";

function CharacterCard({ route }) {
  const character = route.params.characterData
    ? !route.params.characterData
    : route.params.searchedCharacter;

  const characterImage = () => {
    console.log(character);

    try {
      const chosenCharacter = dataBase.characters.find(
        (element) => element.name === character.name
      );
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
      if (character === null || "underfined") {
        return (
          <View style={styles.background}>
            <Text style={styles.text}>
              Couldn't find what you where looking for
            </Text>
          </View>
        );
      }
      console.log(err);
    }
  };

  return <View style={styles.sizingContainer}>{characterImage()}</View>;
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
export default CharacterCard;
