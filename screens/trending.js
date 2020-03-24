import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/HeaderComponent/header";
import Color from "../assets/color";
import Search from "../components/Search";
import CategoryListCard from "../components/TrendingComponent/categoryListCard";

//trending class component is changed to functional component
function Trending() {
  return (
    <View style={{ flex: 1, backgroundColor: Color.screen_bg_color }}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.heading}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 25 }}>
            CATEGORIES
          </Text>
        </View>
        <CategoryListCard
          category="Chinese"
          url={
            "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&w=1000&q=80"
          }
        ></CategoryListCard>
        <CategoryListCard
          category="South Indian"
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyLLFqbRDmD-imxGBvcu2d4o8p48Tqr9HJC0CYQ5fECifd6NXB"
          }
        ></CategoryListCard>
        <CategoryListCard
          category="Italian"
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1c79rHRO3f_EMA-Uw-pWFge_iXxjpsB0Mil2rDsolzB9V8j7p"
          }
        ></CategoryListCard>
        <CategoryListCard
          category="Mexican"
          url={
            "https://vanseodesign.com/blog/wp-content/uploads/2012/11/linear-gradient.png"
          }
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

export default Trending;
