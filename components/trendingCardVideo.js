import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../assets/color";
import color from "../assets/color";

export default class TrendingCardVideo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.videoContainer}>
        <Text style={{ color: Color.main_color }}>Trending Video</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  videoContainer: {
    height: 450,
    width: 320,
    borderWidth: 1,
    borderColor: Color.screen_bg_color,

    marginLeft: 20
  }
});

