import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../../assets/color";
import Animated from "react-native-reanimated";

export default function Header({ children }) {
  return <View style={styles.header}>{children}</View>;
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: Color.screen_bg_color
    //borderBottomColor:"black",
    //borderBottomWidth:0.2
  }
});
