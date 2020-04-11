import React ,{useEffect,useReducer}from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  TextInput,
  ActivityIndicator
} from "react-native";
import Color from "../assets/color";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import ExploreCard from "../components/ExploreComponent/exploreVideoCard";
import exploreCategoryScreen from "./exploreCategoryScreen";
const HEADER_HEIGHT = StatusBar.currentHeight;

const categories = [
  { id: 2, categoryName: "Chineese" },
  { id: 3, categoryName: "Dosa Special" },
  { id: 1, categoryName: "Italian Pizza" },
  { id: 4, categoryName: "Pasta" },
  { id: 5, categoryName: "Vada Pav" },
  { id: 6, categoryName: "Bhel Special" },
  { id: 7, categoryName: "Frankie" },
  { id: 8, categoryName: "Pani Puri" },
  { id: 9, categoryName: "Maggie" },
  { id: 10, categoryName: "Cheesy Food" },
];

const images = [
  { id: 1, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 2, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 3, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 4, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
  { id: 5, uri: "https://naaniz.com/wp-content/uploads/2018/11/Vada-Pav.jpg" },
];

const reducer=(state,action)=>{
  switch (action.type) {
    case 'FETCH_EXPLORE':
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
  error:"",
}

//changed class component to function component
function exploreScreen({ navigation }) {

  const [state,dispatch] = useReducer(reducer,initialState);

   useEffect(() => {
    fetch(`https://damp-refuge-17780.herokuapp.com/nearme/`)
      .then((response) => response.json())
      .then((responseJson) => {

        dispatch({ type: "FETCH_EXPLORE", payload: responseJson });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

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
      <View style={styles.categoryListContainer}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id}>
              <Text
                key={category.id}
                style={styles.category}
                onPress={() => navigation.navigate("exploreCategoryScreen")}
              >
                {category.categoryName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.exploreMediaContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
          {
            state.data.map(vendorInfo=>{
              return vendorInfo.Videostats.map(videoInfo=>{
                return(
                  // <TouchableOpacity
                  //   onPress={() => navigation.navigate("videoDetails")}
                  // >
                    <ExploreCard
                      key={videoInfo.video_id}
                      imageUrl={
                        videoInfo.Video_url
                      }
                    />
                  //  </TouchableOpacity>
                )
              })
            })
          }
          
          </View>
          
        </ScrollView>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 55,
  },
  categoryListContainer: {
    backgroundColor: Color.light_grey,
    padding: 5,
    marginTop: 5,
  },
  category: {
    padding: 5,
    paddingHorizontal: 10,
    borderColor: "grey",
    borderWidth: 0.2,
    marginHorizontal: 5,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "white",
    fontWeight: "bold",
  },
  exploreMediaContainer: {},
  mediaImageContainer: {
    width: 175,
    height: 210,
    borderRadius: 5,
    overflow: "hidden",

    marginLeft: 3,
    marginVertical: 2,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default exploreScreen;
