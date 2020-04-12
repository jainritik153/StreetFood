import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ProgressCircle from "react-native-progress-circle";
import Color from "../assets/color";

const deafultHeight = StatusBar.currentHeight;

export default function VideoDetails({ route, navigation }) {
  const { videoDetailsInfo } = route.params;
  console.log(videoDetailsInfo);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.videoContainer}>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri: videoDetailsInfo.Url,
          }}
          style={{ height: undefined, flex: 1 }}
          imageStyle={{ borderRadius: 20 }}
        ></ImageBackground>
      </View>

      <View style={styles.desContainer}>
        <Text style={styles.description}>{videoDetailsInfo.Dish_name}</Text>
        <View style={styles.price}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>₹ {videoDetailsInfo.Price}</Text>
        </View>
      </View>

      <View>
		<Text style={styles.heading}>Description</Text>
    		<Text style={{margin:5,color:"grey"}}>
				{videoDetailsInfo.Description}
        	</Text>
      </View>

      <Text style={styles.heading}>
        Ingredients
      </Text>

     

      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "flex-start",
          flexWrap: "wrap",
          marginTop: 5,
        }}
      >
         {
        videoDetailsInfo.Ingredients.map((item,index)=>{
          return(
            <Text key = {index} style={styles.incgredients}>{item}</Text>
          )
          })
        }
      </View> 

      <Text style={styles.heading}>
        Rating and Reviews
      </Text>

      <View style={styles.ratingContainer}>
        <View style={styles.rating}>
          <ProgressCircle
            percent={videoDetailsInfo.Hygiene}
            radius={50}
            borderWidth={8}
            color="#FC427B"
            shadowColor="#d1d8e0"
            bgColor="white"
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{`${videoDetailsInfo.Hygiene}%`}</Text>
          </ProgressCircle>
          <Text style={{ marginTop: 5, fontSize: 15, fontWeight: "bold" }}>
            Hygenic
          </Text>
        </View>
        <View style={styles.rating}>
          <ProgressCircle
            percent={videoDetailsInfo.Taste}
            radius={50}
            borderWidth={8}
            color="#FC427B"
            shadowColor="#d1d8e0"
            bgColor="white"
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{`${videoDetailsInfo.Taste}%`}</Text>
          </ProgressCircle>
          <Text style={{ marginTop: 5, fontSize: 15, fontWeight: "bold" }}>
            Taste
          </Text>
        </View>
        <View style={styles.rating}>
          <ProgressCircle
            percent={videoDetailsInfo.Overall_rating}
            radius={50}
            borderWidth={8}
            color="#FC427B"
            shadowColor="#d1d8e0"
            bgColor="white"
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{`${videoDetailsInfo.Overall_rating}%`}</Text>
          </ProgressCircle>
          <Text style={{ marginTop: 5, fontSize: 15, fontWeight: "bold" }}>
            Overall
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.location}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            View location
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: "column",
    backgroundColor: "white",
  },
  videoContainer: {
    marginTop:8,
    height: 400,
    elevation: 100,
  },
  incgredients: {
    padding: 8,
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexWrap: "wrap",
    elevation: 8,
    backgroundColor: "#82589F",
    color: "white",
    fontWeight: "bold",
  },
  desContainer: {
    marginTop:8,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  price: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 15,
    borderRadius:15,
    elevation: 10,
    backgroundColor: "white",
  },
  description: {
    flex: 2,
    margin: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  ratingContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  rating: {
    marginHorizontal:5,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius:10,
    elevation: 5,
    alignItems: "center",
    flexDirection: "column",
  },
  location: {
    borderWidth: 0.2,
    borderColor: "black",
    padding: 10,
    marginVertical: 15,
    borderRadius: 200,
    alignItems: "center",
    elevation: 5,
    backgroundColor: "#44bd32",
  },
  heading:{
     color: "grey",
      marginLeft: 5,
      marginTop: 5,
      fontWeight:"bold" 
  }
});
