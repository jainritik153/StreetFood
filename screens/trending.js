import React from "react";
import { View, Text, StyleSheet, ScrollView,StatusBar } from "react-native";
import Header from "../components/HeaderComponent/header";
import Color from "../assets/color";
import Search from "../components/Search";
import CategoryListCard from "../components/TrendingComponent/categoryListCard";
import trendingScreen from "./trendingScreen";
import trendingVideoScreen from "./trendingVideoScreen";
import vendorProfileScreen from "./vendorProfileScreen";
import VideoDetailsScreen from './VideoDetailsScreen'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const header_height=StatusBar.currentHeight

//trending class component is changed to functional component
function Trending() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor:Color.screen_bg_color,
            height:header_height+50
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            margin:5
          },
          headerTintColor: "black",
          headerBackTitleVisible: false
        }}
      >
        <Stack.Screen 
          name="trendingScreen" 
          component={trendingScreen}
          options={{ title: 'Category' }} 
        />
        <Stack.Screen
          name="trendingVideoScreen"
          component={trendingVideoScreen}
          options={{ title: 'Trending videos' }} 
        />
        <Stack.Screen
          name="vendorProfileScreen"
          component={vendorProfileScreen}
          options={{ title: 'Vendor Name' }} 
        />
        <Stack.Screen
          name="videoDetails"
          component={VideoDetailsScreen}
          options={{ title: 'Video Details' }} 
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
