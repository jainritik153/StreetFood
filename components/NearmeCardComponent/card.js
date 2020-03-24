import React from 'react'
import {View , Text,StyleSheet, Image, Linking } from 'react-native'
import Color from '../../assets/color'
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
                        <Text style={{marginTop:5,fontSize:15,fontWeight:"bold"} }>Vendor_name
                        </Text>
                        <Text style={{fontSize:11,color:"grey"}}>1,162 followers</Text>
                        <Text style={{fontSize:11,color:"grey",fontStyle:"italic"}}>Mira-Bhhayandar</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row"}}>
                        <TouchableOpacity>
                            <Text style={{alignSelf:"center",marginTop:25,marginLeft:70,fontSize:15,fontWeight:"bold",color:Color.theme_color}}>+ Follow</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.videoContainer}>
                    <Image source={{uri : "https://im.rediff.com/getahead/2017/mar/28foodies5.jpg"}}
                       style={{ height: undefined,flex:1}}  
                    >

                    </Image>
                </View>

                <View styles={styles.description}>
                    
                    <View style={styles.likesContainer}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                                <EvilIcons name="like" size={35} color="grey" /> 
                                <Text style={{color:"grey",fontSize:13}}>Like</Text>   
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                                <EvilIcons name="comment" size={35} color="grey" />
                                <Text style={{color:"grey",fontSize:13}}>Comment</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                                <SimpleLineIcons name="star" size={20} color="grey" />
                                <Text style={{marginLeft:5, color:"grey",fontSize:13}}>Reviews</Text>
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
        //width:345,
        backgroundColor:Color.screen_bg_color,
        //marginVertical:5,
        //borderColor:"black",
        //borderWidth:0.2,
        //margin:5,
       // elevation:10,
        //borderRadius:10

    },
    descriptionText:{
        marginHorizontal:5,
    },
    
    videoContainer:{
        height:380,
        borderBottomColor:"grey",
        borderBottomWidth:0.5,
    },
   
    likesContainer:{
        display:"flex",
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        marginVertical:5,
        marginHorizontal:15,
        justifyContent:"space-between",
       // borderBottomWidth:0.2,
       // borderBottomColor:"grey",
        padding:5,
        
    },
    cardHeaderContainer:{
        flex:1,
        flexDirection:"row",
        //borderBottomColor:"grey",
        //borderBottomWidth:0.2,
        marginVertical:5
    },
    profileImage:{
        margin:5,
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

})