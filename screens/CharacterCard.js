import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import globals from "../styles/globals";

function CharacterCard({ route, navigation }) {
  const character = route.params.characterData;
  console.log(character);
  return (
    <View style={styles.background}>
      <Text style={styles.text}>{character.name}</Text>
      <Button
        color={globals.textColor.yellowGrey}
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: globals.backgroundColor.mainBackground,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 100,
  },
  text: {
    fontSize: globals.fontSize.headerOne,
    color: globals.textColor.yellowGrey,
  },
});
export default CharacterCard;
