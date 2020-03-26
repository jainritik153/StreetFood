import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button } from "react-native-elements";

export default function CategoryListCard({ url, category, customOnPress }) {
  return (
    <View style={styles.videoContainer}>
      <ImageBackground
        source={{ uri: url }}
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
        imageStyle={{ borderRadius: 10 }}
      >
        <View
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={styles.text}>{category}</Text>
        </View>
        <Button
          title="Show Video"
          type="outline"
          onPress={customOnPress}
          buttonStyle={{
            width: 320,
            height: 40,
            backgroundColor: "rgba(52,52,52,0.2)"
          }}
        ></Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    height: 200,
    width: 320,
    marginLeft: 20,
    borderRadius: 10,
    marginTop: 30,
    elevation: 5
  },
  text: {
    fontSize: 40,
    marginBottom: 5,
    fontWeight: "bold",
    color: "white",
    flex: 2,
    textAlign: "center",
    textAlignVertical: "center"
  }
});
