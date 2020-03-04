import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import {Button} from 'react-native-elements'
import Color from "../assets/color";
import color from "../assets/color";

export default class TrendingCardVideo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={styles.Text}>
              Trending video     
            </Text>
            <Text style={{color:"green",marginRight:15,fontWeight:"bold"}}>
              Details..
            </Text>
        </View>   
          <View style={styles.videoContainer}>
            <ImageBackground source={{uri:this.props.url}}
                style={{height:450,borderRadius:25,display:"flex",flexDirection:"column",justifyContent:"flex-end"}}
             >
               <Button  title="Watch Video" type="outline" color="white"></Button>
            </ImageBackground>
      </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  videoContainer: {
    height: 450,
    width: 320,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor:"white",
    marginLeft:20,
    borderRadius:25
  },
  Text:{
    fontSize:16,
    marginLeft:25,
    marginBottom:5,
    fontWeight:"bold"
  }
});

