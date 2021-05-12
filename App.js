import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import List from "./screens/List";
import globals from "./styles/globals";
import CharacterCard from "./screens/CharacterCard";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          options={globals.headerOptions}
          name={"Home"}
          component={Home}
        />
        <Stack.Screen
          options={globals.headerOptions}
          name="List"
          component={List}
        />
        <Stack.Screen
          options={globals.headerOptions}
          name="CharacterCard"
          component={CharacterCard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
