import Color from "../assets/color";
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
  Button
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import signUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";

const Stack = createStackNavigator();

function SignIn() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="signUpScreen" component={signUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SignIn;
