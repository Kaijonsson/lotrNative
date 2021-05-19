import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import globals from "../styles/globals";
import dataBase from "../assets/characters/charObject";
import Footer from "../components/app/Footer";
import Error from "../components/Error";

function CharacterScreen({ route }) {
  console.log("route: ", route);
  const pressedCharacter = route.params.characterData;
  const searchedCharacter = route.params.searchedCharacter;
  console.log("search: ", searchedCharacter);
  const userChoice = route.params.userChoice;

  console.log("userChoice: ", route.params.userChoice);

  const character = pressedCharacter ?? searchedCharacter;

  const chosenCharacter = dataBase.characters.find(
    (element) => element.name === character.name
  );

  const characterCard = () => {
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
      if (character === undefined) {
        return <Error />;
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

  return (
    <View style={styles.sizingContainer}>
      {characterCard()}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  sizingContainer: {
    flex: 1,
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
