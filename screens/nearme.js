import React from 'react'
import {View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput, 
    ColorPropType,
    ScrollView} from 'react-native';

import Header from '../components/header'
import LocationHeader from '../components/locationHeader'
import Card from '../components/card'
import Color from '../assets/color'


class NearMe extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:Color.screen_bg_color}}>
                <Header>
                    <LocationHeader/>     
                </Header>
                <ScrollView>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                </ScrollView>
    
            </View>
                
           
        )
    }
}

const styles=StyleSheet.create({
    
})

export default NearMe;