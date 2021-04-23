import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import Other from "./screens/Other";
import globals from "./styles/globals";

export default function App() {
  const lotrApi = async () => {
    const response = await fetch("https://the-one-api.dev/v2/character", {
      headers: {
        authorization: "Bearer 591H4_j3rbAEDTwU_mNY",
      },
    });
    const data = await response.json();
    console.log(data.docs);
    return data.docs;
  };

  lotrApi();

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          options={globals.headerOptions}
          name={"Home"}
          component={Home}
        />
        <Stack.Screen
          options={globals.headerOptions}
          name="Other"
          component={Other}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
