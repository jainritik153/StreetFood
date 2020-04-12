import React, { useState ,useReducer,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  StatusBar,
  ImageBackground,
  Modal,
  Dimensions,
ActivityIndicator
} from "react-native";
import Color from "../assets/color";
import Search from "../components/Search";
import Animated from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

const images = [
  { id: 1, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  {
    id: 2,
    uri:
      "https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg"
  },
  { id: 3, uri: "https://im.rediff.com/getahead/2017/mar/28foodies5.jpg" },
  {
    id: 4,
    uri: "https://photos.smugmug.com/Mumbai/i-qGMtZHZ/0/X3/bhelpuri-1-X3.jpg"
  },
  { id: 5, uri: "https://i.ytimg.com/vi/UVnM1WiK3_I/maxresdefault.jpg" }
];

const HEADER_HEIGHT = Platform.OS == "ios" ? 115 : 60 + StatusBar.currentHeight;


const reducer=(state,action)=>{
  switch (action.type) {
    case 'FETCH_VIDEO':
        return{
          loading:false,
          data:action.payload,
          error:""
        }
        break;
    case 'FETCH_ERROR':
        return{
          loading:false,
          data:[],
          error:"Something went wrong"
        }    
        break
  }
}

const initialState={
  loading:true,
  data:[],
  error:""
}

export default function TrendingVideoScreen({ navigation,route }) {
  // const [modalOpen,setModalOpen] =useState(false)  //react hooks with modalOpen VArible eith deafult value as false
  // const [imageuri,setImageuri] =useState("")
  const {categoryName} = route.params;
  const [state,dispatch]=useReducer(reducer,initialState)

  useEffect(()=>{
    fetch(`https://damp-refuge-17780.herokuapp.com/explore/${categoryName}`)
      .then(res=>res.json())
      .then(resjson=>{
        dispatch({type:'FETCH_VIDEO',payload:resjson})
      })
      .catch(err=>{
        dispatch({type:'FETCH_ERROR'})
        console.log(err.message)
      })
  },[])

   if (state.loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  }
  else{
  
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        pagingEnabled
        horizontal={true}
        scrollEventThrottle={16}
      >
        {state.data.map(videoInfo => (
          <View key={videoInfo._id} style={styles.imageConatiner}>
            <ImageBackground
              resizeMode="cover"
              source={{ uri: videoInfo.Url }}
              style={{
                flex: 1,
                height: undefined,
                width: undefined,
                elevation: 10
              }}
              imageStyle={{ borderRadius: 10 }}
            >
              <View style={styles.detailsContainer}>
                <TouchableOpacity>
                  <Text
                    style={styles.title}
                    onPress={() => navigation.navigate("videoDetails",{videoDetailsInfo:videoInfo})}
                  >
                    {videoInfo.Dish_name}
                  </Text>
                </TouchableOpacity>

                <Text style={styles.subtitle}>location</Text>
                <View
                  style={{ flexDirection: "row", alignItems: "flex-start" }}
                >
                  <Text style={styles.views}>{videoInfo.Likes} likes </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageConatiner: {
    //flex:1,
    //height:450,
    margin: 15,
    width: width - 30,
    borderRadius: 10
  },
  detailsContainer: {
    padding: 5,
    alignSelf: "center",
    marginTop: 380,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    borderBottomEndRadius: 10,
    width: width - 30,
    // backgroundColor: 'transparent'
    borderRadius: 10
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: Color.main_color
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: Color.main_color
  },
  views: {
    fontSize: 13,
    fontWeight: "bold",
    color: Color.main_color
  },
  location: {
    fontWeight: "bold",
    color: "green",
    marginLeft: 160
  },
  titleBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  cardHeaderContainer: {
    flexDirection: "row",
    borderBottomColor: "red",
    borderBottomWidth: 0.2,
    borderRadius: 10,
    backgroundColor: "rgba(52,52,52,0.4)"
  },
  profileImage: {
    margin: 8,
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 0.2,
    borderColor: "black"
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  heading: {
    alignItems: "flex-start",
    margin: 5,
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
    marginBottom: 20
  }
});
