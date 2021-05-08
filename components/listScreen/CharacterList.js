import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import globals from "../../styles/globals";
import Axios from "axios";

function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  const navigation = useNavigation();
  console.log(props);

  // setList(this.props.activeList);

  // useEffect(() => {
  //   Axios.get("https://the-one-api.dev/v2/character", {
  //     headers: {
  //       authorization: "Bearer 591H4_j3rbAEDTwU_mNY",
  //     },
  //   }).then((response) => {
  //     console.log(response.data.docs);
  //     setCharacters(
  //       response.data.docs.map((character) => {
  //         return character;
  //       })
  //     );
  //   });
  // }, []);

  // const charList = characters.map((character) => {
  //   return (
  //     <TouchableOpacity
  //       key={character._id}
  //       onPress={() => navigation.navigate("CharacterCard", { character })}
  //     >
  //       <Text style={styles.nameList} key={character._id}>
  //         {character.name}
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // });

  useEffect(() => {
    Axios.get("https://swapi.dev/api/people").then((response) => {
      setCharacters(
        response.data.results.map((character) => {
          return character;
        })
      );
    });
  });

  const charList = characters.map((character) => {
    return (
      <TouchableOpacity
        key={character.name}
        onPress={() =>
          navigation.navigate("CharacterCard", { characterData: character })
        }
      >
        <Text style={styles.nameList}> {character.name}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {charList}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  nameList: {
    color: globals.textColor.yellowGrey,
    textAlign: "center",
    fontSize: 20,
    overflow: "scroll",
  },
});

export default CharacterList;
