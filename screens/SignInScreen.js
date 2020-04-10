import Color from "../assets/color";
import React, { useState } from "react";
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
  AsyncStorage,
} from "react-native";
import signUpScreen from "./SignUpScreen";

const postLoginData = (navigation, LoginInfo) => {
  try {
    console.log("inside func");
    console.log(LoginInfo);
    let rspns = fetch("https://damp-refuge-17780.herokuapp.com/user/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(LoginInfo),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message == "Auth Succeedded") {
          AsyncStorage.setItem("token", data.token);
          console.log("response token from fetch", data.token);
          navigation.navigate("Welcome");
        } else {
          console.log(error.message);
        }
      });
  } catch (e) {
    console.log(e);
  }
};

export default function SignInScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const LoginInfo = {
    Username: userName,
    Password: password,
  };
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Text style={styles.logotitle}>logo</Text>
      </View>
      <View style={styles.subcontainer}>
        <TextInput
          placeholder="Enter UserName"
          onChangeText={(userName) => setUserName(userName)}
          defaultValue={userName}
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
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => postLoginData(navigation, LoginInfo)}
        >
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
    backgroundColor: Color.screen_bg_color,
  },
  subcontainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: Color.screen_bg_color,
    marginTop: 100,
  },
  logocontainer: {
    alignItems: "center",
    justifyContent: "center",

    marginTop: 150,
  },

  logotitle: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.4,
  },
  infocontainer: {
    position: "absolute",
    bottom: 5,
    height: 200,
    padding: 20,
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
    marginBottom: 10,
    height: 40,
    width: 340,
  },

  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  linkForSignUp: {
    fontSize: 18,
    textAlign: "center",
  },
  textLink: {
    fontSize: 15,
    textDecorationLine: "underline",
    textAlign: "center",
    color: Color.main_color,
  },
});
