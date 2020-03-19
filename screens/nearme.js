import React from 'react'
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
import Color from '../assets/color'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import NotificationHeader from '../components/HeaderComponent/notificatioHeader'

class NearMe extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:"white"}}>
                <Header>
                   <NotificationHeader/>
                   <LocationHeader/>
                </Header>
                <ScrollView >
                   <Card ></Card>
                   <Card ></Card>
                   <Card ></Card>
                   <Card ></Card>
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