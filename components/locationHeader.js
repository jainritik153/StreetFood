import React from 'react'
import {View , Text,StyleSheet,TextInput } from 'react-native'
import Color from '../assets/color'
import Icon from 'react-native-vector-icons/Ionicons'


export default class LocationHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                    <View style={styles.location}>
                        <Text style={styles.text}>NOW -></Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.notification}>
                        <Icon name="md-notifications-outline" size={24} color={Color.main_color}></Icon>
                    </View>
            </View>
        )
    }
} 

const styles=StyleSheet.create({
    container:{
        borderBottomWidth:0.2,
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start"
        
    },
    input:{
        borderBottomWidth:1,
        width:"55%",
        borderBottomColor:"grey",
        borderStyle:"dotted",
        borderRadius:1
    },
    location:{
        paddingLeft:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start"
    },
    notification:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
        paddingRight:20
    },
    text:{
        color:Color.main_color,
    }
})