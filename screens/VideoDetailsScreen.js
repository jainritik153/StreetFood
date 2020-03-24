import React from "react";
import { View, Text, StyleSheet, ImageBackground} from "react-native";



export default class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={styles.container}>
           <Text> VideoDetails</Text> 
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
});

