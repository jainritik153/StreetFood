import React from 'react'
import {View , Text,StyleSheet,Image } from 'react-native'
import Color from '../assets/color'
import color from '../assets/color';

export default class ExploreCardVideo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <View style={styles.videoContainer}>
                    <View style={styles.image}>   
                        <Image source={{uri: this.props.url } }
                               style={styles.image}
                        >

                        </Image>
                    </View>     
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Dish Name</Text>
                        <Text style={{fontSize:11}}>Dish Description with location details</Text>
                        <Text></Text>
                        <Text style={{fontSize:10, color:Color.main_color}}>Finest Place to eat in Bhayandar</Text>
                    </View>
                    
                </View>  
        )
    }
}

const styles=StyleSheet.create({
    videoContainer:{
        display:"flex",
        flexDirection:"column",
         height:220,
        width:150,
        borderColor:"black",
        marginRight:15,
        backgroundColor:"white",
        shadowColor:"black",
        elevation:5
    },
    image:{
        flex:2,
        borderBottomWidth:0.2,
    },
    footer:{
        flex:1,
        marginBottom:15,
        
    },
    footerText:{
        fontWeight:"bold",
        fontSize:15
    }
})