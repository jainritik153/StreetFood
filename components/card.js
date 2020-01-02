import React from 'react'
import {View , Text,StyleSheet } from 'react-native'
import Color from '../assets/color'

export default class Card extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardHeaderContainer}>
                    <Text style={styles.text}>Card Header</Text>
                </View>
                <View style={styles.videoContainer}>
                    <Text style={styles.text}>Video</Text>
                </View>
                <View style={styles.cardFooter}>
                    <Text style={styles.text}>Card Footer</Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        height:400,
        backgroundColor:Color.secondary_color,
        margin:3,
        elevation:25,
        borderRadius:20
    },
    cardHeaderContainer:{
        height:60,
        borderBottomColor:"grey",
        borderBottomWidth:0.2,
    },
    videoContainer:{
        height:250,
        borderBottomColor:"grey",
        borderBottomWidth:0.2,
    },
    text:{
        color:Color.main_color,
        padding:20
    }

})