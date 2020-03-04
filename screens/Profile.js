import Color from "../assets/color";
import React, { Component } from "react";
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
  TouchableOpacity,
  ColorPropType
} from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.logocontainer}>
              <View style={styles.logocontainer}>
                <Text style={styles.logo}>food app logo</Text>
                <Text style={styles.title}>food app title</Text>
              </View>
              <View style={styles.infocontainer}>
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
                  <Text style={styles.textButton}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkForSignUp}>
                  <Text style={styles.textLink}>Register Me</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: Color.screen_bg_color
  },
  logocontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottom: 10
  },
  logo: {},
  title: {
    color: Color.main_color,
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
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
    borderColor:"black",
    borderWidth:0.2
  },
  buttonContainer: {
    backgroundColor: Color.main_color,
    marginBottom: 10,
    paddingVertical: 5
  },

  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center"
  },
  linkForSignUp: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 5
  },
  textLink: {
    fontSize: 15,
    textDecorationLine: "underline",
    textAlign: "center",
    color: Color.main_color
  }
});
