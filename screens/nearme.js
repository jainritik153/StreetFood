import React from 'react'
import {View,  Text,StyleSheet,SafeAreaView,TextInput, ColorPropType} from 'react-native';

import Header from '../components/header'
import LocationHeader from '../components/locationHeader'
import Card from '../components/card'
import Color from '../assets/color'


class NearMe extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:"rgb(51, 50, 43)"}}>
                <Header>
                    <LocationHeader/>     
                </Header>
                <Card>

                </Card>

            </View>
                
           
        )
    }
}


export default NearMe;