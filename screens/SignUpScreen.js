/*
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text> SignUp screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
*/
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

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          placeholder="Enter Username"
          returnKeyType="next"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Enter User Id"
          returnKeyType="next"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Enter emailid"
          returnKeyType="next"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Enter password"
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Confirm password"
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
          style={styles.input}
        ></TextInput>
        <TouchableOpacity style={styles.buttonContainer}>
          <Button style={styles.textButton} title="Sign Me Up plz" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: Color.screen_bg_color
  },
  subContainer: {
    marginTop: 80
  },
  input: {
    height: 40,
    width: 340,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: "black",
    borderWidth: 0.2
  },
  buttonContainer: {
    backgroundColor: Color.main_color,
    height: 40,
    width: 340,
    marginBottom: 10,
    paddingHorizontal: 10
  },

  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center"
  }
});
