//import Color from "../assets/color";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableWithoutFeedback,
  TextInput,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  ColorPropType,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import signUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";

//import NearMe from "./screens/nearme";

import NearMeScreen from "./screens/nearMeScreen";
import ExploreScreen from "./screens/exploreScreen";
import TrendingScreen from "./screens/trendingScreen";
import UserProfileScreen from "./screens/userProfileScreen";

import vendorProfileScreen from "./screens/vendorProfileScreen";
import reviewScreen from "./components/ReviewComponent/review";
import commentScreen from "./components/CommentComponent/comment";

import exploreCategoryScreen from "./screens/exploreCategoryScreen";

import trendingVideoScreen from "./screens/trendingVideoScreen";
//import vendorProfileScreen from "./screens/vendorProfileScreen";
import VideoDetailsScreen from "./screens/VideoDetailsScreen";

import Color from "./assets/color";

const header_height = StatusBar.currentHeight;
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

function bottabs() {
  return (
    <MaterialBottomTabs.Navigator
      initialRouteName="Feed"
      activeColor="black"
      inactiveColor="grey"
      barStyle={{ backgroundColor: "white" }}
    >
      <MaterialBottomTabs.Screen
        name="NearMe"
        component={NearMeScreen}
        options={{
          tabBarLabel: "NearMe",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={26} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Trending"
        component={TrendingScreen}
        options={{
          tabBarLabel: "Trending",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="trending-up"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: Color.screen_bg_color,
            height: header_height + 50,
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "black",
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="signUpScreen" component={signUpScreen} />
        <Stack.Screen
          name="Welcome"
          children={bottabs}
          options={{ title: "bottom tabs" }}
        />

        <Stack.Screen
          name="vendorProfileScreen"
          component={vendorProfileScreen}
          options={{ title: "Vendor Name" ,headerLeft:false}}
        />
        <Stack.Screen
          name="commentScreen"
          component={commentScreen}
          options={{ title: "Comment" }}
        />
        <Stack.Screen
          name="reviewScreen"
          component={reviewScreen}
          options={{ title: "Review" }}
        />

        <Stack.Screen
          name="exploreCategoryScreen"
          component={exploreCategoryScreen}
          options={{ title: "Category" }}
        />

        <Stack.Screen
          name="trendingVideoScreen"
          component={trendingVideoScreen}
          options={{ title: "Trending videos" }}
        />

        <Stack.Screen
          name="videoDetails"
          component={VideoDetailsScreen}
          options={{ title: "Video Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
