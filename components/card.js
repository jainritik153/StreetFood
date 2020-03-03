import React from 'react'
import {View , Text,StyleSheet, Image } from 'react-native'
import Color from '../assets/color'

export default class Card extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardHeaderContainer}>
                    <Text style={styles.text}>{this.props.header}</Text>
                </View>
                <View style={styles.videoContainer}>
                    <Image source={{uri : this.props.img}}
                       style={{ height:290 }}  
                    >

                    </Image>
                </View>
                <View style={styles.cardFooter}>
                    <Text style={styles.text}> {this.props.footer} </Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        height:410,
        backgroundColor:Color.secondary_color,
        marginTop:5,
        marginBottom:10,
        elevation:25,
        borderRadius:3
    },
    cardHeaderContainer:{
        height:60,
        borderBottomColor:"grey",
        borderBottomWidth:0.2,
    },
    videoContainer:{
        height:290,
        borderBottomColor:"grey",
        borderBottomWidth:0.5,
    },
    text:{
        color:Color.main_color,
        padding:20
    }

})