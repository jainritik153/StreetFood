import React from "react";
import { View, Text, StyleSheet, ScrollView ,SafeAreaView,Image,ImageBackground} from "react-native";
import {Ionicons , MaterialIcons} from 'react-native-vector-icons'
import Color from "../assets/color";
import color from "../assets/color";
import { Logs } from "expo";



export default class VideoDetails extends React.Component{
    constructor(props){
        super(props);
    }

    getImageUri(){
        return str(this.props.setImage((imageUri)=>{return imageUri}))
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleBar}>
                    <Ionicons name="md-arrow-back" size={24} color="#52575D" onPress={()=>this.props.setModal(false)}></Ionicons>
                    <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
                    
                </View>
                    <Text>{this.props.setImage(imageuri)}</Text>
                <Text>{this.props.imageUri}</Text>
            </View>
        )
    }
} 

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    titleBar:{
        
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:24,
        marginHorizontal:16
        
    }
})