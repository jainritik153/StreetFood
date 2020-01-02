import React from 'react'
import {View,  Text,StyleSheet} from 'react-native';
import Header from '../components/header'
import Color from '../assets/color'

class Favourite extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Header>
                    
                </Header>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.screen_bg_color
    }
})

export default Favourite;