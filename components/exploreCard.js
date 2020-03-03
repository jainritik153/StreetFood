import React from 'react'
import {View , Text,StyleSheet,ScrollView } from 'react-native'
import Color from '../assets/color'
import color from '../assets/color';
import ExploreCardVideo from '../components/exploreCardVideo'

export default class ExploreCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>

                <ScrollView horizontal={true}>
                    <ExploreCardVideo url={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlyN7ciOruKPs6O0JwUyjMtBUZIqNS12NjrcHqdbOFU8Tecebg"}></ExploreCardVideo>
                    <ExploreCardVideo url={"https://static.toiimg.com/photo/62441716/.jpg"}></ExploreCardVideo>
                    <ExploreCardVideo url={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRetmTnP7Q9XXQDIWE1Cf-P4tWPJv9pUrnhro8cRjR8DP91OUal"}></ExploreCardVideo>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
  container:{
      backgroundColor:Color.screen_bg_color,
      marginLeft:10,
      marginTop:10,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      

  }
})