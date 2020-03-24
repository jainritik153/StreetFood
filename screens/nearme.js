import React,{useState} from 'react'
import {View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput, 
    ColorPropType,
    ScrollView} from 'react-native';

import Header from '../components/HeaderComponent/header'
import LocationHeader from '../components/HeaderComponent/locationHeader'
import Card from '../components/NearmeCardComponent/card'
import NotificationHeader from '../components/HeaderComponent/notificatioHeader'

export default function NearMe(){
        return(
            <View style={{flex:1,backgroundColor:"white"}}>
                <Header>
                   <NotificationHeader/>
                   <LocationHeader/>
                </Header>
                <ScrollView >
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

const styles=StyleSheet.create({
 
})
