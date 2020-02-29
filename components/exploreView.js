import React from 'react'
import {View , Text,StyleSheet,ScrollView } from 'react-native'
import Color from '../assets/color'
import ExploreCard from '../components/exploreCard'


export default class ExploreView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ScrollView>
                <View >
                    <ExploreCard foodCategory={"Chineese"}></ExploreCard>
                    <ExploreCard foodCategory={"South Indian"}></ExploreCard>
                    <ExploreCard foodCategory={"Italian"}></ExploreCard>
                </View> 
            </ScrollView>
        )
    }

}
