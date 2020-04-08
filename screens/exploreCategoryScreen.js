import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ExploreCard from '../components/ExploreComponent/exploreVideoCard'
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const imageURL=[
    {id:1,url:"https://www.tarladalal.com/members/9306/procstepimgs/chinese-bhel-9-185164.jpg"},
    {id:2,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEqrph6Py2tPqghcWNW7DoFyXrgvXbBA7Qpd6QATX-4CH9-GEE"},
    {id:3,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSifn5j52HxFcjfHNMoyWRoyIBC3NVRrlV0VPp4sBVFZRTha5eY"},
    {id:4,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC2sX80-_4HIkzYvBupus5iWi_-3GPYksUV1JBNU1QjLizN6rL"},
    {id:5,url:"https://www.tarladalal.com/members/9306/procstepimgs/chinese-bhel-9-185164.jpg"},
    {id:6,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEqrph6Py2tPqghcWNW7DoFyXrgvXbBA7Qpd6QATX-4CH9-GEE"},
    {id:7,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSifn5j52HxFcjfHNMoyWRoyIBC3NVRrlV0VPp4sBVFZRTha5eY"},
    {id:8,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC2sX80-_4HIkzYvBupus5iWi_-3GPYksUV1JBNU1QjLizN6rL"}
]

export default function exploreCategoryScreen() {
  return (
    <ScrollView>
        <View style={styles.container}>
        {
            imageURL.map(image=>{
                return(
                  <TouchableOpacity>
                      <ExploreCard key ={image.id} imageUrl={image.url}/>
                  </TouchableOpacity>
                    
                )
            })
        }
        </View>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginVertical:5
  }
});
