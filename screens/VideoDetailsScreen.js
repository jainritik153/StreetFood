import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function VideoDetails() {
  return (
    <View style={styles.container}>
      <Text> VideoDetails</Text>
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
