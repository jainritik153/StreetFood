import React from 'react'
import {View,  Text,StyleSheet, ColorPropType} from 'react-native';
import Color from '../assets/color'
import Header from '../components/header'
import Search from '../components/Search'


class Explore extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Header>
                    <Search>

                    </Search>
                </Header>
            </View>
        )
    }
}

const styles=StyleSheet.create({
  
})

export default Explore;