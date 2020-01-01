import React from 'react'
import {View,  Text,StyleSheet, ColorPropType} from 'react-native';
import Color from '../assets/color'

class Explore extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Explore Navigation
                </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       
    }
})

export default Explore;