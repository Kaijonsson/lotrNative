import React from "react";
import { View, StyleSheet } from "react-native";
import CharacterList from "../components/listScreen/CharacterList";
import globals from "../styles/globals";

function List({ route }) {
  const listChoice = route.params;
  console.log(route.params.listName);
  return (
    <View style={styles.mainContainer}>
      <CharacterList props={listChoice} style={styles.list} />
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
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default List;
