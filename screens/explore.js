import React from 'react'
import {View,  Text,StyleSheet, ColorPropType} from 'react-native';
import Color from '../assets/color'
import Header from '../components/HeaderComponent/header'
import Search from '../components/Search'
import ExploreView from '../components/exploreView'

class Explore extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:Color.screen_bg_color}}>
                <Header>
                    <Search/>
                </Header>
                <ExploreView>

                </ExploreView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
  
})

export default Explore;