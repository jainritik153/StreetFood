import React from "react";
import { View, Text, StyleSheet, ScrollView ,SafeAreaView,Image,ImageBackground} from "react-native";
import {Ionicons , MaterialIcons} from 'react-native-vector-icons'
import Color from "../assets/color";
import color from "../assets/color";


const images=[
    {id:1,uri:'https://media-cdn.tripadvisor.com/media/photo-s/06/0f/1a/fc/bombay-express.jpg'},
    {id:2,uri:'https://media-cdn.tripadvisor.com/media/photo-s/06/0f/1a/fc/bombay-express.jpg'},
    {id:3,uri:'https://media-cdn.tripadvisor.com/media/photo-s/06/0f/1a/fc/bombay-express.jpg'},
    {id:4,uri:'https://media-cdn.tripadvisor.com/media/photo-s/06/0f/1a/fc/bombay-express.jpg'},
    {id:5,uri:'https://media-cdn.tripadvisor.com/media/photo-s/06/0f/1a/fc/bombay-express.jpg'},
]

export default function VendorProfile(){
    return(
        <SafeAreaView style={styles.container}> 
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    <Ionicons name="md-arrow-back" size={24} color="#52575D"></Ionicons>
                    <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
                </View>

                <View style={{alignSelf:"center"}}>
                    <View style={styles.profileImage}>
                        <Image source={{uri:"https://i.pinimg.com/originals/d4/d4/ee/d4d4ee8b3f45e22fa9306a1255c76d5c.jpg "}} style={styles.image}></Image>
                    </View>
                    <View style={styles.dm}>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text,{fontWeight:"200" , fontSize:36}]}>Manjit Station</Text>
                    <Text style={[styles.text,{color:"AEB5BC" ,fontSize:14}]}>No.1 Chaat Station</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statusBox}>
                        <Text style={[styles.text,{ fontSize:24}]}>483</Text>
                        <Text style={[styles.text,styles.subText]}>Videos</Text>
                    </View>
                    <View style={[styles.statusBox,{borderColor:"#DFD8C8",borderLeftWidth:1,borderRightWidth:1}]}>
                        <Text style={[styles.text,{ fontSize:24}]}>4800</Text>
                        <Text style={[styles.text,styles.subText]}>Likes</Text>
                    </View>
                    <View style={styles.statusBox}>
                        <Text style={[styles.text,{ fontSize:24}]}>485</Text>
                        <Text style={[styles.text,styles.subText]}>Views</Text>
                    </View>
                </View>

                <View style={{marginTop:25}}>
                    <Text style={[styles.subText,{marginLeft:20,fontSize:16,color:"#52575D",marginBottom:16,borderBottomColor:"black",borderBottomWidth:0.2}]}>Most viewed</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mediaImageContainer}>
                            <Image resizeMode="cover" style={styles.image} source={{uri:"https://media-cdn.tripadvisor.com/media/photo-s/06/0f/1a/fc/bombay-express.jpg"}}></Image>
                        </View>                       
                        <View style={styles.mediaImageContainer}>
                            <Image resizeMode="cover" style={styles.image} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvQprLw2cmhLl2VoB3cGs08NXBFYoL0KHdX4HlFQDl_Vofu1mT"}}></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image resizeMode="cover" style={styles.image} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS91XlOMvLWTpmM7r_lXIGhn6WruPK05RGs5QgufXi53p_Sb10m"}}></Image>
                        </View>
                       
                    </ScrollView>
                </View>
            
                <Text style={[styles.subText,{marginLeft:20,fontSize:16,color:"#52575D",marginTop:16,borderBottomColor:"black",borderBottomWidth:0.2}]}>All Videos</Text>
                {images.map(image=>(
                <View key={image.id} style={styles.imageConatiner}>
                    
                    <ImageBackground source={{uri:image.uri}} style={{flex:1,height:400,borderRadius:10,borderWidth:0.2,elevation:10}}
                        imageStyle={{borderRadius:10}}
                    >
                        <View style={styles.detailsContainer}>
                            <Text style={styles.title}>Dish Name with some description..</Text>
                            <Text style={styles.subtitle}>Vendor_Name </Text>
                            <View style={{flexDirection:"row",alignItems:"flex-start"}}>
                                <Text style={styles.views}>108k views </Text>
                                <Text style={styles.location}>View location</Text>
                            </View>
                            
                        </View>
                    </ImageBackground>
                </View>
            ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    text:{
        color:"#52575D"
    },
    subText:{
        fontSize:12,
        color:"#AAB5BF",
        textTransform:"uppercase",
        fontWeight:"500",
        
    },
    image:{
        flex:1,
        width:undefined,
        height:undefined
    },
    titleBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:24,
        marginHorizontal:16
    },
    profileImage:{
        width:200,
        height:200,
        borderRadius:100,
        overflow:"hidden"
    },
    dm:{
        backgroundColor:"#41444B",
        position:"absolute",
        top:20,
        width:40,
        height:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },
    infoContainer:{
        alignSelf:"center",
        alignItems:"center",
        marginTop:16
    },
    statsContainer:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop:32,
    },
    statusBox:{
        alignItems:"center",
        flex:1
    },
    mediaImageContainer:{
        width:170,
        height:210,
        borderRadius:12,
        overflow:"hidden",
        
        marginLeft:20
    },

    imageConatiner:{
        height:400,
        margin:20,
    },
    detailsContainer:{
        flex:1,
        display:'flex',
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"flex-end",
        padding:10
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        color:Color.main_color,
    },
    subtitle:{
        fontWeight:"bold",
        color:Color.main_color,
    },
    views:{
        fontWeight:"bold",
        color:Color.main_color,
    },
    location:{
        fontWeight:"bold",
        color:"green",
        paddingLeft:"45%"
    }

    
});
