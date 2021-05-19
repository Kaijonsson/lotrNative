import React from "react";
import { StyleSheet, View } from "react-native";
import StarWarsCharacter from "./characterInfo/StarWarsCharacter";
import LotrCharacter from "./characterInfo/LotrCharacter";

const CharacterInfo = (props) => {
  const userChoice = props.props.userChoice;
  const characterObject =
    props.props.characterData ?? props.props.searchedCharacter;

  const characterProps = () => {};
  if (userChoice === "lotr") {
    return <LotrCharacter data={characterObject} />;
  }

  if (userChoice === "starwars") {
    return <StarWarsCharacter data={characterObject} />;
  }

  return <View style={styles.characterInfo}>{characterProps()}</View>;
};

export default CharacterInfo;

const styles = StyleSheet.create({
  characterInfo: {
    paddingBottom: 100,
  },
});
