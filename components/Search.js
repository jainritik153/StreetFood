import React from "react";
import { View, Text, StyleSheet ,StatusBar} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Color from "../assets/color";
import { TextInput } from "react-native-gesture-handler";

const HEADER_HEIGHT=StatusBar.currentHeight
export default function Search() {
  return (
    <View style={styles.searchContainer}>
        <Icon
          name="md-search"
          color="black"
          size={26}
          style={{ marginLeft: "2%" }}
        />
        <TextInput
          type="text"
          style={{ color: "grey", fontSize: 18, marginLeft: "4%" }}
          placeholder="Search"
        ></TextInput>
      </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: Color.light_grey,
    marginTop: HEADER_HEIGHT,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center"
  }
} 
);
