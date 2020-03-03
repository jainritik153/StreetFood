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
                   <Card  header={"Vendor_name"} img={"https://im.rediff.com/getahead/2017/mar/28foodies5.jpg"} footer={"Likes:100"}></Card>
                   <Card header={"Vendor_name"} img={"https://im.rediff.com/getahead/2017/mar/28foodies5.jpg"} footer={"Likes:100"} ></Card>
                   <Text style={{fontSize:17,fontWeight:"bold"}}
                    >
                        Recommendations for you 
                    </Text>


                   <Card header={"Vendor_name"} img={"https://im.rediff.com/getahead/2017/mar/28foodies5.jpg"} footer={"Likes:100"} ></Card>
                   <Card header={"Vendor_name"} img={"https://im.rediff.com/getahead/2017/mar/28foodies5.jpg"} footer={"Likes:100"} ></Card>
                   <Card  header={"Vendor_name"} img={"https://im.rediff.com/getahead/2017/mar/28foodies5.jpg"} footer={"Likes:100"}></Card>
                   <Card  header={"Vendor_name"} img={"https://im.rediff.com/getahead/2017/mar/28foodies5.jpg"} footer={"Likes:100"}></Card>
                </ScrollView>
    
            </View>
                
           
        )
    }
}

const styles=StyleSheet.create({
    
})

export default NearMe;