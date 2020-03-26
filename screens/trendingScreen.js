import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Header from "../components/HeaderComponent/header";
import Color from "../assets/color";
import Search from "../components/Search";
import CategoryListCard from "../components/TrendingComponent/categoryListCard";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//trending class component is changed to functional component
function trendingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: Color.screen_bg_color }}>
      <ScrollView style={styles.scrollview}>
        <CategoryListCard
          category="Chinese"
          url={
            "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&w=1000&q=80"
          }
          customOnPress={() => navigation.navigate("trendingVideoScreen")}
        ></CategoryListCard>

        <CategoryListCard
          category="South Indian"
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyLLFqbRDmD-imxGBvcu2d4o8p48Tqr9HJC0CYQ5fECifd6NXB"
          }
          customOnPress={() => navigation.navigate("trendingVideoScreen")}
        ></CategoryListCard>
        <CategoryListCard
          category="Italian"
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1c79rHRO3f_EMA-Uw-pWFge_iXxjpsB0Mil2rDsolzB9V8j7p"
          }
          customOnPress={() => navigation.navigate("trendingVideoScreen")}
        ></CategoryListCard>
        <CategoryListCard
          category="Mexican"
          url={
            "https://vanseodesign.com/blog/wp-content/uploads/2012/11/linear-gradient.png"
          }
          customOnPress={() => navigation.navigate("trendingVideoScreen")}
        ></CategoryListCard>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    display: "flex",
    alignItems: "flex-start",
    margin: 20,
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
    marginBottom: 20
  }
});

export default trendingScreen;
