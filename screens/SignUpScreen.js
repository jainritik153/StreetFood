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
import React, { useState, useEffect } from "react";
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

const postData = (navigation, SignUpInfo) => {
  try {
    console.log("inside func");
    console.log(SignUpInfo);
    let rspns = fetch("https://damp-refuge-17780.herokuapp.com/user/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(SignUpInfo),
    });

    console.log(rspns);
    navigation.navigate("SignInScreen");
  } catch (e) {
    console.log(e);
  }
};

export default function SignUp({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // console.log("out of return", fullName);
  // console.log("out of return", userName);
  // console.log("out of return", emailid);
  // console.log("out of return", location);
  // console.log("out of return", password);
  const SignUpInfo = {
    Fullname: fullName,
    Username: userName,
    Location: location,
    Email_id: emailid,
    Password: password,
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          placeholder="Enter Full Name"
          onChangeText={(fullName) => setFullName(fullName)}
          defaultValue={fullName}
          returnKeyType="next"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Enter Username"
          onChangeText={(userName) => setUserName(userName)}
          defaultValue={userName}
          returnKeyType="next"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
        ></TextInput>

        <TextInput
          placeholder="Enter emailid"
          onChangeText={(emailid) => setEmailId(emailid)}
          defaultValue={emailid}
          returnKeyType="next"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Enter Location"
          onChangeText={(location) => setLocation(location)}
          defaultValue={location}
          returnKeyType="next"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Enter password"
          onChangeText={(password) => setPassword(password)}
          defaultValue={password}
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Confirm password"
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
          defaultValue={confirmPassword}
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
          style={styles.input}
        ></TextInput>
        <TouchableOpacity style={styles.buttonContainer}>
          <Button
            style={styles.textButton}
            title="Sign Up"
            onPress={() => postData(navigation, SignUpInfo)}
          />
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
    backgroundColor: Color.screen_bg_color,
  },
  subContainer: {
    marginTop: 130,
  },
  input: {
    height: 40,
    width: 340,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: "black",
    borderWidth: 0.2,
  },
  buttonContainer: {
    backgroundColor: Color.main_color,

    height: 40,
    width: 340,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
