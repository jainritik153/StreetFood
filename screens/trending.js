import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/header";
import Color from "../assets/color";
import TrendingCard from "../components/trendingCard";
import Search from '../components/Search'

class Trending extends React.Component {
  render() {
    return (
      <View style={{ flex: 1,backgroundColor:Color.main_color}}>
        <TrendingCard></TrendingCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Trending;
