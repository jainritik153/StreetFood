import React ,{useEffect,useReducer}from "react";
import { View, Text, StyleSheet, ImageBackground,ActivityIndicator } from "react-native";
import ExploreCard from "../components/ExploreComponent/exploreVideoCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const imageURL = [
  {
    id: 1,
    url:
      "https://www.tarladalal.com/members/9306/procstepimgs/chinese-bhel-9-185164.jpg",
  },
  {
    id: 2,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEqrph6Py2tPqghcWNW7DoFyXrgvXbBA7Qpd6QATX-4CH9-GEE",
  },
  {
    id: 3,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSifn5j52HxFcjfHNMoyWRoyIBC3NVRrlV0VPp4sBVFZRTha5eY",
  },
  {
    id: 4,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC2sX80-_4HIkzYvBupus5iWi_-3GPYksUV1JBNU1QjLizN6rL",
  },
  {
    id: 5,
    url:
      "https://www.tarladalal.com/members/9306/procstepimgs/chinese-bhel-9-185164.jpg",
  },
  {
    id: 6,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEqrph6Py2tPqghcWNW7DoFyXrgvXbBA7Qpd6QATX-4CH9-GEE",
  },
  {
    id: 7,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSifn5j52HxFcjfHNMoyWRoyIBC3NVRrlV0VPp4sBVFZRTha5eY",
  },
  {
    id: 8,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC2sX80-_4HIkzYvBupus5iWi_-3GPYksUV1JBNU1QjLizN6rL",
  },
];

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

export default function exploreCategoryScreen({ navigation ,route}) {

  const {category}=route.params;
  const [state,dispatch]=useReducer(reducer,initialState)
  console.log(category);

  useEffect(()=>{
    fetch(`https://damp-refuge-17780.herokuapp.com/explore/${category}`)
      .then(res=>res.json())
      .then(resjson=>{
        dispatch({type:'FETCH_VIDEO',payload:resjson})
      })
      .catch(err=>{
        dispatch({type:'FETCH_ERROR'})
        console.log(err.message)
      })
  },[])
  console.log(state.data)
  
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
    
    <ScrollView>
      <View style={styles.container}>
        {state.data.map((videoInfo) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("videoDetails",{videoDetailsInfo:videoInfo})}
              key={videoInfo._id}
            >
              <ExploreCard key={videoInfo._id} imageUrl={videoInfo.Url} />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginVertical: 5,
  },
});
