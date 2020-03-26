import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function ExploreCard(props) {
  return (
  <View style={styles.mediaImageContainer}>
    <ImageBackground
      resizeMode="cover"
      style={styles.image}
      source={{
        uri:props.imageUrl
      }}
    ></ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
    mediaImageContainer: {
        width: 175,
        height: 210,
        borderRadius: 5,
        overflow: "hidden",
    
        marginLeft: 3,
        marginVertical: 2
      },
      image: {
        flex: 1,
        width: undefined,
        height: undefined
      }
});
