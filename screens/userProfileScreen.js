import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <Text> User Profile screen</Text>
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
