import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Review() {
  return (
    <View style={styles.container}>
      <Text> Reviews</Text>
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
