import React from 'react'
import {View , Text,StyleSheet,TextInput } from 'react-native'
import Color from '../../assets/color'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LocationHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{marginVertical:7,margin:10}}>
            <View style={{marginTop:2,flexDirection:"row",alignItems:"center"}}>
                   <MaterialIcons name="location-on" size={16} color="green"></MaterialIcons>
                   <Text style={{marginLeft:2,fontSize:14,fontWeight:"bold"}}>
                       Bhayandar
                   </Text>
                   <TouchableOpacity>
                       <Text style={{marginLeft:"71%",fontSize:10,color:Color.theme_color,fontWeight:"bold"}} >
                           CHANGE
                       </Text>
                   </TouchableOpacity>
                   
            </View>
        </View>
        )
    }
} 
