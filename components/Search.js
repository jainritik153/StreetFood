import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Color from "../assets/color";
import { TextInput } from "react-native-gesture-handler";

export default function Search() {
  return (
    <View style={styles.container}>
      <Icon name="md-search" size={28} style={styles.icon}></Icon>
      <TextInput
        style={styles.input}
        placeholder="Search for vendors or food"
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop:45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.screen_bg_color,
    elevation: 5,
    padding: 8,
    borderRadius: 25,
    marginHorizontal: 15,
    backgroundColor: "white"
  },
  icon: {
    color: Color.main_color,
    marginHorizontal: 10
  },
  input: {
    width: "75%",
    fontSize: 18,
    fontWeight: "bold"
  }
});
