import React from 'react'
import {View , Text,StyleSheet } from 'react-native'
import Color from '../assets/color'
import Animated from 'react-native-reanimated'

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.header}>
                {this.props.children}
            </View>
        )
    }
}

const styles =StyleSheet.create({
    header:{
        paddingTop:30,
        height:"13%",
        backgroundColor:Color.main_color,
        width:"100%",
       
    },
})