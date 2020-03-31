import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  TextInput
} from "react-native";
import Color from "../assets/color";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import ExploreCard from "../components/ExploreComponent/exploreVideoCard";
import exploreScreen from "./exploreScreen";
import exploreCategoryScreen from "./exploreCategoryScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const header_height = StatusBar.currentHeight;

const Stack = createStackNavigator();
//changed class component to function component
function Explore() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: Color.screen_bg_color,
            height: header_height + 50
          },
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTintColor: "black",
          headerBackTitleVisible: false
        }}
      >
        <Stack.Screen
          name="exploreScreen"
          component={exploreScreen}
          options={{ title: "Explore" }}
        />
        <Stack.Screen
          name="exploreCategoryScreen"
          component={exploreCategoryScreen}
          options={{ title: "Category" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Explore;
