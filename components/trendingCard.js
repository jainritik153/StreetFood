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
        <ScrollView style={styles.scrollview} >
            <View style={styles.heading}>
              <Text style={{color:Color.secondary_color,fontWeight:"bold"}}>
                Select Category
              </Text>
            </View>
            <TrendingCardVideo category="Chinese"  url={"https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&w=1000&q=80"}></TrendingCardVideo>
            <TrendingCardVideo category="South Indian" url={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyLLFqbRDmD-imxGBvcu2d4o8p48Tqr9HJC0CYQ5fECifd6NXB"}></TrendingCardVideo>
            <TrendingCardVideo category="Italian" url={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1c79rHRO3f_EMA-Uw-pWFge_iXxjpsB0Mil2rDsolzB9V8j7p"}></TrendingCardVideo>
            <TrendingCardVideo category="Mexican" url={"https://vanseodesign.com/blog/wp-content/uploads/2012/11/linear-gradient.png"}></TrendingCardVideo>
  
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 2,
    marginRight:10,
  },
  scrollview:{
    display:"flex",

  },
  text:{
    fontSize:30,
    fontWeight:"bold",
    color:"black",
    textAlign:"center",
    marginTop:50,
    marginBottom:10
  },
  heading:{
    display:"flex",
    alignItems:"center",
    borderWidth:0.2,
    borderColor:"black",
    margin:20,
    padding:10,
    borderRadius:20,
    backgroundColor:"white",
    marginBottom:38,
    elevation:10
  }
});
