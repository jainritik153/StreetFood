import React from 'react'
import {View , Text,StyleSheet, Image, Linking } from 'react-native'
import Color from '../assets/color'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {EvilIcons,SimpleLineIcons} from 'react-native-vector-icons'

export default class Card extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
               
                <View style={styles.cardHeaderContainer}>
                    <View style={styles.profileImage}>
                            <Image source={{uri:"https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg "}} style={styles.image}></Image>
                    </View>
                    <View style={{flex:1,flexDirection:"column"}}>
                        <Text style={{marginTop:10,fontSize:15,fontWeight:"bold"}}>{this.props.header}</Text>
                        <Text style={{fontSize:11,color:"grey"}}>1,162 followers</Text>
                        <Text style={{fontSize:11,color:"grey",fontStyle:"italic"}}>Mira-Bhhayandar</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row"}}>
                        <TouchableOpacity>
                            <Text style={{alignSelf:"center",marginTop:25,marginLeft:70,fontSize:15,fontWeight:"bold",color:"green"}}>+ Follow</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.videoContainer}>
                    <Image source={{uri : this.props.img}}
                       style={{ height: undefined,flex:1}}  
                    >

                    </Image>
                </View>

                <View styles={styles.description}>
                    <Text style={{marginHorizontal:12,marginTop:10, color:"grey",fontWeight:"bold",borderBottomColor:"black",borderBottomWidth:0.2,color:"grey"}}>
                        Description:
                    </Text>
                    <View style={styles.likesContainer}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                                <EvilIcons name="like" size={40} color="grey" /> 
                                <Text style={{color:"grey",fontSize:15}}>Like</Text>   
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                                <EvilIcons name="comment" size={40} color="grey" />
                                <Text style={{color:"grey",fontSize:15}}>Comment</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                                <SimpleLineIcons name="share" size={23} color="grey" />
                                <Text style={{marginLeft:5, color:"grey",fontSize:15}}>Share</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
       
        backgroundColor:Color.main_color,
        elevation:1000,
        marginVertical:8

    },
    descriptionText:{
        marginHorizontal:12,
    },
    
    videoContainer:{
        overflow:"hidden",
        height:350,
        borderBottomColor:"grey",
        borderBottomWidth:0.5,
    },
    cardHeaderContainer:{
        flex:1,
        flexDirection:"row",
        borderBottomColor:"grey",
        borderBottomWidth:0.2,
    },
    profileImage:{
        margin:12,
        width:50,
        height:50,
        borderRadius:100,
        overflow:"hidden",
        borderWidth:0.2,
        borderColor:"black"
    },
    image:{
        flex:1,
        width:undefined,
        height:undefined
    },
    likesContainer:{
        display:"flex",
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        marginVertical:8,
        marginHorizontal:20,
        justifyContent:"space-between"
    }

})