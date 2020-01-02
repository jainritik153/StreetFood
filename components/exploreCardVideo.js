import React from 'react'
import {View , Text,StyleSheet } from 'react-native'
import Color from '../assets/color'
import color from '../assets/color';

export default class ExploreCardVideo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.videoContainer}>
                <Text style={{color:Color.main_color}}>
                    Food Video
                </Text>
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