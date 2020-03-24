import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ColorPropType,
  ScrollView
} from "react-native";

import Header from "../components/HeaderComponent/header";
import LocationHeader from "../components/HeaderComponent/locationHeader";
import Card from "../components/NearmeCardComponent/card";
import NotificationHeader from "../components/HeaderComponent/notificatioHeader";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import vendorProfileScreen from "./vendorProfileScreen";
import nearMeScreen from "./nearMeScreen";
import reviewScreen from "../components/ReviewComponent/review";
import commentScreen from "../components/CommentComponent/comment";

const Stack = createStackNavigator();

export default class NearMe extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="nearMeScreen" component={nearMeScreen} />
          <Stack.Screen
            name="vendorProfileScreen"
            component={vendorProfileScreen}
          />
          <Stack.Screen name="commentScreen" component={commentScreen} />
          <Stack.Screen name="reviewScreen" component={reviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
