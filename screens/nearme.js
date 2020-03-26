import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ColorPropType,
  ScrollView,
  StatusBar
} from "react-native";

import Header from "../components/HeaderComponent/header";
import LocationHeader from "../components/HeaderComponent/locationHeader";
import Card from "../components/NearmeCardComponent/card";
import NotificationHeader from "../components/HeaderComponent/notificatioHeader";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Color from "../assets/color";

import vendorProfileScreen from "./vendorProfileScreen";
import nearMeScreen from "./nearMeScreen";
import reviewScreen from "../components/ReviewComponent/review";
import commentScreen from "../components/CommentComponent/comment";

const Stack = createStackNavigator();
const header_height = StatusBar.currentHeight;
export default function NearMe() {
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
          name="nearMeScreen"
          component={nearMeScreen}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="vendorProfileScreen"
          component={vendorProfileScreen}
          options={{ title: "Vendor Name" }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
