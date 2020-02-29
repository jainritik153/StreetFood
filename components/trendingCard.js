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
          <View
            style={{ flexDirection: "row", marginTop: 20, marginBottom: 20 }}
          >
            <TrendingCardVideo></TrendingCardVideo>
            <TrendingCardVideo></TrendingCardVideo>
            <TrendingCardVideo></TrendingCardVideo>
            <TrendingCardVideo></TrendingCardVideo>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.secondary_color,
    marginLeft: 2,

    marginTop: 8,
    marginBottom: 2,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    elevation: 20
  }
});
