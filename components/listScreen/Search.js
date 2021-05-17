import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import globals from "../../styles/globals";
import Axios from "axios";
import { SWAPI_SEARCH, LOTR_SEARCH, BEARER_TOKEN } from "@env";

const Search = (prop) => {
  const navigation = useNavigation();

  const listChoice = prop.props;
  const [userInput, setUserInput] = useState("");

  const Navigation = (character) => {
    navigation.navigate("CharacterScreen", {
      searchedCharacter: character,
    });
  };

  const searchAPI = () => {
    if (listChoice.listName === "starwars") {
      try {
        Axios.get(`${SWAPI_SEARCH + userInput}`).then((response) => {
          Navigation(response.data.results[0]);
        });
      } catch (err) {
        console.log(err);
      }
    }
    if (listChoice.listName === "lotr") {
      console.log(listChoice);
      try {
        Axios.get(`${LOTR_SEARCH + userInput}`, {
          headers: {
            authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }).then((response) => {
          console.log(response);
          console.log(response.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const addPlaceholder = (prop) => {
    if (prop.listName === "starwars") {
      return "Search the Galaxy";
    }
    if (prop.listName === "lotr") {
      return "Search Arda";
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(userInput) => setUserInput(userInput)}
        placeholder={addPlaceholder(listChoice)}
        placeholderTextColor={globals.textColor.yellowGrey}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={searchAPI}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: globals.textColor.yellowGrey,
    padding: 5,
    color: globals.textColor.yellowGrey,
  },
  inputContainer: {
    position: "absolute",
    top: 25,
    zIndex: 1,
  },
  buttonText: {
    color: globals.textColor.yellowGrey,
    textAlign: "center",
    fontSize: 20,
  },
});
