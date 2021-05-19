import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Axios from "axios";
import { useState } from "react";
import globals from "../../../styles/globals";

const StarWarsCharacter = (data) => {
  const character = data.data;

  const [characterHomeWorld, setCharacterHomeWorld] = useState();
  const [starship, setStarship] = useState("");
  const [starshipArray, setStarShipArray] = useState([]);

  Axios.get(character.homeworld).then((response) => {
    setCharacterHomeWorld(response.data.name);
  });

  const characterStarShips = () => {
    console.log(character.starships);
    if (character.starships.length === 0) {
      return (
        <Text style={styles.charrText}>Starship: "No ship affilitation"</Text>
      );
    }
    if (character.starships.length === 1) {
      Axios.get(character.starships).then((response) => {
        setStarship(response.data.name);
      });
      return <Text style={styles.charrText}>Starship: "{starship}"</Text>;
    }
    if (character.starships.length > 1) {
      character.starships.forEach((element) => {
        Axios.get(element).then((response) => {
          setStarShipArray([...starshipArray, response.data.name]);
        });
      });
      return (
        <FlatList
          data={starshipArray}
          renderItem={(item) => {
            <Text>{item}</Text>;
          }}
        />
      );
    }
  };

  console.log(character);
  return (
    <View>
      <Text style={styles.charrText}>Name: "{character.name}"</Text>
      <Text style={styles.charrText}>Birth Year: "{character.birth_year}"</Text>
      <Text style={styles.charrText}>Home World: "{characterHomeWorld}"</Text>
      <View>{characterStarShips()}</View>
    </View>
  );
};

export default StarWarsCharacter;

const styles = StyleSheet.create({
  charrText: {
    color: globals.textColor.yellowGrey,
    fontSize: globals.fontSize.headerTwo,
    backgroundColor: globals.backgroundColor.mainBackground,
  },
});
