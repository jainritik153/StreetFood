import React from 'react'
import {View , Text,StyleSheet,TextInput } from 'react-native'
import Color from '../../assets/color'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Foundation from 'react-native-vector-icons/Foundation'

export default class NotificationHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.headerContainer}>
                <View style={{flex:2}}>
                    <TouchableOpacity style={{marginLeft:15}}>
                        <Foundation name="indent-more" size={30} color={Color.theme_color}></Foundation>
                    </TouchableOpacity>
                             
                </View>
                        
                <View style={{flex:1,display:"flex",flexDirection:"row",alignItems:"center",marginLeft:80}}>
                    <TouchableOpacity style={{marginRight:18}}>
                        <MaterialIcons color={Color.theme_color} name="bookmark-border" size={30} ></MaterialIcons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons  color={Color.theme_color} name="notifications-none" size={30}></MaterialIcons>
                    </TouchableOpacity>
                </View>
                       
            </View>
        )
    }
} 

const styles=StyleSheet.create({
    headerContainer:{
     
        flexDirection:"row",
        alignItems:"center",
        marginTop:30,
        borderBottomColor:"grey",
        borderBottomWidth:0.2,
    }
})