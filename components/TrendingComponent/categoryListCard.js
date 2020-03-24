import React from "react";
import { View, Text, StyleSheet, ImageBackground} from "react-native";
import {Button} from 'react-native-elements'


export default class CategoryListCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={ styles.videoContainer} > 
            <ImageBackground source={{uri:this.props.url}}
                  style={{height:"100%",width:"100%",alignItems:"center",justifyContent:"center",flex:1}}
                  imageStyle={{ borderRadius:10}}
            >
              <View style={{display:"flex",flex:1, flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <Text style={styles.text}>
                      {this.props.category}
                  </Text>
                  <Button  type="outline"  buttonStyle={{width:320,height:40}}>
                      <Text style={styles.text}>
                        See Videos
                      </Text>
                  </Button>
              </View>
                  
              
            </ImageBackground>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  videoContainer: {
    height:200,
    width: 320,
    marginLeft:20,
    borderRadius:10,
    marginBottom:40,
    elevation:5
   
  },
  text:{
    fontSize:40,
    marginBottom:5,
    fontWeight:"bold",
    color:"white",
    flex:2, 
    textAlign:"center",
    textAlignVertical:"center"

  }
});

