import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Color from "../assets/color";
import color from "../assets/color";
import TrendingCardVideo from "../components/trendingCardVideo";

export default class TrendingCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
            <TrendingCardVideo url={"https://static.toiimg.com/photo/62441716/.jpg"}></TrendingCardVideo>
            <TrendingCardVideo url={"https://static.toiimg.com/photo/62441716/.jpg"}></TrendingCardVideo>
            <TrendingCardVideo url={"https://static.toiimg.com/photo/62441716/.jpg"}></TrendingCardVideo>
            <TrendingCardVideo url={"https://static.toiimg.com/photo/62441716/.jpg"}></TrendingCardVideo>
  
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.screen_bg_color ,
    marginTop: 60,
    marginBottom: 2,
    marginRight:10,
  }
});
