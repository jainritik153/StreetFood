import React from 'react'
import {View,  Text,StyleSheet,SafeAreaView,TextInput} from 'react-native';

import Header from '../components/header'
import LocationHeader from '../components/locationHeader'


class NearMe extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Header>
                    <LocationHeader>

                    </LocationHeader>
                </Header>

            </View>
                
           
        )
    }
}


export default NearMe;