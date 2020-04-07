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
import signUpScreen from "./SignUpScreen";

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Text style={styles.logotitle}>logo</Text>
      </View>
      <View style={styles.subcontainer}>
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
        <TouchableOpacity style={styles.buttonContainer}>
          <Button style={styles.textButton} title="Sign In" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("signUpScreen")}
        >
          <Button style={styles.textButton} title="Sign Up" />
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
  subcontainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: Color.screen_bg_color,
    marginTop: 100
  },
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",

    marginTop: 150
  },

  logotitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.4
  },
  infocontainer: {
    position: "absolute",
    bottom: 5,
    height: 200,
    padding: 20
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
    marginBottom: 10,
    height: 40,
    width: 340
  },

  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center"
  },
  linkForSignUp: {
    fontSize: 18,
    textAlign: "center"
  },
  textLink: {
    fontSize: 15,
    textDecorationLine: "underline",
    textAlign: "center",
    color: Color.main_color
  }
});
