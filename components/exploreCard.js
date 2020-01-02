import React from 'react'
import {View , Text,StyleSheet,ScrollView } from 'react-native'
import Color from '../assets/color'
import color from '../assets/color';
import ExploreCardVideo from '../components/exploreCardVideo'

export default class ExploreCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.exploreCardHeader}>
                   <Text style={{color:Color.main_color,padding:10}}>
                       Food Categpry
                   </Text>
                </View>
                <ScrollView horizontal={true}> 
                    <View style={{flexDirection:"row"}}>
                        <ExploreCardVideo></ExploreCardVideo>
                        <ExploreCardVideo></ExploreCardVideo>
                        <ExploreCardVideo></ExploreCardVideo>
                        <ExploreCardVideo></ExploreCardVideo>
                    </View>
                    
                </ScrollView>
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        height:250,
        backgroundColor:Color.secondary_color,
        marginLeft:2,

        marginTop:8,
        marginBottom:2,
        borderTopLeftRadius:5,
        borderTopEndRadius:5,
        elevation:20

    },
    exploreCardHeader:{
       height:45,
       borderBottomColor:Color.screen_bg_color,
       borderBottomWidth:1,
    },
})