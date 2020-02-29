import React from 'react'
import {View , Text,StyleSheet,Image } from 'react-native'
import Color from '../assets/color'
import color from '../assets/color';

export default class ExploreCardVideo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.videoContainer}>
                <Image source={{uri:'https://im.rediff.com/getahead/2017/mar/28foodies5.jpg' } }></Image>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    videoContainer:{
        height:205,
        width:150,
        borderWidth:1,
        borderColor:Color.screen_bg_color,
        margin:1,
    }
})