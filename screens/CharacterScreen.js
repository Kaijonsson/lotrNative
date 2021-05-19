import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CharacterCard from "../components/characterScreen/CharacterCard";
import Footer from "../components/app/Footer";

function CharacterScreen({ route }) {
  const userChoice = route.params.userChoice;

  console.log("userChoice: ", route.params.userChoice);
  console.log("characterObject: ", route.params.characterData);
  console.log("searchcharacterObject: ", route.params.searchedCharacter);

  return (
    <View style={styles.sizingContainer}>
      <CharacterCard props={route.params} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  sizingContainer: {
    flex: 1,
  },
});
export default CharacterScreen;
