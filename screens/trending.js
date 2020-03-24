import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/HeaderComponent/header";
import Color from "../assets/color";
import Search from "../components/Search";
import CategoryListCard from "../components/TrendingComponent/categoryListCard";
import trendingScreen from "./trendingScreen";
import trendingVideoScreen from "./trendingVideoScreen";
import vendorProfileScreen from "./vendorProfileScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//trending class component is changed to functional component
function Trending() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="trendingScreen" component={trendingScreen} />
        <Stack.Screen
          name="trendingVideoScreen"
          component={trendingVideoScreen}
        />
        <Stack.Screen
          name="vendorProfileScreen"
          component={vendorProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  heading: {
    display: "flex",
    alignItems: "flex-start",
    margin: 20,
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
    marginBottom: 20
  }
});

export default Trending;
