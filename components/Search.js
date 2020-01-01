import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Color from '../assets/color'
import { TextInput } from 'react-native-gesture-handler';


export default class Search extends React.Component{
    constructor(props){

        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Icon name="md-search" size={28} style={styles.icon}></Icon>
                <TextInput style={styles.input} placeholder="Search for vendors or food">

                </TextInput>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"flex-start",
        borderWidth:0.5,
        marginVertical:5,
        borderColor:Color.main_color,
        
        padding:3,
        borderRadius:8,
        marginHorizontal:2
    },
    icon:{
        
        color:Color.main_color,
        marginHorizontal:10
    },
    input:{
        width:"75%",
        fontSize:18,
        fontWeight:"bold"
    }
})