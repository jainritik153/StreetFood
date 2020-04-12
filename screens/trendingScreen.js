import React ,{useEffect,useReducer}from "react";
import { View, Text, StyleSheet, ScrollView, Button,ActivityIndicator } from "react-native";
import Header from "../components/HeaderComponent/header";
import Color from "../assets/color";
import Search from "../components/Search";
import CategoryListCard from "../components/TrendingComponent/categoryListCard";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();


const reducer=(state,action)=>{
  switch (action.type) {
    case 'FETCH_CATEGORY':
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

//trending class component is changed to functional component
function trendingScreen({ navigation }) {

  const [state,dispatch]=useReducer(reducer,initialState);

  useEffect(() => {
     fetch(`https://damp-refuge-17780.herokuapp.com/getcategory`)
      .then((response) => response.json())
      .then((responseJson) => {

        dispatch({ type: "FETCH_CATEGORY", payload: responseJson });

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
    <View style={{ flex: 1, backgroundColor: Color.screen_bg_color }}>
      <ScrollView style={styles.scrollview}>
      {
        state.data.map(category=>{
          return(
            <CategoryListCard
            key={category.id}
            category={category.Category}
            url={
              "https://vanseodesign.com/blog/wp-content/uploads/2012/11/linear-gradient.png"
            }
            customOnPress={() => navigation.navigate("trendingVideoScreen",{categoryName:category.Category})}
          ></CategoryListCard>
          )
        })
      }
      </ScrollView>
    </View>
  );
  }
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
