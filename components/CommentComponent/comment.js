import React from "react";
import { View, Text, StyleSheet, ImageBackground} from "react-native";



export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={styles.container}>
           <Text> Comments</Text> 
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

