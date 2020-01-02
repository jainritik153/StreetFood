import React from 'react'
import {View,  Text,StyleSheet} from 'react-native';
import Header from '../components/header'
import Color from '../assets/color'
class Trending extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:Color.screen_bg_color}}>
                <Header>

                </Header>
            </View>
        )
    }
}

const styles=StyleSheet.create({
})

export default Trending;