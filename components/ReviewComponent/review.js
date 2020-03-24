import React from "react";
import { View, Text, StyleSheet, ImageBackground} from "react-native";



export default class Review extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={styles.container}>
           <Text> Reviews</Text> 
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

